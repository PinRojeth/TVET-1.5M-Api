import { Model } from 'mongoose';
import { ISchools, ObjectId, createSession } from '../models';
import AbstractController from './abstract_controller';
import controllers from '.';
import EnumConstant, { Role } from '../utils/enumConstant';
import CommonUtil from '../utils/common';

export default class SchoolController extends AbstractController<ISchools> {
    model: Model<ISchools>;
    constructor(model: Model<ISchools>) {
        super(model);
        this.model = model;
    }
    
    async create(req: any) {
        let { username, password, first_name, last_name } = req.body;
        let jsonData = new this.model(req.body);
        let [checkExist, checkUsername] = await Promise.all([ //countMajor
            this.checkNameExist({ req }),
            controllers.user.checkUsername(username),
            // controllers.applyMajor.countDocument({ _id: { $in: jsonData.apply_majors }})
        ]) 
        this.checkThrowAlreadyExist(checkExist);
        controllers.user.checkThrowAlreadyExist(checkUsername);
        // if (countMajor != jsonData.apply_majors.length) {
        //     this.throwHttpError("invalid apply_majors");
        // }
       
        if (req.body.address) {
            await controllers.address.validateAddress(req.body.address);
            jsonData.address = JSON.parse(req.body.address);
        }
        if (req.body.files.profile_image) {
            let promise = await controllers.fileData.uploadProfileWithResize(EnumConstant.BucketName.SCHOOL_DATA, req.body.files.profile_image, req.body._user._id) as any;
            if (promise) {
                jsonData.profile_image = promise._id;
            }
            delete req.body.files.profile_image;
        }
        let staff = new this.models.staff();
        staff.first_name = first_name;
        staff.last_name = last_name;
        staff.schools = jsonData._id;
        let user = await controllers.user.createUserModel({ roles: Role.school._id, username, password, staffs: staff._id });
        staff.users = user._id;
        return createSession(async (session: any) => { 
            await this.models.staff.create([staff], { session: session });
            await this.models.user.create([user], { session: session });
            return (await this.model.create([jsonData], { session: session }))[0];
        });
    }

    async update(req: any) {
        delete req.body.profile_image;
        let jsonData = new this.model(req.body);
        let query: any = {
            _id: req.params._id,
            status: { $ne: EnumConstant.DELETE }
        }
        let schools = req.body._user.schools; 
        if (schools) {
            query._id = schools
        }
        const [getSchool, checkName] = await Promise.all([ //countMajor
            controllers.school.getOne({
                query: query,
                select: "_id"
            }),
            this.checkNameExist({ req }),
            // controllers.applyMajor.countDocument({ _id: { $in: jsonData.apply_majors }})
        ])
        this.checkThrowNotFound(getSchool);
        this.checkThrowAlreadyExist(checkName);
        // if (countMajor != jsonData.apply_majors.length) {
        //     this.throwHttpError("invalid apply_majors");
        // }
        if (req.body.address) {
            await controllers.address.validateAddress(req.body.address);
            jsonData.address = JSON.parse(req.body.address);
        }
        if (req.body.remove_profile_image == "true") {
            jsonData.profile_image = "";
            // controllers.fileData.deleteFileFromGrid(jsonData.profile_image);//Can't delete: certificate need profile, 
        } else if (req.body.files.profile_image) {
            let promise = await controllers.fileData.uploadProfileWithResize(EnumConstant.BucketName.SCHOOL_DATA, req.body.files.profile_image, req.body._user._id) as any;
            if (promise) {
                jsonData.profile_image = promise._id;
            }
        }
        let objs = CommonUtil.removeKeys(jsonData, ["_id"]);
        return this.model.findOneAndUpdate({ _id: getSchool._id }, { $set: objs }, { new: true });
    }

