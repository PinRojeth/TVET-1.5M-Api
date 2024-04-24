import { Model } from 'mongoose';
import { IAttendance_submits, ObjectId } from '../models';
import AbstractController from './abstract_controller';
import EnumConstant from '../utils/enumConstant';
import controllers from '.';
import CommonUtil from '../utils/common';

export default class Controller extends AbstractController<IAttendance_submits> {
    model: Model<IAttendance_submits>;
    constructor(model: Model<IAttendance_submits>) {
        super(model);
        this.model = model;
    }

    async availableStudent(req: any) {
        let [skip, limit] = this.skipLimit(req);
        let schools = req.body._user.schools
        if (!schools) {
            this.throwHttpError("schools role is required");
        }
        let { exclude_students, start_date, end_date, courses, search } = req.query;
        let [startDate, endDate] = CommonUtil.parseStartDateEndDate(start_date, end_date); 
        let queryAttList: any = {
            schools: new ObjectId(schools),
            status: EnumConstant.ACTIVE,
            date:{$gte: startDate, $lte: endDate}
        }
        if (courses) {
            queryAttList.courses = new ObjectId(courses);
        }
        let getAttLists = await this.models.attendanceList.aggregate([
            {
                $match: queryAttList
            },
            {
                $group: {
                    _id: "$courses", 
                    divide: { $sum: 1 },
                    attendance_lists: {$push : "$_id"}
                }
            }
        ])
        if (getAttLists.length < 1) {
            return [];
        }
        let attList = getAttLists.map(item => item.attendance_lists);
        let query: any = {
            attendance_lists: {
                $in: [].concat(...attList)
            },
            status: EnumConstant.ACTIVE
        }
        if (exclude_students) {
            query.students = { $nin: CommonUtil.requestObjectToArray(exclude_students, { isMongoId: true, field: "exclude_students" }) }
        }
        let secondQuery: any = {};
        if (search) {
            let s = search.replace(/[&\/\\?+()${}]/g, "");
            secondQuery.$or = [
                ...CommonUtil.searchNameCode(search),
                { poor_id: { $regex: s, $options: "i" } }
            ]
        }
        let data = await this.models.attendanceStudent.aggregate([
            {
                $match: query
            },
            {
                $group: {
                    _id: "$students",
                    total_score: { $sum: "$attendance_score" }
                }
            },
            {
                $lookup: {
                    from: 'students',
                    let: { id: "$_id" },
                    pipeline: [
                        {
                            $match: {
                                $expr: { $eq: ["$_id", "$$id"] },
                                status: EnumConstant.ACTIVE,
                                poor_status: EnumConstant.ACTIVE,
                                scholarship_status: EnumConstant.ACTIVE,
                            }
                        },
                        {
                            $addFields: {
                                name: { $toLower: { $concat: ["$last_name", " ", "$first_name"] } },
                                name_en: { $toLower: { $concat: ["$last_name_en", " ", "$first_name_en"] } },
                            }
                        },
                        { $match: secondQuery },
                        {
                            $project: controllers.student.projectData
                        },
                        
                    ],
                    as: 'students'
                }
            },
            {
                $unwind: { path: "$students" }
            },
            {
                $addFields: {
                    "students.total_score": "$total_score"
                }
            },
            {
                $replaceRoot: {
                    newRoot: "$students"
                }
            },
            {$sort: {last_name: 1, first_name: 1}},
            this.facetAggregate({ skip, limit })
        ])
        let [getData, count] = await this.facetData(data, [
            {
                path: "courses", select: "-requirement -createdAt -updatedAt -__v -staffs", model: "courses",
                populate: [
                    {path: "apply_majors",model: "skills", select: "name name_en"},
                    {path: "shifts",model: "shifts", select: "name name_en"},
                ]
           },
            { path: "schools", model: "schools", select: "name name_en profile_image" },
        ])
        let jsonData = CommonUtil.JSONParse(getData);
        for (var i = 0; i < jsonData.length; i++){
            let course = jsonData[i].courses;
            jsonData[i].courses.name = course.code + " | " + course.apply_majors.name + " | " + course.shifts.name
            for (var j = 0; j < getAttLists.length; j++){
                if (String(jsonData[i].courses._id) == String(getAttLists[j]._id)) {
                    jsonData[i].average_attendance = Math.round(jsonData[i].total_score / getAttLists[j].divide)
                    delete jsonData[i].total_score
                }
            }
        }
        return [jsonData, count]
    }

