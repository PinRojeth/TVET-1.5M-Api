import { Model } from 'mongoose';
import { IStudents, ObjectId, createSession } from '../models';
import EnumConstant from '../utils/enumConstant';
import AbstractController from './abstract_controller';
import controllers from '.';
import CommonUtil from '../utils/common';

export default class Controller extends AbstractController<IStudents> {
    model: Model<IStudents>;
    constructor(model: Model<IStudents>) {
        super(model);
        this.model = model;
    }

    async getList(req: any) {
        let [skip, limit] = this.skipLimit(req);
        let { search, gender, schools,  status}: any = req.query; //apply_majors,
        let query: any = {
            status: EnumConstant.ACTIVE,
            verify_status: EnumConstant.ACTIVE
        };
        if (req.body._user.schools) {   
            schools = req.body._user.schools; 
        }
        if (schools) {
            query.schools = new ObjectId(schools);
        }
        if (gender) {
            query.gender = gender;
        }
        let matchStatus: any = {}
        if (status) {
            if (status == EnumConstant.REQUESTING) {
                matchStatus.verify_status = EnumConstant.ACTIVE;
                matchStatus.$or = [
                    {approval_info_status: null },
                    {approval_info_status: EnumConstant.REQUESTING },
                ]
            } else {
                matchStatus.approval_info_status = Number(status);   
            }
        }
        let matchSearch: any = {};
        if (search) {
            let s = search.replace(/[&\/\\?+()${}]/g, "");
            matchSearch.$or = [
                ...CommonUtil.searchNameCode(search),
                { poor_id: { $regex: s, $options: "i" } }
            ]
        }
        // let matchMajor: any = {}
        // if (apply_majors) {
        //     matchMajor.apply_majors = new ObjectId(apply_majors);
        // }
        let data = await this.model.aggregate([
            { $match: query },
            {
                $addFields: {
                    name: { $toLower: { $concat: ["$last_name", " ", "$first_name"] } },
                    name_en: { $toLower: { $concat: ["$last_name_en", " ", "$first_name_en"] } },
                }
            },
            { $match: matchSearch },
            {
                $project: {
                    __v: 0, users: 0, place_of_birth: 0, ethnicity: 0, nationality: 0,
                }
            },
            {
                $facet: {
                    result: [
                        { $skip: skip },
                        ...(limit > 0 ? [{ $limit: limit }] : []),
                        {
                            $lookup: {
                                from: 'courses',
                                let: { ids: "$courses" },
                                pipeline: [
                                    {
                                        $match: {
                                            $expr: { $eq: ["$_id", "$$ids"] },
                                            // ...matchMajor
                                        }
                                    },
                                    {
                                        $project: {
                                            __v: 0,  updatedAt: 0, createdAt: 0, staffs: 0, requirement: 0, schools: 0,
                                        }
                                    }
                                ],
                                as: 'courses'
                            }
                        },
                        {$unwind: {path: "$courses"}},
                        {
                            $addFields: {
                                status: {
                                    $cond: [{ $ifNull: ["$approval_info_status", false] }, "$approval_info_status", EnumConstant.REQUESTING]
                                },     
                                apply_majors: "$courses.apply_majors"
                            }
                        }, 
                        {$match: matchStatus},
                        {
                            $sort: { status : -1, _id: -1}
                        },
                    ],
                    totalCount: [
                        {
                            $count: 'count'
                        }
                    ]
                }
            }
            
            // this.facetAggregate({ skip, limit })
        ]);
        return await this.facetData(data, [
            { path: "schools", select: "name name_en profile_image", model: "schools" },
            { path: "apply_majors", select: "name name_en", model: "skills" },
        ]); 
    }

    async applyRequest(req: any) {
        let students = req.params._id;
        let getStudent = await this.getOne({
            query:{
                _id: students,
                status: EnumConstant.ACTIVE, 
                approval_info_status: EnumConstant.REJECTED,
            }
        }); 
        this.checkThrowNotFound(getStudent);
        let reqs = new this.models.requestTimeline({
            students: getStudent._id,
            status: EnumConstant.REQUESTING,
            timeline_type: EnumConstant.TimelineType.APPROVALINFO,
            staffs: req.body._user._id
        });
        return createSession(async (session) => {
            await this.models.requestTimeline.create([reqs], { session: session });
            return await this.model.findOneAndUpdate({_id: getStudent._id}, {$set: { approval_info_status: EnumConstant.REQUESTING}}, {session: session, new:true})
        });
    }
    async approval(req: any) {
        let students = req.params._id
        let { status, reason } = req.body;
        if (status == EnumConstant.REJECTED && !reason) {
            this.throwHttpError("reason is require")
        }
        let getStudent = await controllers.student.getOne({
            query: {
                _id: students,
                status: EnumConstant.ACTIVE,
                verify_status: EnumConstant.ACTIVE,
            }
        }); 
        this.checkThrowNotFound(getStudent);
        let request = new this.models.requestTimeline({
            students: getStudent._id,
            status: status,
            timeline_type: EnumConstant.TimelineType.APPROVALINFO,
            staffs: req.body._user._id,
            reason: reason
        });
        return createSession(async (session) => {
            await this.models.requestTimeline.create([request], { session: session });
            return await this.model.findOneAndUpdate({_id: getStudent._id}, {$set: {approval_info_status: status}}, {session: session, new:true})
        });
    }