    async getSchoolList(req: any, futureCourse: boolean = false) {
        let { search, city_provinces } = req.query;
        let [skip, limit] = this.skipLimit(req);
        let query: any = {
            status: EnumConstant.ACTIVE
        }
        if (req.body._user) {
            if (req.body._user.schools) {
                query._id = new ObjectId(req.body._user.schools)
            }
        }
        let matchSearch: any = {}
        if (search) {
            let s = search.replace(/[&\/\\?+()${}]/g, "");
            matchSearch.$or = [
                { name: { $regex: s, $options: "i" } },
                { name_en: { $regex: s, $options: "i" } },
                { code: { $regex: s, $options: "i" } },
                { phone_number: { $regex: s, $options: "i" } },
                { "courses.name": { $regex: s, $options: "i" } },
                { "courses.name_en": { $regex: s, $options: "i" } },
            ]
        }
        if (city_provinces) {
            query["address.city_provinces"] = Number(city_provinces)
        }
        let matchCourse : any =  {
            $expr: { $eq: ["$schools", "$$schoolId"] },
            status: EnumConstant.ACTIVE,
            registation_end: { $gte: new Date() },
        }
        if (!futureCourse) {
            matchCourse.registation_start = { $lte: new Date() }
        }
        let data = await this.model.aggregate([
            {
                $match: query,
            },
            {
                $lookup: {
                    from: 'courses',
                    let: { schoolId: "$_id" },
                    pipeline: [
                        {
                            $match: matchCourse
                        },
                        {
                            $lookup: {
                                from: 'students',
                                let: { courseId: "$_id", stAmount: "$student_amount" },
                                pipeline: [
                                    {
                                        $match: {
                                            $expr: { $eq: ["$courses", "$$courseId"] },
                                            scholarship_status:EnumConstant.ACTIVE,
                                        }
                                    },
                                    {
                                        $count: "count"
                                    },
                                ],
                                as: 'students'
                            }
                        },
                        {
                            $addFields: {
                                appliedCount: { 
                                    "$ifNull": [{ "$arrayElemAt": ["$students.count", 0] }, 0]
                                },
                            }
                        },
                        {
                            $match: {
                                $expr: {$gt: ["$student_amount", "$appliedCount"]}
                            }
                        },
                        {
                            $lookup: {
                                from: 'skills',
                                let: { id: "$apply_majors" },
                                pipeline: [
                                    {
                                        $match: {
                                            $expr: { $eq: ["$_id", "$$id"] },
                                        }
                                    }
                                ],
                                as: 'apply_majors'
                            }
                        },
                        { $unwind: { path: "$apply_majors" } },
                        {
                            $lookup: {
                                from: 'shifts',
                                let: { id: "$shifts" },
                                pipeline: [
                                    {
                                        $match: {
                                            $expr: { $eq: ["$_id", "$$id"] },
                                        }
                                    }
                                ],
                                as: 'shifts'
                            }
                        },
                        { $unwind: { path: "$shifts" } },
                        {
                            $addFields: {
                                name: { $toLower: { $concat: ["$code", " | ", "$apply_majors.name", " | " , "$shifts.name"] } },
                                name_en: { $toLower: { $concat: ["$code", " | ", "$apply_majors.name_en", " | " , "$shifts.name_en"] } },
                            }
                        },
                        {
                            $project: {
                                name_en: 1, name: 1,
                                duration: 1, code: 1,
                                student_amount: 1, registation_start: 1,
                                registation_end: 1, requirement: 1, 
                                apply_majors: 1,
                                is_active: {
                                    $cond: {
                                        if: { $gt: ["$registation_start", new Date()] },
                                        then: EnumConstant.INACTIVE,
                                        else: 1
                                    }
                                },     
                            }
                        }
                    ],
                    as: 'courses'
                }
            },
            {
                $unwind: {
                    path: "$courses"
                }
            },
            { $match: matchSearch },
            {
                $project: {
                    name: 1, name_en: 1, profile_image: 1, address: 1, courses: 1, id_code: 1,
                }
            },
            {
                $group: {
                    _id: "$_id",
                    name: {$first: "$name"},
                    name_en: {$first: "$name_en"},
                    profile_image: { $first: "$profile_image" },
                    courses: { $addToSet: "$courses" },
                    apply_majors: { $addToSet: "$courses.apply_majors._id" },
                    address: {$first: "$address"},
                    id_code: {$first: "$id_code"},
                }
            },
            {
                $addFields: {
                    major_count: {$size:"$apply_majors"}
                }
            },
            {
                $sort: {
                    id_code: 1,
                }
            },
            this.facetAggregate({skip,limit: limit})
        ]);
        return this.facetData(data, [
            { path: "address.villages", select: "name name_en", model: "villages" },
            { path: "address.communes", select: "name name_en", model: "communes" },
            { path: "address.districts", select: "name name_en", model: "districts" },
            { path: "address.city_provinces", select: "name name_en", model: "city_provinces" },
        ]);
    }