    async create(req: any) {
        await this.validate(req);
        let data = new this.model(req.body); 
        data.staffs = req.body._user._id;
        data.schools = req.body._user.schools;
        let getData = await this.studentAttendanceScore(req);
        data.month = data.start_date.getMonth() + 1;
        data.year = data.start_date.getFullYear();
        getData.forEach(item => {
            data.attendance_data.push({average_attendance: item.average_attendance, students: item._id})
        });
        return await this.model.create(data);
    }

    private async studentAttendanceScore(req: any): Promise<any[]> {
        let students = CommonUtil.requestObjectToArray(req.body.students, { field: "students", isMongoId: true });
        let [startDate, endDate] = CommonUtil.parseStartDateEndDate(req.body.start_date, req.body.end_date);
        let getAttLists = await this.models.attendanceList.aggregate([
            {
                $match: {
                    schools: new ObjectId(req.body._user.schools),
                    date: {$gte: startDate, $lte: endDate},
                    // month: Number(req.body.month),
                    // year: Number(req.body.year),
                    status: EnumConstant.ACTIVE
                },
            },
            {
                $group: {
                    _id: "$courses", 
                    divide: { $sum: 1 },
                    attendance_lists: {$push: "$_id"}
                }
            },
        ])

        let attList = getAttLists.map(item => item.attendance_lists);
        let query: any = {
            attendance_lists: {
                $in: [].concat(...attList)
            },
            status: EnumConstant.ACTIVE,
            students: {$in : students}
        }
        let getAttStudents = await this.models.attendanceStudent.aggregate([
            {
                $match: query
            },
            {
                $group: {
                    _id: "$students",
                    total_score: { $sum: "$attendance_score" }
                }
            },
            {
                $lookup: {
                    from: 'students',
                    let: { id: "$_id" },
                    pipeline: [
                        {
                            $match: {
                                $expr: { $eq: ["$_id", "$$id"] },
                            }
                        },
                        {
                            $project: controllers.student.projectData
                        },
                    ],
                    as: 'students'
                }
            },
            {
                $unwind: {path: "$students"}
            },
            {
                $addFields: {
                    "students.total_score": "$total_score"
                }
            },
            {
                $replaceRoot: {
                    newRoot: "$students"
                }
            },
        ])
    
        let mergeStudentData = CommonUtil.JSONParse(getAttStudents);
        for (var i = 0; i < mergeStudentData.length; i++){
            for (var j = 0; j < getAttLists.length; j++){
                if (String(mergeStudentData[i].courses) == String(getAttLists[j]._id)) {
                    mergeStudentData[i].average_attendance = Math.round(mergeStudentData[i].total_score / getAttLists[j].divide)
                    delete mergeStudentData[i].total_score
                }
            }
        }
        return mergeStudentData;
    }

    async update(req: any) {
        let getData = await this.getOne({
            query: {
                _id: req.params._id,
                status: { $ne: EnumConstant.DELETE },
            }
        });
        this.checkThrowNotFound(getData);
        await this.validate(req, getData._id);
        let data = new this.model(req.body); 
        let existingStudents = getData.attendance_data.map(item => String(item.students));
        let getStudents = CommonUtil.requestObjectToArray(req.body.students, { field: "students" });
        getStudents = req.body.students.map((item: any) => String(item));
        
        var newStudents = getStudents.filter(function(obj) {
            return !existingStudents.some(function(obj2) {
                return obj == obj2;
            });
        });
        var deleteStudents = existingStudents.filter(function(obj) {
            return !getStudents.some(function(obj2) {
                return obj == obj2;
            });
        });
        req.body.students = newStudents
        let attScore = await this.studentAttendanceScore(req);
        getData.attendance_data.forEach(item => {
            if (deleteStudents.length > 0) {
                if (!deleteStudents.includes(String(item.students))){
                    data.attendance_data.push({average_attendance: item.average_attendance, students: item.students}) 
                } 
            } else {
                data.attendance_data.push({average_attendance: item.average_attendance, students: item.students}) 
            }
        })
        
        attScore.forEach(item => {
            data.attendance_data.push({average_attendance: item.average_attendance, students: item._id})
        });
        return await this.model.findOneAndUpdate(
            { _id: getData._id },
            {
                $set: { students: data.students, attendance_data: data.attendance_data },
            },
            { new: true }
        );
    }