    async filterData(req: any) {
        return {
            status: [EnumConstant.REQUESTING, EnumConstant.ACTIVE, EnumConstant.REJECTED],
            schools: await controllers.school.getSchoolForFilter(req),
            // apply_majors: await controllers.applyMajor.getApplyMajorForFilter(req)
        } 
    }

    async getDetail(req: any, queryPoor: boolean = true) {
        let getStudent = await this.getOne({
            query: { _id: req.params._id, status: { $ne: EnumConstant.DELETE } },
            select: "-__v -updatedAt",
            populates: [
                { path: "type_leavel_scholarships", select: "name name_en" },
                { path: "users", select: "username" },
                { path: "nationality", select: "name name_en nationality nationality_en" },
                { path: "ethnicity", select: "name name_en nationality nationality_en" },
                { path: "address.villages", select: "name name_en" },
                { path: "address.communes", select: "name name_en" },
                { path: "address.districts", select: "name name_en" },
                { path: "address.city_provinces", select: "name name_en" },
                { path: "place_of_birth.villages", select: "name name_en" },
                { path: "place_of_birth.communes", select: "name name_en" },
                { path: "place_of_birth.districts", select: "name name_en" },
                { path: "place_of_birth.city_provinces", select: "name name_en" },
                {
                    path: "schools", select: "name name_en profile_image address", populate: [
                        { path: "address.villages", select: "name name_en" },
                        { path: "address.communes", select: "name name_en" },
                        { path: "address.districts", select: "name name_en" },
                        { path: "address.city_provinces", select: "name name_en" },
                    ]
                },
                { path: "poor_file_datas", select: "file_name file_size file_type" },
                {
                    path: "courses", select: "-__v -updatedAt -createdAt", populate: [
                        {
                            path: "apply_majors", select: "name name_en code sectors", populate: [
                                {
                                    path: "sectors", select: "name name_en code"
                                },
                            ]
                        },
                        { path: "shifts", select: "name name_en code",}
                    ]
                },
            ]
        })
        controllers.student.checkThrowNotFound(getStudent);
        let response = CommonUtil.JSONParse(getStudent);
        if (response.ethnicity) {
            response.ethnicity.name_en = response.ethnicity.nationality_en;
            response.ethnicity.name = response.ethnicity.nationality;
        }
        if (response.nationality) {
            response.nationality.name_en = response.ethnicity.nationality_en;
            response.nationality.name = response.ethnicity.nationality;
        }
        if (getStudent.courses) {
            if (getStudent.courses.shifts) {
                response.shifts = getStudent.courses.shifts
                delete response.courses.shifts;
            }
            if (getStudent.courses.apply_majors) {
                response.apply_majors = getStudent.courses.apply_majors;
                if (getStudent.courses.apply_majors.sectors) {
                    response.sectors = getStudent.courses.apply_majors.sectors
                }
                delete response.courses.apply_majors;
                delete response.apply_majors.sectors;
            }
        }
        response.poor_card_data = null;
        if (getStudent.poor_id && queryPoor) {
            let getPoorData = await CommonUtil.idPoorAPI(getStudent.poor_id);
            if (getPoorData) {
                response.poor_card_data = controllers.student.mapPoorData({ data: getPoorData, poorId: getStudent.poor_id })
            }
        }
        if (getStudent.approval_info_status == EnumConstant.REJECTED) {
            let getTimeline = await controllers.requestTimeline.getManyNoCount({
                query: {
                    students: getStudent._id,
                    status: EnumConstant.REJECTED,
                    timeline_type: EnumConstant.TimelineType.APPROVALINFO
                },
                sort: {
                    _id: -1
                },
                limit: 1,
                page: 1,
                select: "status reason"
            })
            response.request_timelines = getTimeline.length > 0 ? getTimeline[0]: null;
        }
        response.status = response.approval_info_status == null ? EnumConstant.REQUESTING: response.approval_info_status;
        return response;
    }
}