    async lmsActiveCourse(req: any) {
        let _id = new ObjectId(req.params._id);
        let query: any = {
            _id: _id,
            status: EnumConstant.ACTIVE
        }
        let data = await this.model.aggregate([
            {
                $match: query,
            },
            {
                $lookup: {
                    from: 'courses',
                    let: { schoolId: "$_id" },
                    pipeline: [
                        {
                            $match: {
                                $expr: { $eq: ["$schools", "$$schoolId"] },
                                status: EnumConstant.ACTIVE,
                                registation_start: { $lte: new Date() },
                                registation_end: { $gte: new Date() },
                            }
                        },
                        {
                            $lookup: {
                                from: 'skills',
                                let: { id: "$apply_majors" },
                                pipeline: [
                                    {
                                        $match: {
                                            $expr: { $eq: ["$_id", "$$id"] },
                                            status: EnumConstant.ACTIVE,
                                        }
                                    }
                                ],
                                as: 'apply_majors'
                            }
                        },
                        { $unwind: { path: "$apply_majors" } },
                        {
                            $addFields: {
                                name: "$apply_majors.name",
                                name_en: "$apply_majors.name_en",
                            }
                        },
                        {
                            $project: {
                                name_en: 1, name: 1, duration: 1, code: 1, registation_start: 1, registation_end: 1,                
                            }
                        }
                    ],
                    as: 'courses'
                }
            },
            {
                $unwind: { path: "$courses"}
            },
            {$replaceRoot: { newRoot: "$courses"}},
        ]);
        return data;
    }

    async lmsSchoolDetail(req: any) {
        let _id = new ObjectId(req.params._id);
        let query: any = {
            _id: _id,
            status: EnumConstant.ACTIVE
        }
        let data = await this.model.aggregate([
            {
                $match: query,
            },
            {
                $lookup: {
                    from: 'courses',
                    let: { schoolId: "$_id" },
                    pipeline: [
                        {
                            $match: {
                                $expr: { $eq: ["$schools", "$$schoolId"] },
                                status: EnumConstant.ACTIVE,
                                registation_end: { $gte: new Date() },
                            }
                        },
                        {
                            $lookup: {
                                from: 'skills',
                                let: { id: "$apply_majors" },
                                pipeline: [
                                    {
                                        $match: {
                                            $expr: { $eq: ["$_id", "$$id"] },
                                            status: EnumConstant.ACTIVE,
                                        }
                                    },
                                    {
                                        $project: {name: 1, name_en: 1, sectors: 1}
                                    }
                                ],
                                as: 'apply_majors'
                            }
                        },
                        { $unwind: { path: "$apply_majors" } },
                        {
                            $addFields: {
                                name: "$apply_majors.name",
                                name_en: "$apply_majors.name_en",
                            }
                        },
                        {
                            $project: {
                                name_en: 1, name: 1,
                                duration: 1, code: 1,
                                registation_start: 1, registation_end: 1,
                                student_amount: 1, shifts: 1, apply_majors: 1,
                                schools: 1,
                                course_start: 1, course_end: 1,
                                status: {
                                    $cond: {
                                        if: { $gt: ["$registation_start", new Date()] },
                                        then: EnumConstant.INACTIVE,
                                        else: "$status"
                                    }
                                },               
                            }
                        },
                        {
                            $addFields: {
                                is_active: "$status",
                            }
                        }
                    ],
                    as: 'courses'
                }
            },
            {
                $project: {
                    __v: 0, createdAt: 0, apply_majors: 0, updatedAt: 0,
                }
            }
        ]);
        if (data.length < 1) {
            this.checkThrowNotFound(null);
        }
        let getData = data[0];
        return await this.model.populate(getData, [
            { path: "courses.shifts", select: "name name_en", model: "shifts" },
            {
                path: "courses.apply_majors.sectors", select: "name name_en sectors", model: "sectors",
            },
            { path: "courses.schools", select: "name name_en profile_image", model: "schools" },
            { path: "address.villages", select: "name name_en", model: "villages" },
            { path: "address.communes", select: "name name_en", model: "communes" },
            { path: "address.districts", select: "name name_en", model: "districts" },
            { path: "address.city_provinces", select: "name name_en", model: "city_provinces" },
        ]);
    }