    private async validate(req: any, _id: any = null) {
        let { start_date, end_date } = req.body;
        let [startDate, endDate] = CommonUtil.parseStartDateEndDate(start_date, end_date);
        let schools = req.body._user.schools;
        if (!schools) {
            this.throwHttpError("schools is required");
        }
        let students = CommonUtil.requestObjectToArray(req.body.students, { field: "students", isMongoId: true });
        if (students.length != new Set(students).size) {
            this.throwHttpError("invalid students data");
        }
        // let query: any = {
        //     schools: schools,
        //     status: { $ne: EnumConstant.DELETE },
        //     $or: [
        //         { 'start_date': { $gt: startDate, $lt: endDate } },
        //         { 'end_date': { $gt: startDate, $lt: endDate } },
        //         { 'start_date': { $lt: startDate }, "end_date": { $gt: endDate } },
        //         { 'start_date': startDate, "end_time": endDate } 
        //     ]   
        // }
        // if (_id) {
        //     query._id = {$ne :_id}
        // }
        // getExistingSubmit
        let [getStudents] = await Promise.all([
            controllers.student.getManyNoCount({
                query: {
                    _id: { $in: students },
                    schools: req.body._user.schools,
                    poor_status: EnumConstant.ACTIVE
                },
                populates: [
                    {
                        path: "courses", select: "shifts",
                    }
                ]
            }),
            // this.getOne({
            //     query: query
            // }),
        ])
        // if (getExistingSubmit) {   
        //     this.throwHttpError(`ថ្ងៃស្នើសុំស្ទួននឹង ${getExistingSubmit.start_date.toLocaleDateString()} - ${getExistingSubmit.end_date.toLocaleDateString()}`)
        // }
        if (getStudents.length != students.length) {
            this.throwHttpError("invalid students data");
        }
    }

    async filterData(req: any) {
        return {
            schools: await controllers.school.getSchoolForFilter(req),
        }
    }

    async availableStudentFilterData(req: any) {
        let { start_date, end_date } = req.query;
        let [startDate, endDate] = CommonUtil.parseStartDateEndDate(start_date, end_date); 
        let schools = req.body._user.schools;
        if (!schools) {
            this.throwHttpError("schools is required");
        }
        let data = await this.models.attendanceList.aggregate([
            {
                $match: {
                    schools: new ObjectId(schools),
                    status: EnumConstant.ACTIVE,
                    date:{$gte: startDate, $lte: endDate}
                },
            },
            {
                $group: {
                    _id: "null",
                    courses: { $addToSet: "$courses" },
                }
            },
            {
                $lookup: {
                    from: 'courses',
                    let: { ids: "$courses" },
                    pipeline: [
                        {
                            $match: {
                                $expr: { $in: ["$_id", "$$ids"] },
                            }
                        },
                        {
                            $lookup: {
                                from: 'skills',
                                let: { ids: "$apply_majors" },
                                pipeline: [
                                    {
                                        $match: {
                                            $expr: { $eq: ["$_id", "$$ids"] },
                                        }
                                    },
                                    {
                                        $project: {
                                            name: 1, name_en: 1, code: 1,
                                        }
                                    }
                                ],
                                as: 'apply_majors'
                            }
                        },
                        { $unwind: { path: "$apply_majors", preserveNullAndEmptyArrays: true } },
                        {
                            $lookup: {
                                from: 'shifts',
                                let: { ids: "$shifts" },
                                pipeline: [
                                    {
                                        $match: {
                                            $expr: { $eq: ["$_id", "$$ids"] },
                                        }
                                    },
                                    {
                                        $project: {
                                            name: 1, name_en: 1, code: 1,
                                        }
                                    }
                                ],
                                as: 'shifts'
                            }
                        },
                        {$unwind: {path: "$shifts", preserveNullAndEmptyArrays: true}},
                        {
                            $project: {
                                name: {  $concat: ["$code", " | ", "$apply_majors.name", " | " , "$shifts.name"] },
                                name_en: { $concat: ["$code", " | ", "$apply_majors.name_en", " | ", "$shifts.name_en"] },
                            }
                        }
                    ],
                    as: 'courses'
                }
            },
            {
                $project: {
                    _id: 0
                }
            }
        ])
        if (data.length < 1)
            return []
        return data[0];
    }

