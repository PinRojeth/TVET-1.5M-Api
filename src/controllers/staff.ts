import { Model } from 'mongoose';
import controllers from '.';
import { IStaffs, ObjectId, createSession } from '../models';
import EnumConstant, { Role } from '../utils/enumConstant';
import AbstractController from './abstract_controller';
import CommonUtil from '../utils/common';

export default class StaffController extends AbstractController<IStaffs> {
    model: Model<IStaffs>;
    constructor(model: Model<IStaffs>) {
        super(model);
        this.model = model;
    }

    selectData = "first_name last_name first_name_en last_name_en profile_image phone_number gender";
    
    async getStaffOne(req: any) {
        const staff = await this.getOne({
            query: {_id: req.params._id, status : {$ne : EnumConstant.DELETE}},
            populates: [
                { path: "nationality", select: "name" },
                { path: "ethnicity", select: "name" },
                { path: "address.villages", select: "name" },
                { path: "address.communes", select: "name" },
                { path: "address.districts", select: "name" },
                { path: "address.city_provinces", select: "name" },
                { path: "place_of_birth.villages", select: "name" },
                { path: "place_of_birth.communes", select: "name" },
                { path: "place_of_birth.districts", select: "name" },
                { path: "place_of_birth.city_provinces", select: "name" },
                { path: "schools", select: "name profile_image" },
                { path: "user_departments", select: "name name_en" },
                {
                    path: "users", select: "username roles", populate: [
                        {path: "roles", select: "name permissions"}
                ]},
            ],
            select: "-updatedAt -__v"
        }) as IStaffs
        this.checkThrowNotFound(staff);
        let json = CommonUtil.JSONParse(staff);
        if (json.users.roles._id == Role.school._id || json.users.roles._id == Role.teacher._id) {
            json.users.roles.schools = true;
        }
        if (json.users.roles._id == Role.officer._id) {
            json.users.roles.user_departments = true;
        }
        return json
    }
    
    async create(req: any) {
        let { username, password, roles } = req.body;
        req.body.username = req.body.username.toLowerCase();
        await this.validation(req);
        if (req.body._user.schools) {
            req.body.schools = req.body._user.schools;
        }
        req.body.create_by = req.body._user._id;
        if (req.body.files.profile_image) {
            let promise = await controllers.fileData.uploadProfileWithResize(EnumConstant.BucketName.STAFF_PROFILE, req.body.files.profile_image, req.body._user._id) as any;
            if (promise) {
                req.body.profile_image = promise._id;
            }
        } else {
            delete req.body.profile_image;
        }
        req.body.status = EnumConstant.ACTIVE;
        let staff = new this.model(req.body);
        let user = await controllers.user.createUserModel({ roles, username, password, staffs: staff._id });
        staff.users = user._id;
        return createSession(async (session: any) => {
            await this.models.user.create([user], { session: session });
            return (await this.model.create([staff], {session: session}))[0]
        })
    }

    private async validation(req: any) {
        let validateFields: any[] = [];
        let roles = Number(req.body.roles);
        if (req.body.address) {
            validateFields.push(controllers.address.validateAddress(req.body.address));
            req.body.address = CommonUtil.ParseValidJson(req.body.address);
        }
        if (req.body.place_of_birth) {
            validateFields.push(controllers.address.validateAddress(req.body.place_of_birth));
            req.body.place_of_birth = CommonUtil.ParseValidJson(req.body.place_of_birth);
        }
        if (req.body.username) {
            validateFields.push(controllers.user.validateUsername(req.body.username));
        }
        if (roles) {
            if (roles == Role.school._id || roles == Role.teacher._id) {
                if (roles == Role.teacher._id) {
                    req.body.is_teaching = EnumConstant.ACTIVE;
                }
                validateFields.push(controllers.school.validateId(req.body.schools))
            }
            if (roles == Role.officer._id) {
                validateFields.push(controllers.userDepartment.validateId(req.body.user_departments))
            }
            validateFields.push(controllers.role.validate(req,roles))
        }
        await Promise.all([
            ...validateFields,
        ]);
    }