    async cityProvinceBySchool(req: any) {
        let data = await this.model.aggregate([
            {
                $match: {
                    status: EnumConstant.ACTIVE,
                }
            },
            {
                $lookup: {
                    from: 'courses',
                    let: { schoolId: "$_id" },
                    pipeline: [
                        {
                            $match: {
                                $expr: { $eq: ["$schools", "$$schoolId"] },
                                status: EnumConstant.ACTIVE, 
                                // registation_start: {$lte : new Date()},
                                registation_end: {$gte : new Date()},
                            }
                        },
                       
                    ],
                    as: 'courses'
                }
            },
            { $unwind: { path: "$courses" }},
            {
                $group: {
                    _id: "$address.city_provinces"
                }
            },
            {
                $lookup: {
                    from: 'city_provinces',
                    let: { ids: "$_id" },
                    pipeline: [
                        {
                            $match: {
                                $expr: { $eq: ["$_id", "$$ids"] } ,
                            }
                        },
                        {
                            $project: {
                                name: 1, name_en: 1, code: 1,
                            }
                        }
                    ],
                    as: 'city_provinces'
                }
            },
            {
                $unwind: { path: "$city_provinces"}
            },
            {$replaceRoot: { newRoot: "$city_provinces"}},
            {$sort: {_id: 1 }}
        ])
        return data;
    }

    async validateId(schools: any) {
        this.checkThrowNotFound(schools); 
        let data =await this.getOne({
            query: {_id: schools}
        })
        this.checkThrowNotFound(data); 
    }

    async filterData(req: any) {
        let query: any = {
            status: EnumConstant.ACTIVE
        }
        if (req.body._user.schools) {
            query._id = new ObjectId(req.body._user.schools);
        }
        let data = await this.model.aggregate([
            {
                $match: query, 
            },
            {
                $group: {
                    _id: "null",
                    city_provinces: { $addToSet: "$address.city_provinces" },
                }
            },
            {
                $lookup: {
                    from: 'city_provinces',
                    let: { ids: "$city_provinces" },
                    pipeline: [
                        {
                            $match: {
                                $expr: { $in: ["$_id", "$$ids"] },
                            }
                        },
                        {
                            $project: {
                                name: 1, name_en: 1, code: 1,
                            }
                        }
                    ],
                    as: 'city_provinces'
                }
            },
            {
                $project: {
                    _id: 0
                }
            }
        ])
        if (data.length < 1) {
            return {
                city_provinces: []
            }
        }
        return data[0]
    }