    async getList(req: any) {
        let { schools, last_query_datetime } = req.query;
        let [skip, limit] = this.skipLimit(req);
        let query: any = {
            status: EnumConstant.ACTIVE
        }
        if (schools) {
            query.schools = new ObjectId(schools);
        }
        if (req.body._user.schools) {
            query.schools = new ObjectId(req.body._user.schools);
        }
        if (last_query_datetime) {
            query.updatedAt = {$gt: new Date(last_query_datetime)}
        }
        let data = await this.model.aggregate([
            { $match: query },
            {
                $lookup: {
                    from: 'scholarship_payments',
                    let: { id: "$_id"} ,
                    pipeline: [
                        {
                            $match: {
                                $expr: {
                                    $eq: ["$attendance_submits", "$$id"],              
                                },
                                status: { $ne: EnumConstant.DELETE },
                            }
                        },
                        {
                            $count: "count",
                        }
                    ],
                    as: "scholarship_payments"
                }
            },
            {
                $sort: {
                    _id: -1,
                }
            },
            {
                $facet: {
                    result: [
                        { $skip: skip },
                        ...(limit > 0 ? [{ $limit: limit }] : []),
                        {
                            $addFields: {
                                student_count: { 
                                   $size: "$students"
                                },
                                payment_count: { 
                                    "$ifNull": [{ "$arrayElemAt": ["$scholarship_payments.count", 0] }, 0]
                                },
                            }
                        },
                        { $unwind: { path: "$students", preserveNullAndEmptyArrays: true } },
                        {
                            $lookup: {
                                from: 'students',
                                let: { id: "$students" },
                                pipeline: [
                                    {
                                        $match: {
                                            $expr: { $eq: ["$_id", "$$id"]} ,                                        
                                        }
                                    },
                                    {
                                        $lookup: {
                                            from: 'courses',
                                            let: { ids: "$courses" },
                                            pipeline: [
                                                {
                                                    $match: {
                                                        $expr: { $eq: ["$_id", "$$ids"] },
                                                    }
                                                },
                                                {
                                                    $lookup: {
                                                        from: 'shifts',
                                                        let: { ids: "$shifts" },
                                                        pipeline: [
                                                            {
                                                                $match: {
                                                                    $expr: { $eq: ["$_id", "$$ids"] },
                                                                }
                                                            },
                                                            {
                                                                $project: {
                                                                    total_mon_fri_full: {
                                                                        $cond: [
                                                                            { $eq: ["$code", "MFME"] }, 1, 0
                                                                        ]
                                                                    },
                                                                    total_mon_fri_night: {
                                                                        $cond: [
                                                                            { $eq: ["$code", "MFN"] }, 1, 0
                                                                        ]
                                                                    },
                                                                    total_sat_sun: {
                                                                        $cond: [
                                                                            { $eq: ["$code", "WME"] }, 1, 0
                                                                        ]
                                                                    },
                                                                }
                                                            }
                                                        ],
                                                        as: 'shifts'
                                                    }
                                                },
                                                { $unwind: {path: "$shifts"}}
                                            ],
                                            as: 'courses'
                                        }
                                    },
                                    { $unwind: {path: "$courses"}}
                                ],
                                as: "students"
                            }
                        },
                        { $unwind: { path: "$students"} },
                        {
                            $group: {
                                _id: "$_id",
                                createdAt: {$first: "$createdAt"},
                                start_date: {$first: "$start_date"},
                                end_date: {$first: "$end_date"},
                                year: {$first: "$year"},
                                month: {$first: "$month"},
                                payment_count: {$first: "$payment_count"},
                                schools: {$first: "$schools"},
                                staffs: {$first: "$staffs"},
                                status: {$first: "$status"},
                                student_count: {$first: "$student_count"},
                                updatedAt: { $first: "$updatedAt" },
                                total_mon_fri_full: {$sum: "$students.courses.shifts.total_mon_fri_full"},
                                total_mon_fri_night: {$sum: "$students.courses.shifts.total_mon_fri_night"},
                                total_sat_sun: {$sum: "$students.courses.shifts.total_sat_sun"},
                            }
                        } ,
                        {
                            $sort: {
                                _id: -1,
                            }
                        },
                    ],
                    totalCount: [
                        {
                            $count: 'count'
                        }
                    ]
                }
            }
        ])
        return await this.facetData(data, [
            { path: "schools", select: "name name_en profile_image", model: "schools" },
        ]); 
    }