    async update(req: any) {
        let query: any = {
            _id: req.params._id,
            status: {$ne : EnumConstant.DELETE}
        }
        if (req.body._user.schools){
            query.schools = req.body._user.schools;
        }
        let getStaff = await this.getOne({
            query: query,
            populates: [
                {path: "users", select: "-permissions"}
            ]
        }) as IStaffs;
        this.checkThrowNotFound(getStaff);
        let roles = Number(req.body.roles);
        await this.validation(req)
        let unset : any = {};
        let data = new this.model(req.body)
        data = CommonUtil.removeKeys(data, ["_id", "status", "create_by", "profile_image", "cv_file", "cv_filename"])
        if (String(req.body.remove_profile_image) == "true") {
            unset.profile_image = "";
            controllers.fileData.deleteFileFromGrid(getStaff.profile_image);
        } else if (req.body.files.profile_image) {
            let promise = await controllers.fileData.uploadProfileWithResize(EnumConstant.BucketName.STAFF_PROFILE, req.body.files.profile_image, req.params._id) as any;
            if (promise) {
                data.profile_image = promise._id;
            }
            controllers.fileData.deleteFileFromGrid(getStaff.profile_image);
        }
        return await createSession(async (session) => {
            if (roles) {
                if (roles != getStaff.users.roles) {
                    await this.models.user.findOneAndUpdate({ _id: getStaff.users._id }, { $set: { roles: roles } }, { session: session });
                }
                if (roles != Role.school._id && roles != Role.teacher._id) {
                    unset.schools = ""
                }
                if (roles != Role.officer._id) {
                    unset.user_departments = ""
                }
            }
            return this.model.findOneAndUpdate({ _id: getStaff._id }, { $set: data, $unset: unset }, { new: true, session });
        })
    }

    async setActive(req: any) {
        let staffs = req.body.staffs;
        if (String(staffs) == String(req.body._user._id)) {
            this.throwHttpError("invalid staffs")
        }
        let targetStatus = Number(req.body.status as string);
        let query: any = {
            _id: staffs,
        }
        if (targetStatus == EnumConstant.ACTIVE) {
            query.status = EnumConstant.DISABLED;
        } else {
            query.status = EnumConstant.ACTIVE;
        }
        let getStaff = await controllers.staff.getOne({
            query: query
        }) as IStaffs;
        this.checkThrowNotFound(getStaff);
        return createSession(async (session: any) => { 
            await this.models.user.findOneAndUpdate({ _id: getStaff.users }, { $set: { status: targetStatus } }, { session: session });
            return await this.model.findOneAndUpdate({ _id: getStaff._id }, { $set: { status: targetStatus } }, { session: session, new: true });
        });
    }

    async getList( req: any) {
        let [skip, limit] = this.skipLimit(req)
        let { search, roles, gender } = req.query;
        let match: any = {
            _id: {$ne : new ObjectId(req.body._user._id)},
        }
        if (req.query.status) {
            if (Number(req.query.status) == EnumConstant.DELETE) {
                controllers.staff.throwHttpError("bad request");
            }
            match.status = req.query.status;
        } else {
            match.status = { $ne: EnumConstant.DELETE }
        }
        if (gender) {
            match.gender = gender;   
        }
        if (req.body._user.schools) {
            match.schools = new ObjectId(req.body._user.schools);
        }
        let matchSearch: any = {};
        if (search) {
            matchSearch.$or = CommonUtil.searchNameCode(search);
        }
        let matchRole : any = {}
        if (roles) {
            matchRole.roles = Number(roles);  
        } else {
            let [getRoles, countRole] = await controllers.role.getAvailableRole(req);
            matchRole.roles = {$in:getRoles.map(item => item._id)}
        }
        let data = await this.model.aggregate([
            { $match: match },
            {
                $addFields: {
                    name: { $toLower: { $concat: ['$last_name', " ", '$first_name'] } },
                    name_en: { $toLower: { $concat: ['$last_name_en', " ", '$first_name_en'] } }
                }
            },
            { $match: matchSearch },
            {
                $lookup: {
                    from: 'users',
                    let: { id: "$users" },
                    pipeline: [
                        {
                            $match: {
                                $expr: { $eq: ["$_id", "$$id"] },
                                status: EnumConstant.ACTIVE,
                                ...matchRole
                            }
                        },
                        {
                            $project: {
                                roles: 1, username: 1, 
                            }
                        }
                    ],
                    as: 'users'
                }
            },
            {
                $unwind: {path: "$users"}
            },
            {
                $project: { 
                    first_name: 1, last_name: 1, first_name_en: 1, last_name_en: 1, gender: 1,
                    phone_number: 1, users: 1, status: 1, profile_image: 1, schools: 1, user_departments: 1
                }
            }, 
            { $sort: { _id : -1}},
            this.facetAggregate({skip, limit})
        ])
        return this.facetData(data, [
            {path: "users.roles", model:"roles", select: "name name_en"},
            {path: "schools", model:"schools", select: "name name_en"},
            {path: "user_departments", model:"user_departments", select: "name name_en"},
        ]);
    }

    async filterData(req: any) {
        // let query: any = {
        //     status: EnumConstant.ACTIVE
        // }
        // let roles = await controllers.role.getManyNoCount({
        //     query: query,
        //     sort: {
        //         _id: 1
        //     },
        //     select: "-permissions -__v -updatedAt -createdAt"
        // })
        let [roles, count] = await controllers.role.getAvailableRole(req);
        return {
            gender: [EnumConstant.Gender.MALE, EnumConstant.Gender.FEMALE],
            roles: roles
        }
    }

}