    async filterDataLms(req: any) {
        let data = await this.model.aggregate([
            {
                $match: {
                    status: EnumConstant.ACTIVE
                }, 
            },
            {
                $lookup: {
                    from: 'courses',
                    let: { schoolId: "$_id" },
                    pipeline: [
                        {
                            $match: {
                                $expr: { $eq: ["$schools", "$$schoolId"] },
                                status: EnumConstant.ACTIVE,
                                registation_end: { $gte: new Date() },
                            }
                        },
                    ],
                    as: 'courses'
                }
            },
            {
                $unwind: {
                    path: "$courses"
                }
            },
            {
                $group: {
                    _id: "null",
                    city_provinces: { $addToSet: "$address.city_provinces" },
                }
            },
            {
                $lookup: {
                    from: 'city_provinces',
                    let: { ids: "$city_provinces" },
                    pipeline: [
                        {
                            $match: {
                                $expr: { $in: ["$_id", "$$ids"] },
                            }
                        },
                        {
                            $project: {
                                name: 1, name_en: 1, code: 1,
                            }
                        }
                    ],
                    as: 'city_provinces'
                }
            },
            {
                $sort: {_id: 1}
            },
            {
                $project: {
                    _id: 0
                }
            }
        ])
        if (data.length < 1) {
            return {
                city_provinces: []
            }
        }
        return data[0]
    }

    async lmsGetList(req: any) {
        let data = await this.model.aggregate([
            {
                $match: {
                    status: EnumConstant.ACTIVE, 
                }
            },
            {
                $lookup: {
                    from: 'courses',
                    let: { schoolId: "$_id" },
                    pipeline: [
                        {
                            $match: {
                                $expr: { $eq: ["$schools", "$$schoolId"] },
                                status: EnumConstant.ACTIVE, 
                                registation_end: { $gte: new Date() },
                                apply_majors: new ObjectId(req.query.apply_majors),
                                shifts: new ObjectId(req.query.shifts),
                            }
                        },
                        {
                            $lookup: {
                                from: 'students',
                                let: { courseId: "$_id", stAmount: "$student_amount" },
                                pipeline: [
                                    {
                                        $match: {
                                            $expr: { $eq: ["$courses", "$$courseId"] },
                                            scholarship_status: EnumConstant.ACTIVE,
                                        }
                                    },
                                    {
                                        $count: "count"
                                    },
                                ],
                                as: 'students'
                            }
                        },
                        {
                            $addFields: {
                                appliedCount: { 
                                    "$ifNull": [{ "$arrayElemAt": ["$students.count", 0] }, 0]
                                },
                            }
                        },
                        {
                            $match: {
                                $expr: {$gt: ["$student_amount", "$appliedCount"]}
                            }
                        },
                        {
                            $sort: {registation_start: 1},
                        },
                        {$limit: 1},
                        {
                            $project: {
                                name_en: 1, name: 1,
                                registation_start: 1, registation_end: 1,
                                course_start: 1, course_end: 1,
                                requirement: 1, 
                                is_active: {
                                    $cond: {
                                        if: { $gt: ["$registation_start", new Date()] },
                                        then: EnumConstant.INACTIVE,
                                        else: 1
                                    }
                                },     
                            }
                        }
                    ],
                    as: 'courses'
                }
            },
            {
                $unwind: {
                    path: "$courses"
                }
            },
            {
                $project: {
                    name: 1, name_en: 1, profile_image: 1, address: 1, courses: 1, 
                }
            }
        ]);
        await this.model.populate(data, [
            { path: "address.districts", select: "name name_en", model: "districts" },
            { path: "address.city_provinces", select: "name name_en", model: "city_provinces" },
        ])
        return data;
    }


    async getSchoolForFilter(req: any) {
        let query: any = {
            status: EnumConstant.ACTIVE
        }
        if (req.body._user.schools) {
            query._id = req.body._user.schools
        }
        return this.getManyNoCount({
            query: query,
            select:"profile_image name name_en code"
        })
    }
    
}