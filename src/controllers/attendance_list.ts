import { Model } from 'mongoose';
import { IAttendance_lists, ObjectId, createSession } from '../models';
import AbstractController from './abstract_controller';
import EnumConstant from '../utils/enumConstant';
import controllers from '.';
import CommonUtil from '../utils/common';

export default class Controller extends AbstractController<IAttendance_lists> {
    model: Model<IAttendance_lists>;
    constructor(model: Model<IAttendance_lists>) {
        super(model);
        this.model = model;
    }

    
    async availableCourse(req: any) {
        let query: any = {
            status: { $ne: EnumConstant.DELETE }, 
            course_start: {$lte : new Date()}
        }
        if (req.body._user.schools) {
            query.schools = new ObjectId(req.body._user.schools)
        }
        let data = await this.models.course.aggregate([
            {
                $match: query
            },
            {
                $lookup: {
                    from: 'students',
                    let: { ids: "$_id" },
                    pipeline: [
                        {
                            $match: {
                                $expr: { $eq: ["$courses", "$$ids"] },
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
                    student_count: { 
                        "$ifNull": [{ "$arrayElemAt": ["$students.count", 0] }, 0]
                    },
                }
            },
            {
                $match: {
                    $expr: {$gt: ["$student_count", 0]}
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
                                name: 1, code: 1, name_en : 1,
                            }
                        },
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
                                name: 1, code: 1, name_en : 1,
                            }
                        },
                    ],
                    as: 'shifts'
                }
            },
            { $unwind: { path: "$shifts", preserveNullAndEmptyArrays: true } },
            {
                $project: {
                    name: {  $concat: ["$code", " | ", "$apply_majors.name", " | " , "$shifts.name"] },
                    name_en: {  $concat: ["$code", " | ", "$apply_majors.name_en", " | " , "$shifts.name_en"] },
                }
            }
        ])
        return data;
    }

    async AvalidateStudent(req: any) {
        let { courses, date }: any = req.query;
        let d = new Date(date);
        let query: any = {
            scholarship_status:EnumConstant.ACTIVE,
            status: EnumConstant.ACTIVE,
            courses: new ObjectId(courses)
        };
        let queryAtt: any = {
            day: d.getDate(),
            month: d.getMonth() + 1, 
            year: d.getFullYear(),
            courses: new ObjectId(courses),
        }
        if (req.body._user.schools) {
            query.schools = new ObjectId(req.body._user.schools);
            queryAtt.schools = new ObjectId(req.body._user.schools);
        }
        let [getStudents, getAttendance] = await Promise.all([
            controllers.student.getManyNoCount({
                query: query,
                select: controllers.student.selectData
            }),
            controllers.attendanceList.getOne({
                query: queryAtt
            })
        ]);
        let mergeData = CommonUtil.JSONParse(getStudents);
        if (getAttendance) {
            let getAttStudents = await controllers.attendanceStudent.getManyNoCount({
                query: {
                    attendance_lists: getAttendance._id, 
                }
            })
            for (var i = 0; i < mergeData.length; i++){
                for (var j = 0; j < getAttStudents.length; j++){
                    if (String(mergeData[i]._id) == String(getAttStudents[j].students)) {
                        mergeData[i].attendance_score = getAttStudents[j].attendance_score
                        break;
                    }
                }
            }
        }
        mergeData = CommonUtil.sortStudentName(mergeData);
        return mergeData;
    }

    async save(req: any) {
        let { date, courses } = req.body;
        let schools = req.body._user.schools
        if (!schools) {
            this.throwHttpError("schools roles is required")
        }
        let d = new Date(date);
        let data = CommonUtil.requestObjectToArray(req.body.data, { field: "data" });
        let students = data.map(item => item.students); 
        if (students.length != new Set(students).size) {
            this.throwHttpError("invalid students data");
        }
        let [studentCount, getCourse, getAttList] = await Promise.all([
            controllers.student.countDocument({
                _id: { $in: students }, schools: schools, courses: courses, status: {$ne: EnumConstant.DELETE}
            }),
            controllers.course.getOne({
                query: { _id: courses, schools: schools, status :{$ne: EnumConstant.DELETE}}
            }),
            this.model.findOne({ courses: courses, year: d.getFullYear(), month: d.getMonth() + 1, day: d.getDate() })
        ]);
        controllers.course.checkThrowNotFound(getCourse);
        if (studentCount != students.length) {
            this.throwHttpError("invalid students data");
        }
        return await createSession(async (session) => {
            if (getAttList) {
                await this.model.findOneAndUpdate({ _id: getAttList._id }, { $set: { status: EnumConstant.ACTIVE } }, { session: session }); 
            } else {
                let data = new this.model({
                    courses: courses,
                    year: d.getFullYear(),
                    month: d.getMonth() + 1,
                    day: d.getDate(),
                    date: CommonUtil.parseDefaultDate(date),
                    schools: schools,
                    staffs: req.body._user._id,
                    status: EnumConstant.ACTIVE
                })
                await this.model.create([data], { session: session });
                getAttList = data;
            }
            // let getAtt = await this.model.findOneAndUpdate({ courses: courses, year: d.getFullYear(), month: d.getMonth() + 1, day: d.getDate() },
            //     {$set: {schools: schools, staffs: req.body._user._id, status :EnumConstant.ACTIVE}}, { upsert : true, new: true, session: session }
            // );
            let bulkData: any[] = [];
            data.forEach(item => {
                let updateMsg = {
                    'updateOne': {
                        'filter': {
                            students: item.students,
                            attendance_lists: getAttList!._id
                        },
                        'update': {
                            $set: {
                                attendance_score: item.attendance_score,
                                schools: schools,
                                year: d.getFullYear(),
                                month: d.getMonth() + 1,
                                day: d.getDate(),
                                status: EnumConstant.ACTIVE,
                                date: CommonUtil.parseDefaultDate(date),
                            }
                        },
                        'upsert': true,
                        'setDefaultsOnInsert': true,
                    }
                };
                bulkData.push(updateMsg);
            });
            await this.models.attendanceStudent.bulkWrite(bulkData, { session: session })
            return getAttList
        });
    }

    async filterData(req: any) {
        let query: any = {
            status: EnumConstant.ACTIVE
        }
        if (req.body._user.schools) {
            query.schools = new ObjectId(req.body._user.schools);
        }
        let data = await this.model.aggregate([
            { $match: query },
            {
                $group: {
                    _id: "null",
                    schools: { $addToSet: "$schools" },
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
                $lookup: {
                    from: 'schools',
                    let: { ids: "$schools" },
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
                    as: 'schools'
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
                schools: [],
                courses: []
            }
        }
        return {
            schools: data[0].schools,
            courses: data[0].courses
        } 
    }
    

    async getList(req: any) {
        let { schools, search, courses } = req.query;
        let [skip, limit] = this.skipLimit(req);
        let query: any = {
            status: EnumConstant.ACTIVE
        }
        if (schools) {
            query.schools = new ObjectId(schools);
        } 
        if (courses) {
            query.courses = new ObjectId(courses);
        } 
        if (req.body._user.schools) {
            query.schools = new ObjectId(req.body._user.schools);
        }
        let matchSearch: any = {}
        if (search) {
            matchSearch.$or = CommonUtil.searchNameCode(search);
        }
        let data = await this.model.aggregate([
            { $match: query },
            { $sort:  {date: -1}}, 
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
                                                        name: 1, code: 1, name_en : 1,
                                                    }
                                                },
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
                                                        name: 1, code: 1, name_en : 1,
                                                    }
                                                },
                                            ],
                                            as: 'shifts'
                                        }
                                    },
                                    { $unwind: { path: "$shifts", preserveNullAndEmptyArrays: true } },
                                ],
                                as: 'courses'
                            }
                        },
                        { $unwind: { path: "$courses" } },
                        {
                            $lookup: {
                                from: 'attendance_students',
                                let: { dataId: "$_id" },
                                pipeline: [
                                    {
                                        $match: {
                                            $expr: { $eq: ["$attendance_lists", "$$dataId"] },
                                            status: EnumConstant.ACTIVE,
                                        }
                                    },
                                    {
                                        $count: "count",
                                    }
                                ],
                                as: "attendance_students"
                            }
                        },
                        {
                            $project: {
                                schools: 1, year: 1, month: 1, day: 1,
                                student_count: { 
                                    "$ifNull": [{ "$arrayElemAt": ["$attendance_students.count", 0] }, 0]
                                },
                                name: {  $concat: ["$courses.code", " | ", "$courses.apply_majors.name", " | " , "$courses.shifts.name"] },
                                name_en: { $concat: ["$courses.code", " | ", "$courses.apply_majors.name_en", " | ", "$courses.shifts.name_en"] },
                                date: {
                                    $dateFromParts: {
                                        'year': "$year", 'month': "$month", 'day': "$day",
                                    }
                                }
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
        ]);
        return await this.facetData(data, [
            {path: "schools", model: "schools", select: "name name_en profile_image"}
        ])
    }

    async getDetail(req: any) {
        let _id = req.params._id;
        let [getAtt, getStudentAtt] = await Promise.all([
            this.getOne({
                query: { _id: _id },
                populates: [
                    { path: "schools", select: "name name_en profile_image" },
                    {
                        path: "courses", select: "code apply_majors shifts", populate: [
                            {path: "shifts", select: "name name_en"},
                            {path: "apply_majors", select: "name name_en"},
                        ]
                    }
                ]
            }),
            controllers.attendanceStudent.getManyNoCount({
                query: {
                    attendance_lists: _id,
                }, 
                populates: [
                    {path: "students", select: controllers.student.selectData}
                ],
                
            })
        ])
        this.checkThrowNotFound(getAtt);
        let json = CommonUtil.JSONParse(getStudentAtt);
        for (var i = 0; i < json.length; i++) [
            json[i] = {
                attendance_score: json[i].attendance_score,
                ...json[i].students,
            }
        ]
        let att = CommonUtil.JSONParse(getAtt); 
        att.courses.name = controllers.course.courseName(att.courses.code, att.courses.apply_majors.name, att.courses.shifts.name);
        att.courses.name_en = controllers.course.courseName(att.courses.code, att.courses.apply_majors.name_en, att.courses.shifts.name_en);
        json = CommonUtil.sortStudentName(json)
        att.data = json;
        // let d = new Date();
        // d.setFullYear(getAtt.year, getAtt.month - 1, getAtt.day)
        // att.date = d;
        return att;
    }

    async delete(req: any) {
        let query: any = {
            _id: req.params._id,
        }
        if (req.body._user.schools) {
            query.schools = req.body._user.schools
        }
        let getData = await this.getOne({
            query: query
        })
        this.checkThrowNotFound(getData)
        return await createSession(async (session) => {
            await this.models.attendanceStudent.updateMany({ attendance_lists: getData._id }, { $set: { status: EnumConstant.DELETE } }, { session: session });
            return await this.model.findOneAndUpdate({ _id: req.params._id }, { $set: { status: EnumConstant.DELETE } }, { new: true });
        });
    }
}