    async getDetail(req: any) {     
        let { empty_payment } = req.query; 
        let matchEmptyPayment: any = {}
        if (empty_payment == "true") {
            matchEmptyPayment["students.scholarship_payments"] = null;
        }
        let getData = await this.model.aggregate([
            {
                $match: {
                    _id: new ObjectId(req.params._id),
                    status:{$ne: EnumConstant.DELETE}
                }
            },
            {$unwind: {path : "$attendance_data", preserveNullAndEmptyArrays: true}},
            {
                $lookup: {
                    from: 'students',
                    let: { id: "$attendance_data.students", averageScore:"$attendance_data.average_attendance", attendanceSubmitId:"$_id" },
                    pipeline: [
                        {
                            $match: {
                                $expr: { $eq: ["$_id", "$$id"] },
                            }
                        },
                        {
                            $lookup: {
                                from: 'courses',
                                let: { id: "$courses" },
                                pipeline: [
                                    {
                                        $match: {
                                            $expr: { $eq: ["$_id", "$$id"] },
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
                                ],
                                as: 'courses'
                            }
                        },
                        { $unwind: { path: "$courses" } },
                        {
                            $project: controllers.student.projectData
                        },
                        {
                            $addFields: {
                                average_attendance: "$$averageScore"
                            }
                        },
                        {
                            $lookup: {
                                from: 'scholarship_payments',
                                let: { id: "$_id" },
                                pipeline: [
                                    {
                                        $match: {
                                            $expr: {
                                                $and: [
                                                    { $eq: ["$students", "$$id"]},
                                                    { $eq: ["$attendance_submits", "$$attendanceSubmitId"]},
                                                ]                                                
                                            },
                                            status: { $ne: EnumConstant.DELETE },
                                        }
                                    },
                                    {
                                        $project: {
                                            __v:0, createdAt: 0, updatedAt: 0, staffs:0, schools: 0  
                                        }
                                    }
                                ],
                                as: 'scholarship_payments'
                            }
                        },
                        { $unwind: { path: "$scholarship_payments", preserveNullAndEmptyArrays: true } },
                    ],
                    as: 'students'
                }
            },
            { $unwind: { path: "$students", preserveNullAndEmptyArrays: true } },
            {
                $sort: {
                    "students.last_name": 1, "students.first_name": 1, 
                }
            },
            {$match: matchEmptyPayment},
            {
                $group: {
                    _id: "$_id",
                    createdAt: {$first: "$createdAt"},
                    start_date: {$first: "$start_date"},
                    end_date: {$first: "$end_date"},
                    schools: {$first: "$schools"},
                    staffs: {$first: "$staffs"},
                    status: {$first: "$status"},
                    updatedAt: {$first: "$updatedAt"},
                    student_count: {$sum: 1},
                    students: { $push: "$students" },
                    payment_count: {
                        $sum: {
                            $cond: [{ $ifNull: ["$students.scholarship_payments", false] }, 1, 0]
                        }
                    },
                }
            }
        ]);
        if (getData.length < 1) {
            this.checkThrowNotFound(null);
        }
        await this.model.populate(getData, [
            {path: "schools", select: "name name_en code profile_image", model: "schools"},
            {path: "staffs", select: controllers.staff.selectData, model: "staffs"},
        ])
        return getData[0]
    }

    async delete(req: any) {
        let query: any = {
            _id: new ObjectId(req.params._id),
            status: EnumConstant.ACTIVE
        }
        if (req.body._user.schools) {
            query.schools = new ObjectId(req.body._user.schools);
        }
        let getData = await this.getOne({
            query: query
        })
        this.checkThrowNotFound(getData)
        let getPayment = await controllers.scholarshipPayment.getOne({
            query: {
                schools: getData.schools,
                attendance_submits: getData._id,
                students: { $in: getData.students },
                status: { $ne: EnumConstant.DELETE },
            }
        })
        if (getPayment) {
            this.throwHttpError("វត្តមានបានពិនិត្យ មិនអាចលប់បានទេ!")
        }
        return await this.model.findOneAndUpdate({_id: getData._id}, {$set: {status: EnumConstant.DELETE}}, {new :true});
    }
}