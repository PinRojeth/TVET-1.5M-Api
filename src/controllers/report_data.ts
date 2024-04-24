import EnumConstant from '../utils/enumConstant';
import models, { ObjectId } from '../models';
import controllers from '.';
import CommonUtil from '../utils/common';

export default class SubjectController {
    async filterDataApprovedList(req: any) {
        let query: any = {}
        if (req.body._user.schools) {
           query._id = req.body._user.schools
        }
        let [schools, shifts] = await Promise.all([
            controllers.school.getManyNoCount({
                query: query,
                select: "name name_en profile_image"
            }), 
            controllers.shift.getManyNoCount({
                query: {status :EnumConstant.ACTIVE},
                select: "name name_en"
            }), 
        ]);
        return {
            schools: schools,
            shifts, 
            scholarship_status: [EnumConstant.ACTIVE,EnumConstant.waiting,EnumConstant.FINISHED_STUDY, EnumConstant.QUIT_BFORE_COURSE, EnumConstant.QUIT_DURING_COURSE]
        }
    }
    async approvedList(req: any) {
        let { schools, shifts, scholarship_status } = req.query;
        let [skip, limit] = controllers.student.skipLimit(req);
        let [startDate, endDate] = CommonUtil.parseStartDateEndDate(req.query.start_date, req.query.end_date)
        let matchStudent: any = {
            status: EnumConstant.ACTIVE
        }
        if (req.body._user.schools) {
            schools = req.body._user.schools;
        }
        if (schools) {
            matchStudent.schools = new ObjectId(schools);
        }
        let matchCourse: any = {}
        if (shifts) {
            matchCourse.shifts = new ObjectId(shifts)
        }
        let matchScholarshipStatus: any = {}
        let query: any = {
            status: EnumConstant.ACTIVE,
            timeline_type: EnumConstant.TimelineType.SCHOLARSHIP,
            createdAt: { $gte: startDate, $lte: endDate },
        }
        if (scholarship_status) {
            matchScholarshipStatus.scholarship_status = Number(scholarship_status)
            if (scholarship_status == EnumConstant.QUIT || scholarship_status == EnumConstant.QUIT_DURING_COURSE || scholarship_status == EnumConstant.QUIT_BFORE_COURSE) {
                query.status = EnumConstant.QUIT
            }
        }
        let minToday = new Date(new Date(req.query.end_date).setHours(0, 0, 0));
        let maxToday = new Date(new Date(req.query.end_date).setHours(23, 59, 59));
        
        let data = await models.requestTimeline.aggregate([
            {
                $match: query
            },
            { $sort: { createdAt: -1 } },
            {
                $group: {
                    _id: "$students",
                    createdAt: { $first: "$createdAt" }
                }
            },
            {
                $lookup: {
                    from: 'students',
                    let: { id: "$_id", timelineCreatedAt: "$createdAt" },
                    pipeline: [
                        {
                            $match: {
                                $expr: { $eq: ["$_id", "$$id"] },
                                ...matchStudent
                            }
                        },
                        {
                            $limit: 1,
                        },
                        {
                            $lookup: {
                                from: 'courses',
                                let: { ids: "$courses" },
                                pipeline: [
                                    {
                                        $match: {
                                            $expr: { $eq: ["$_id", "$$ids"] },
                                            ...matchCourse
                                        }
                                    },
                                ],
                                as: 'courses'
                            }
                        },
                        { $unwind: { path: "$courses" } },
                        {
                            $addFields: {
                                shifts: "$courses.shifts",
                                apply_majors: "$courses.apply_majors",
                                scholarship_status: {
                                    $cond: {
                                        if: {
                                            $eq: ["$scholarship_status", EnumConstant.ACTIVE]
                                        },
                                        then: {
                                            "$cond": {
                                                "if": { $gt: ["$courses.course_start", maxToday], },
                                                "then": EnumConstant.waiting,
                                                "else": {
                                                    $cond: {
                                                        if: { $lt: ["$courses.course_end", minToday], },
                                                        then: EnumConstant.FINISHED_STUDY,
                                                        else: "$scholarship_status"
                                                    }
                                                }
                                            }
                                        },
                                        else: {
                                            $cond: {
                                                if: {
                                                    $eq: ["$scholarship_status", EnumConstant.QUIT]
                                                },
                                                then: {
                                                    "$cond": {
                                                        "if": { $gt: ["$courses.course_start", "$$timelineCreatedAt"], },
                                                        "then": EnumConstant.QUIT_BFORE_COURSE,
                                                        "else": {
                                                            $cond: {
                                                                if: {
                                                                    $and: [
                                                                        { $lt: ["$courses.course_start", "$$timelineCreatedAt"], },
                                                                        { $gt: ["$courses.course_end", "$$timelineCreatedAt"], },
                                                                    ]
                                                                },
                                                                then: EnumConstant.QUIT_DURING_COURSE,
                                                                else: "$scholarship_status"
                                                            }
                                                        }
                                                    }
                                                },
                                                else: "$scholarship_status"
                                            }
                                        }
                                    }
                                }
                            }
                        },
                    ],
                    as: "students"
                }
            },
            {
                $unwind: "$students"
            },
            {
                $replaceRoot: {
                    newRoot: "$students"
                }
            },
            {
                $project: {
                    first_name: 1,
                    last_name: 1,
                    first_name_en: 1,
                    last_name_en: 1,
                    profile_image: 1,
                    date_of_birth: 1,
                    address: 1,
                    place_of_birth: 1,
                    gender: 1,
                    poor_id: 1,
                    schools: 1,
                    phone_number: 1,
                    apply_majors: 1,
                    shifts: 1,
                    scholarship_status: 1,
                    type_poverty_status: 1,
                    id_card_number: 1,
                    createdAt: 1,
                    updatedAt: 1,
                }
            },
            { $match: matchScholarshipStatus },
            { $sort: { last_name: 1, first_name: 1 } },
            { $facet: {
                result: [
                    { $skip: skip },
                    ...(limit > 0 ? [{ $limit: limit }] : []),
                    {
                        $lookup: {
                            from: 'attendance_students',
                            let: { id: "$_id" },
                            pipeline: [
                                {
                                    $match: {
                                        $expr: { $eq: ["$students", "$$id"] },
                                        date: { $gte: startDate, $lte: endDate },
                                        status: EnumConstant.ACTIVE
                                    }
                                },
                                {
                                    $group: {
                                        _id: null,
                                        total_score: { $sum: "$attendance_score" }, 
                                        divide: {$sum : 1}
                                    }
                                },
                                {
                                    $addFields: {
                                        average_attendance: { $round: [{ $divide: ["$total_score", "$divide"] }, 0]}
                                    }
                                }
                            ],
                            as: 'attendance_students'
                        }
                    },
                    {
                        $addFields: {
                            average_attendance: {
                                $concat: [
                                    {
                                        $toString: {
                                            "$ifNull": [{ "$arrayElemAt": ["$attendance_students.average_attendance", 0] }, 0]
                                        }
                                    },
                                "%"]
                            }
                        }
                    },
                    {
                        $project: {
                            attendance_students: 0
                    }}
                ],
                totalCount: [
                    {
                        $count: 'count'
                    }
                ] }
            }
        ]).allowDiskUse(true);
        let [getData, count] = await controllers.student.facetData(data,[
            { path: "schools", select: "name name_en profile_image", model: "schools" },
            { path: "apply_majors", select: "name name_en", model: "skills" },
            { path: "shifts", select: "name name_en", model: "shifts" },
            { path: "address.villages", select: "name name_en" },
            { path: "address.communes", select: "name name_en" },
            { path: "address.districts", select: "name name_en" },
            { path: "address.city_provinces", select: "name name_en" },
            { path: "place_of_birth.villages", select: "name name_en" },
            { path: "place_of_birth.communes", select: "name name_en" },
            { path: "place_of_birth.districts", select: "name name_en" },
            { path: "place_of_birth.city_provinces", select: "name name_en" },
        ]);
        let json = CommonUtil.JSONParse(getData); 
        json = json.map((item: any) => {
            let data = item; 
            let placeBirth = ""; 
            if (item.place_of_birth) {
                if (item.place_of_birth.city_provinces) {
                    placeBirth = item.place_of_birth.city_provinces.name
                }
                if (item.place_of_birth.districts) {
                    placeBirth += ", " +item.place_of_birth.districts.name
                }
                if (item.place_of_birth.communes) {
                    placeBirth += ", " +item.place_of_birth.communes.name
                }
                if (item.place_of_birth.villages) {
                    placeBirth += ", " +item.place_of_birth.villages.name
                }
                if (item.place_of_birth.detail) {
                    placeBirth += ", " +item.place_of_birth.detail
                }
                data.place_of_birth.name = placeBirth
            }
            let address = ""; 
            if (item.address) {
                if (item.address.city_provinces) {
                    address = item.address.city_provinces.name
                }
                if (item.address.districts) {
                    address += ", " +item.address.districts.name
                }
                if (item.address.communes) {
                    address += ", " +item.address.communes.name
                }
                if (item.address.villages) {
                    address += ", " +item.address.villages.name
                }
                if (item.address.detail) {
                    address += ", " +item.address.detail
                }
                data.address.name = address
            }
            return data;
        })
        return [json, count];
    }

    async filterData(req: any) {
        let querySchool: any = {
            status: EnumConstant.ACTIVE
         }
        if (req.body._user.schools) {
            querySchool._id = req.body._user.schools
        }
        let [getShifts, getMajors, getSchools] = await Promise.all([
            controllers.shift.getManyNoCount({
                query: { status: { $ne: EnumConstant.DELETE } },
                select: "name name_en"
            }),
            controllers.applyMajor.getManyNoCount({
                query: { status: { $ne: EnumConstant.DELETE } },
                select: "name name_en"
            }),
            controllers.school.getManyNoCount({
                query: querySchool,
                select: "name name_en"
            }),
        ])
        return {
            shifts: getShifts,
            apply_majors: getMajors,
            schools: getSchools,
        }
    }

    private totalValue(columns: any[], data: any[] ) {
        let jsonData: any = []
        jsonData = CommonUtil.JSONParse(columns)
        for (var j = 0; j < jsonData.length; j++){
            jsonData[j].total_female = 0;
            jsonData[j].total_student = 0;
        }
        for (var i = 0; i < data.length; i++){
            for (var j = 0; j < jsonData.length; j++){
                jsonData[j].total_female += data[i].student_data[j].total_female;
                jsonData[j].total_student += data[i].student_data[j].total_student;
            }
        }
        return jsonData;
    } 

    async studentApplyBySchool(req: any) {
        let { apply_majors, shifts, schools } = req.query;
        let querySchool: any = {
            status: EnumConstant.ACTIVE
        }
        if (schools) {
            querySchool._id = new ObjectId(schools);
        }
        if (req.body._user.schools) {
            querySchool._id = new ObjectId(req.body._user.schools);
        }
        let queryCourse: any = {
            status: { $ne: EnumConstant.DELETE }
        }
        if (apply_majors) {
            queryCourse.apply_majors = apply_majors;
        }
        if (shifts) {
            queryCourse.shifts = shifts;
        }
        let matchStudentCourse: any = {}
        if (apply_majors || shifts) { 
            let getCourses = await controllers.course.getManyNoCount({
                query: queryCourse,
                select: "_id"
            })
            matchStudentCourse.courses = { $in: getCourses.map(item => item._id) };
        }

        let [startDate, endDate] = CommonUtil.parseStartDateEndDate(req.query.start_date, req.query.end_date);

        let data = await models.school.aggregate([
            {
                $match: querySchool
            },
            {
                $lookup: {
                    from: 'students',
                    let: { id: "$_id" },
                    pipeline: [
                        {
                            $match: {
                                $expr: { $eq: ["$schools", "$$id"] },
                                ...matchStudentCourse
                            }
                        },
                        {
                            $lookup: {
                                from: 'request_timelines',
                                let: { id: "$_id" },
                                pipeline: [
                                    {
                                        $match: {
                                            $expr: { $eq: ["$students", "$$id"] },
                                            status: EnumConstant.REQUESTING,
                                            timeline_type: EnumConstant.TimelineType.SCHOLARSHIP,
                                            createdAt: { $gte: startDate, $lte: endDate },
                                            resubmit: {$ne : EnumConstant.ACTIVE}
                                        }
                                    },
                                    {
                                        $limit: 1
                                    }
                                ],
                                as: "request_timelines"
                            },
                        },
                        { $unwind: { path: "$request_timelines" } },
                        {
                            $lookup: {
                                from: 'staffs',
                                let: { id: "$create_by" },
                                pipeline: [
                                    {
                                        $match: {
                                            $expr: { $eq: ["$_id", "$$id"] },
                                        }
                                    },
                                    {
                                        $project: {
                                            schools: 1,
                                            user_departments: 1,
                                        }
                                    }
                                ],
                                as: "create_by"
                            },
                        },
                        { $unwind: { path: "$create_by", preserveNullAndEmptyArrays: true } },
                        {
                            $group: {
                                _id: {
                                    user_departments: "$create_by.user_departments",
                                    create_by_schools: "$create_by.schools",
                                },
                                total_student: { $sum: 1 },
                                total_female: {
                                    $sum: {
                                        $cond: [
                                            { $eq: ["$gender", EnumConstant.Gender.FEMALE] }, 1, 0
                                        ]
                                    }
                                },
                                has_id_poor: {
                                    $sum: {
                                        $cond: [
                                            { $ifNull: ["$poor_id", false] }, 1, 0
                                        ]
                                    }
                                },
                                has_id_poor_female: {
                                    $sum: {
                                        $cond: [
                                            {
                                                $and: [
                                                    { $eq: ["$gender", EnumConstant.Gender.FEMALE] },
                                                    { $ifNull: ["$poor_id", false] }
                                                ]
                                            },
                                            1,
                                            0
                                        ]
                                    }
                                },
                                self_apply_student: {
                                    $sum: {
                                        $cond: [{ $ifNull: ["$create_by", false] }, 0, 1]
                                    }
                                },
                                self_apply_female: {
                                    $sum: {
                                        $cond: [
                                            { $ifNull: ["$create_by", false] },
                                            0,
                                            {
                                                $cond: [
                                                    { $eq: ["$gender", EnumConstant.Gender.FEMALE] }, 1, 0
                                                ],
                                            }
                                        ]
                                    }
                                },
                            }
                        },
                        {
                            $group: {
                                _id: null,
                                total_student: { $sum: "$total_student" },
                                total_female: { $sum: "$total_female" },
                                has_id_poor: { $sum: "$has_id_poor" },
                                has_id_poor_female: { $sum: "$has_id_poor_female" },
                                self_apply_student: { $sum: "$self_apply_student" },
                                self_apply_female: { $sum: "$self_apply_female" },
                                user_departments: {
                                    $push: {
                                        $cond: [
                                            { $ifNull: ["$_id.user_departments", false] },
                                            {
                                                user_departments: "$_id.user_departments",
                                                total_student: "$total_student",
                                                total_female: "$total_female",
                                            },
                                            "$$REMOVE"
                                        ]
                                    }
                                },
                                school_apply_student: {
                                    $sum: {
                                        $cond: [{ $ifNull: ["$_id.create_by_schools", false] }, "$total_student", 0]
                                    }
                                },
                                school_apply_female: {
                                    $sum: {
                                        $cond: [
                                            { $ifNull: ["$_id.create_by_schools", false] },
                                            "$total_female",
                                            0,
                                        ]
                                    }
                                },
                            }
                        },
                        {
                            $project: {_id: 0}
                        }
                    ],
                    as: "student_data"
                }
            },
            { $unwind: { path: "$student_data", preserveNullAndEmptyArrays: true } },
            {
                $replaceRoot: {
                    newRoot: {
                        $mergeObjects: [
                            {
                                _id: "$_id",
                                name: "$name",
                                name_en: "$name_en",
                                address: "$address",
                                profile_image: "$profile_image",
                                code: "$code",
                                id_code: "$id_code",
                            },
                            "$student_data"
                        ]
                    }
                }
            },
            {
                $addFields: {
                    total_student: {
                        $cond: [{ $ifNull: ["$total_student", false] }, "$total_student", 0]
                    },
                    total_female: {
                        $cond: [{ $ifNull: ["$total_female", false] }, "$total_female", 0]
                    },
                    has_id_poor: {
                        $cond: [{ $ifNull: ["$has_id_poor", false] }, "$has_id_poor", 0]
                    },
                    has_id_poor_female: {
                        $cond: [{ $ifNull: ["$has_id_poor_female", false] }, "$has_id_poor_female", 0]
                    },
                    self_apply_student: {
                        $cond: [{ $ifNull: ["$self_apply_student", false] }, "$self_apply_student", 0]
                    },
                    self_apply_female: {
                        $cond: [{ $ifNull: ["$self_apply_female", false] }, "$self_apply_female", 0]
                    },
                    school_apply_student: {
                        $cond: [{ $ifNull: ["$school_apply_student", false] }, "$school_apply_student", 0]
                    },
                    school_apply_female: {
                        $cond: [{ $ifNull: ["$school_apply_female", false] }, "$school_apply_female", 0]
                    },
                    user_departments: {
                        $cond: [{ $ifNull: ["$user_departments", false] }, "$user_departments", []]
                    },
                }
            },
            {
                $sort: {
                    id_code: 1,
                }
            },
            {
                $group: {
                    _id: "$address.city_provinces",
                    schools: { $push: "$$ROOT" },
                    total_student: { $sum: "$total_student" },
                    total_female: { $sum: "$total_female" },
                    has_id_poor: { $sum: "$has_id_poor" },
                    has_id_poor_female: { $sum: "$has_id_poor_female" },
                    self_apply_student: { $sum: "$self_apply_student" },
                    self_apply_female: { $sum: "$self_apply_female" },
                    school_apply_student: { $sum: "$school_apply_student" },
                    school_apply_female: { $sum: "$school_apply_female" },
                }
            },
            {
                $lookup: {
                    from: 'city_provinces',
                    let: { id: "$_id" },
                    pipeline: [
                        {
                            $match: {
                                $expr: { $eq: ["$_id", "$$id"] },
                            }
                        },
                    ],
                    as: "city_provinces"
                }
            },
            {
                $unwind: { path: "$city_provinces", preserveNullAndEmptyArrays: true }
            },
            {
                $addFields: {
                    name: "$city_provinces.name",
                    name_en: "$city_provinces.name_en",
                }
            },
            {
                $sort: {
                    "city_provinces.order": 1,
                }
            },
            { 
                $project: {
                    city_provinces: 0,
                    "schools.address": 0
                }
            },
        ]).allowDiskUse(true);;
        // return data;
        let groupDeparts: any = [];
        for (var i = 0; i < data.length; i++){
            for (var schs = 0; schs < data[i].schools.length; schs++){
                data[i].schools[schs].user_departments.forEach((item: any) => {
                    groupDeparts.push(String(item.user_departments));
                });
            }
        }
        let getDeparts = await controllers.userDepartment.getManyNoCount({
            query: {
                _id: { $in: groupDeparts }, status: {$ne :EnumConstant.DELETE},
            },
            select: "name name_en"
        });
        let headerColumns: any = [];
        headerColumns.push({ _id: 1, "name": "ដោយខ្លួនឯង" });
        headerColumns.push({ _id: 2, "name": "គ្រឹស្ថានសិក្សា" });
        headerColumns.push(...getDeparts);
        headerColumns.push({ _id: 3, "name": "មានបណ្ឌសមធម៌" });
        headerColumns.push({ _id: 4, "name": "សរុបរួម" });
        let jsonData = CommonUtil.JSONParse(data);
        let keyToRemove = ["has_id_poor", "has_id_poor_female","self_apply_student", "self_apply_female", "school_apply_student", "school_apply_female", "user_departments", "total_student", "total_female"]
        for (var i = 0; i < jsonData.length; i++) {
            let cityData: any = []
            cityData.push({ _id: 1, total_student: jsonData[i].self_apply_student, total_female: jsonData[i].self_apply_female });
            cityData.push({ _id: 2, total_student: jsonData[i].school_apply_student, total_female: jsonData[i].school_apply_female });
            let cityUserDeparts: any = CommonUtil.JSONParse(getDeparts);
            for (var city = 0; city < cityUserDeparts.length; city++){
                cityUserDeparts[city].total_student = 0
                cityUserDeparts[city].total_female = 0;
            }
            for (var schs = 0; schs < jsonData[i].schools.length; schs++) {
                let item : any = jsonData[i].schools[schs];
                let schoolData: any = [];
                schoolData.push({ _id: 1, total_student: item.self_apply_student, total_female: item.self_apply_female });
                schoolData.push({ _id: 2, total_student: item.school_apply_student, total_female: item.school_apply_female });
                for (var dep = 0; dep < getDeparts.length; dep++){
                    let exist = false
                    let getDept = getDeparts[dep];
                    for (var depart = 0; depart < item.user_departments.length; depart++){
                        if (String(item.user_departments[depart].user_departments) == String(getDept._id)) {
                            schoolData.push({
                                _id: item.user_departments[depart].user_departments,
                                total_student: item.user_departments[depart].total_student,
                                total_female: item.user_departments[depart].total_female,
                            });
                            cityUserDeparts[dep].total_student += item.user_departments[depart].total_student;
                            cityUserDeparts[dep].total_female += item.user_departments[depart].total_female;
                            exist = true;
                            break;
                        }
                    }
                    if (!exist) {
                        schoolData.push({
                            _id: getDept._id,
                            total_student: 0,
                            total_female: 0,
                        });
                    }
                }
                schoolData.push({ _id: 3, total_student: item.has_id_poor, total_female: item.has_id_poor_female });
                schoolData.push({ _id: 4, total_student: item.total_student, total_female: item.total_female });
                jsonData[i].schools[schs].student_data = schoolData;
                jsonData[i].schools[schs] = CommonUtil.removeKeys(
                    jsonData[i].schools[schs], keyToRemove
                )
            }
            cityData.push(...cityUserDeparts);
            cityData.push({ _id: 3, total_student: jsonData[i].has_id_poor, total_female: jsonData[i].has_id_poor_female });
            cityData.push({ _id: 4, total_student: jsonData[i].total_student, total_female: jsonData[i].total_female });
            jsonData[i] = CommonUtil.removeKeys(
                jsonData[i], keyToRemove
            )
            jsonData[i].student_data = cityData;
        }
        return {
            start_date: startDate,
            start_end: endDate,
            header_columns: headerColumns,
            report_data: jsonData,
            total_data: this.totalValue(headerColumns, jsonData)
        }
    }

    async studentApplyBySchoolByMajor(req: any) {
        let { apply_majors, shifts, schools } = req.query;
        if (req.body._user.schools) {
            schools = req.body._user.schools;
        }
        let queryMajor: any = {
            status: EnumConstant.ACTIVE
        }
        if (apply_majors) {
            queryMajor._id = new ObjectId(apply_majors);
        }
        let matchCourse: any = {}
        if (shifts || schools) { 
            let queryCourse: any = {
                status: { $ne: EnumConstant.DELETE }
            };
            if (shifts) {
                queryCourse.shifts = shifts;
            }
            if (schools) {
                queryCourse.schools = new ObjectId(schools);
            }
            let getCourses = await controllers.course.getManyNoCount({
                query: queryCourse,
                select: "_id"
            })
            matchCourse._id = { $in: getCourses.map(item => item._id) };
        }

        let [startDate, endDate] = CommonUtil.parseStartDateEndDate(req.query.start_date, req.query.end_date);
        let data = await models.applyMajor.aggregate([
            {
                $match: queryMajor
            },
            {
                $lookup: {
                    from: 'courses',
                    let: { id: "$_id" },
                    pipeline: [
                        {
                            $match: {
                                $expr: { $eq: ["$apply_majors", "$$id"] },
                                // status: { $ne: EnumConstant.DELETE },
                                ...matchCourse
                            }
                        },
                        {
                            $lookup: {
                                from: 'students',
                                let: { id: "$_id" },
                                pipeline: [
                                    {
                                        $match: {
                                            $expr: { $eq: ["$courses", "$$id"] },
                                        }
                                    },
                                    {
                                        $lookup: {
                                            from: 'request_timelines',
                                            let: { id: "$_id" },
                                            pipeline: [
                                                {
                                                    $match: {
                                                        $expr: { $eq: ["$students", "$$id"] },
                                                        status: EnumConstant.REQUESTING,
                                                        timeline_type: EnumConstant.TimelineType.SCHOLARSHIP,
                                                        createdAt: { $gte: startDate, $lte: endDate },
                                                        resubmit: {$ne : EnumConstant.ACTIVE}
                                                    }
                                                },
                                                {
                                                    $limit: 1
                                                }
                                            ],
                                            as: "request_timelines"
                                        },
                                    },
                                    { $unwind: { path: "$request_timelines" } },
                                    {
                                        $lookup: {
                                            from: 'staffs',
                                            let: { id: "$create_by" },
                                            pipeline: [
                                                {
                                                    $match: {
                                                        $expr: { $eq: ["$_id", "$$id"] },
                                                    }
                                                },
                                                {
                                                    $project: {
                                                        schools: 1,
                                                        user_departments: 1,
                                                    }
                                                }
                                            ],
                                            as: "create_by"
                                        },
                                    },
                                    { $unwind: { path: "$create_by", preserveNullAndEmptyArrays: true } },
                                ],
                                as: "students"
                            }
                        },
                        { $unwind: { path: "$students" } },
                    ],
                    as: "courses"
                },
            },
            { $unwind: { path: "$courses", preserveNullAndEmptyArrays: true } },   
            {
                $group: {
                    name: { $first: "$name" },
                    name_en: { $first: "$name_en" },
                    sectors: { $first: "$sectors" },
                    code: { $first: "$code" },
                    _id: {
                        apply_majors: "$_id",
                        user_departments: "$courses.students.create_by.user_departments",
                        create_by_schools: "$courses.students.create_by.schools",
                    },
                    total_student: {
                        $sum: {
                            $cond: [
                                { $ifNull: ["$courses.students", false] }, 1,0
                            ]
                        }
                    },
                    total_female: {
                        $sum: {
                            $cond: [
                                { $eq: ["$courses.students.gender", EnumConstant.Gender.FEMALE] }, 1, 0
                            ]
                        }
                    },
                    has_id_poor: {
                        $sum: {
                            $cond: [
                                { $ifNull: ["$courses.students.poor_id", false] }, 1, 0
                            ]
                        }
                    },
                    has_id_poor_female: {
                        $sum: {
                            $cond: [
                                {
                                    $and: [
                                        { $eq: ["$courses.students.gender", EnumConstant.Gender.FEMALE] },
                                        { $ifNull: ["$courses.students.poor_id", false] }
                                    ]
                                },
                                1,
                                0
                            ]
                        }
                    },
                    self_apply_student: {
                        $sum: {
                            $cond: [
                                { $ifNull: ["$courses.students", false] },
                                {
                                    $cond: [
                                        { $ifNull: ["$courses.students.create_by", false] },
                                        0,
                                        1
                                    ]
                                }
                                , 0
                            ]
                        }
                    },
                    self_apply_female: {
                        $sum: {
                            $cond: [
                                { $ifNull: ["$courses.students.create_by", false] },
                                0,
                                {
                                    $cond: [
                                        { $eq: ["$courses.students.gender", EnumConstant.Gender.FEMALE] }, 1, 0
                                    ],
                                }
                            ]
                        }
                    },
                }
            },
            {
                $group: {
                    _id: "$_id.apply_majors",
                    name: { $first: "$name" },
                    name_en: { $first: "$name_en" },
                    code: { $first: "$code" },
                    sectors: { $first: "$sectors" },
                    total_student: { $sum: "$total_student" },
                    total_female: { $sum: "$total_female" },
                    has_id_poor: { $sum: "$has_id_poor" },
                    has_id_poor_female: { $sum: "$has_id_poor_female" },
                    self_apply_student: { $sum: "$self_apply_student" },
                    self_apply_female: { $sum: "$self_apply_female" },
                    user_departments: {
                        $push: {
                            $cond: [
                                { $ifNull: ["$_id.user_departments", false] },
                                {
                                    user_departments: "$_id.user_departments",
                                    total_student: "$total_student",
                                    total_female: "$total_female",
                                },
                                "$$REMOVE"
                            ]
                        }
                    },
                    school_apply_student: {
                        $sum: {
                            $cond: [{ $ifNull: ["$_id.create_by_schools", false] }, "$total_student", 0]
                        }
                    },
                    school_apply_female: {
                        $sum: {
                            $cond: [
                                { $ifNull: ["$_id.create_by_schools", false] },
                                "$total_female",
                                0,
                            ]
                        }
                    },
                }
            },
            {$sort: {code: 1}},
            {
                $group: {
                    _id: "$sectors",
                    apply_majors: { $push: "$$ROOT" },
                    total_student: { $sum: "$total_student" },
                    total_female: { $sum: "$total_female" },
                    has_id_poor: { $sum: "$has_id_poor" },
                    has_id_poor_female: { $sum: "$has_id_poor_female" },
                    self_apply_student: { $sum: "$self_apply_student" },
                    self_apply_female: { $sum: "$self_apply_female" },
                    school_apply_student: { $sum: "$school_apply_student" },
                    school_apply_female: { $sum: "$school_apply_female" },
                }
            },
            {
                $lookup: {
                    from: 'sectors',
                    let: { id: "$_id" },
                    pipeline: [
                        {
                            $match: {
                                $expr: { $eq: ["$_id", "$$id"] },
                            }
                        },
                    ],
                    as: "sectors"
                }
            },
            {
                $unwind: { path: "$sectors", preserveNullAndEmptyArrays: true }
            },
            {
                $addFields: {
                    name: "$sectors.name",
                    name_en: "$sectors.name_en",
                    code: "$sectors.code",
                }
            },
            {$sort: {code: 1}},
            { 
                $project: {
                    sectors: 0,
                }
            },
        ]).allowDiskUse(true);;
        // return data
        let groupDeparts: any = [];
        for (var i = 0; i < data.length; i++){
            for (var major = 0; major < data[i].apply_majors.length; major++){
                data[i].apply_majors[major].user_departments.forEach((item: any) => {
                    groupDeparts.push(String(item.user_departments));
                });
            }
        }
        let getDeparts = await controllers.userDepartment.getManyNoCount({
            query: {
                _id: { $in: groupDeparts }, status: {$ne :EnumConstant.DELETE},
            },
            select: "name name_en"
        });
        let headerColumns: any = [];
        headerColumns.push({ _id: 1, "name": "ដោយខ្លួនឯង" });
        headerColumns.push({ _id: 2, "name": "គ្រឹស្ថានសិក្សា" });
        headerColumns.push(...getDeparts);
        headerColumns.push({ _id: 3, "name": "មានបណ្ឌសមធម៌" });
        headerColumns.push({ _id: 4, "name": "សរុបរួម" });
        let jsonData = CommonUtil.JSONParse(data);
        let keyToRemove = ["has_id_poor", "has_id_poor_female","self_apply_student", "self_apply_female", "school_apply_student", "school_apply_female", "user_departments", "total_student", "total_female"]
        for (var i = 0; i < jsonData.length; i++) {
            let cityData: any = []
            cityData.push({ _id: 1, total_student: jsonData[i].self_apply_student, total_female: jsonData[i].self_apply_female });
            cityData.push({ _id: 2, total_student: jsonData[i].school_apply_student, total_female: jsonData[i].school_apply_female });
            let cityUserDeparts: any = CommonUtil.JSONParse(getDeparts);
            for (var city = 0; city < cityUserDeparts.length; city++){
                cityUserDeparts[city].total_student = 0
                cityUserDeparts[city].total_female = 0;
            }
            for (var major = 0; major < jsonData[i].apply_majors.length; major++) {
                let item : any = jsonData[i].apply_majors[major];
                let schoolData: any = [];
                schoolData.push({ _id: 1, total_student: item.self_apply_student, total_female: item.self_apply_female });
                schoolData.push({ _id: 2, total_student: item.school_apply_student, total_female: item.school_apply_female });
                for (var dep = 0; dep < getDeparts.length; dep++){
                    let exist = false
                    let getDept = getDeparts[dep];
                    for (var depart = 0; depart < item.user_departments.length; depart++){
                        if (String(item.user_departments[depart].user_departments) == String(getDept._id)) {
                            schoolData.push({
                                _id: item.user_departments[depart].user_departments,
                                total_student: item.user_departments[depart].total_student,
                                total_female: item.user_departments[depart].total_female,
                            });
                            cityUserDeparts[dep].total_student += item.user_departments[depart].total_student;
                            cityUserDeparts[dep].total_female += item.user_departments[depart].total_female;
                            exist = true;
                            break;
                        }
                    }
                    if (!exist) {
                        schoolData.push({
                            _id: getDept._id,
                            total_student: 0,
                            total_female: 0,
                        });
                    }
                }
                schoolData.push({ _id: 3, total_student: item.has_id_poor, total_female: item.has_id_poor_female });
                schoolData.push({ _id: 4, total_student: item.total_student, total_female: item.total_female });
                jsonData[i].apply_majors[major].student_data = schoolData;
                jsonData[i].apply_majors[major] = CommonUtil.removeKeys(
                    jsonData[i].apply_majors[major], keyToRemove
                )
            }
            cityData.push(...cityUserDeparts);
            cityData.push({ _id: 3, total_student: jsonData[i].has_id_poor, total_female: jsonData[i].has_id_poor_female });
            cityData.push({ _id: 4, total_student: jsonData[i].total_student, total_female: jsonData[i].total_female });
            jsonData[i] = CommonUtil.removeKeys(
                jsonData[i], keyToRemove
            )
            jsonData[i].student_data = cityData;
        }
        return {
            start_date: startDate,
            start_end: endDate,
            header_columns: headerColumns,
            report_data: jsonData,
            total_data: this.totalValue(headerColumns, jsonData)
        }
    }

    async approvalStudentCount(req: any) {
        let { apply_majors, shifts, schools } = req.query;
        let querySchool: any = {
            status: EnumConstant.ACTIVE
        }
        if (schools) {
            querySchool._id = new ObjectId(schools);
        }
        if (req.body._user.schools) {
            querySchool._id = new ObjectId(req.body._user.schools);
        }
        let queryCourse: any = {
            status: { $ne: EnumConstant.DELETE }
        }
        if (apply_majors) {
            queryCourse.apply_majors = apply_majors;
        }
        if (shifts) {
            queryCourse.shifts = shifts;
        }
        let matchStudentCourse: any = {}
        if (apply_majors || shifts) { 
            let getCourses = await controllers.course.getManyNoCount({
                query: queryCourse,
                select: "_id"
            })
            matchStudentCourse.courses = { $in: getCourses.map(item => item._id) };
        }

        let [startDate, endDate] = CommonUtil.parseStartDateEndDate(req.query.start_date, req.query.end_date);
        let data = await models.school.aggregate([
            {
                $match: querySchool
            },
            {
                $lookup: {
                    from: 'students',
                    let: { id: "$_id" },
                    pipeline: [
                        {
                            $match: {
                                $expr: { $eq: ["$schools", "$$id"] },
                                ...matchStudentCourse
                            }
                        },
                        {
                            $lookup: {
                                from: 'request_timelines',
                                let: { id: "$_id" },
                                pipeline: [
                                    {
                                        $match: {
                                            $expr: { $eq: ["$students", "$$id"] },
                                            $or: [
                                                {
                                                    status: { $in: [EnumConstant.REQUESTING, EnumConstant.ACTIVE] },
                                                    timeline_type: EnumConstant.TimelineType.SCHOLARSHIP,
                                                    resubmit: {$ne : EnumConstant.ACTIVE}
                                                },
                                                {
                                                    status: EnumConstant.ACTIVE,
                                                    timeline_type: EnumConstant.TimelineType.APPROVALINFO,
                                                },
                                                {
                                                    status: EnumConstant.ACTIVE,
                                                    timeline_type: EnumConstant.TimelineType.IDPOOR,
                                                },
                                                {
                                                    status: EnumConstant.REQUESTING,
                                                    timeline_type: EnumConstant.TimelineType.IDPOOR,
                                                    resubmit: {$ne : EnumConstant.ACTIVE}
                                                },
                                            ],
                                            createdAt: { $gte: startDate, $lte: endDate },
                                        }
                                    },
                                    {
                                        $group: {
                                            _id: {
                                                status: "$status",
                                                timeline_type: "$timeline_type"
                                            }
                                        }  
                                    },
                                ],
                                as: "request_timelines"
                            },
                        },
                        { $unwind: { path: "$request_timelines" } },
                        {
                            $group: {
                                _id: null,
                                apply_student: {
                                    $sum: {
                                        $cond: [
                                            {
                                                $and: [
                                                    { $eq: ["$request_timelines._id.timeline_type", EnumConstant.TimelineType.SCHOLARSHIP] },
                                                    { $eq: ["$request_timelines._id.status", EnumConstant.REQUESTING] },
                                                ]
                                            },
                                            1,
                                            0
                                        ]
                                    }
                                },
                                apply_female: {
                                    $sum: {
                                        $cond: [
                                            {
                                                $and: [
                                                    { $eq: ["$request_timelines._id.timeline_type", EnumConstant.TimelineType.SCHOLARSHIP] },
                                                    { $eq: ["$request_timelines._id.status", EnumConstant.REQUESTING] },
                                                    { $eq: ["$gender", EnumConstant.Gender.FEMALE] }
                                                ]
                                            },
                                            1,
                                            0
                                        ]
                                    }
                                },
                                scholarship_approved_student: {
                                    $sum: {
                                        $cond: [
                                            {
                                                $and: [
                                                    { $eq: ["$request_timelines._id.timeline_type", EnumConstant.TimelineType.SCHOLARSHIP] },
                                                    { $eq: ["$request_timelines._id.status", EnumConstant.ACTIVE] },
                                                ]
                                            },
                                            1,
                                            0
                                        ]
                                    }
                                },
                                scholarship_approved_female: {
                                    $sum: {
                                        $cond: [
                                            {
                                                $and: [
                                                    { $eq: ["$request_timelines._id.timeline_type", EnumConstant.TimelineType.SCHOLARSHIP] },
                                                    { $eq: ["$request_timelines._id.status", EnumConstant.ACTIVE] },
                                                    { $eq: ["$gender", EnumConstant.Gender.FEMALE] }
                                                ]
                                            },
                                            1,
                                            0
                                        ]
                                    }
                                },
                                idpoor_request_student: {
                                    $sum: {
                                        $cond: [
                                            {
                                                $and: [
                                                    { $eq: ["$request_timelines._id.timeline_type", EnumConstant.TimelineType.IDPOOR] },
                                                    { $eq: ["$request_timelines._id.status", EnumConstant.REQUESTING] },
                                                ]
                                            },
                                            1,
                                            0
                                        ]
                                    }
                                },
                                idpoor_request_female: {
                                    $sum: {
                                        $cond: [
                                            {
                                                $and: [
                                                    { $eq: ["$request_timelines._id.timeline_type", EnumConstant.TimelineType.IDPOOR] },
                                                    { $eq: ["$request_timelines._id.status", EnumConstant.REQUESTING] },
                                                    { $eq: ["$gender", EnumConstant.Gender.FEMALE] }
                                                ]
                                            },
                                            1,
                                            0
                                        ]
                                    }
                                },
                                idpoor_approved_student: {
                                    $sum: {
                                        $cond: [
                                            {
                                                $and: [
                                                    { $eq: ["$request_timelines._id.timeline_type", EnumConstant.TimelineType.IDPOOR], },
                                                    { $eq: ["$request_timelines._id.status", EnumConstant.ACTIVE] },
                                                ]
                                            },
                                            1,
                                            0
                                        ]
                                    }
                                },
                                idpoor_approved_female: {
                                    $sum: {
                                        $cond: [
                                            {
                                                $and: [
                                                    { $eq: ["$request_timelines._id.timeline_type", EnumConstant.TimelineType.IDPOOR] },
                                                    { $eq: ["$gender", EnumConstant.Gender.FEMALE] },
                                                    { $eq: ["$request_timelines._id.status", EnumConstant.ACTIVE] },
                                                ]
                                            },
                                            1,
                                            0
                                        ]
                                    }
                                },
                                info_approved_student: {
                                    $sum: {
                                        $cond: [
                                            {
                                                $eq: ["$request_timelines._id.timeline_type", EnumConstant.TimelineType.APPROVALINFO],
                                            },
                                            1,
                                            0
                                        ]
                                    }
                                },
                                info_approved_female: {
                                    $sum: {
                                        $cond: [
                                            {
                                                $and: [
                                                    { $eq: ["$request_timelines._id.timeline_type", EnumConstant.TimelineType.APPROVALINFO] },
                                                    { $eq: ["$gender", EnumConstant.Gender.FEMALE] }
                                                ]
                                            },
                                            1,
                                            0
                                        ]
                                    }
                                },
                            }
                        },
                        {
                            $project: {_id: 0}
                        }
                    ],
                    as: "student_data"
                }
            },          
            { $unwind: { path: "$student_data", preserveNullAndEmptyArrays: true } },
            {
                $replaceRoot: {
                    newRoot: {
                        $mergeObjects: [
                            {
                                _id: "$_id",
                                name: "$name",
                                name_en: "$name_en",
                                address: "$address",
                                profile_image: "$profile_image",
                                code: "$code",
                                id_code: "$id_code",
                            },
                            "$student_data"
                        ]
                    }
                }
            },
            {
                $addFields: {
                    apply_female: {
                        $cond: [{ $ifNull: ["$apply_female", false] }, "$apply_female", 0]
                    },
                    apply_student: {
                        $cond: [{ $ifNull: ["$apply_student", false] }, "$apply_student", 0]
                    },
                    idpoor_approved_female: {
                        $cond: [{ $ifNull: ["$idpoor_approved_female", false] }, "$idpoor_approved_female", 0]
                    },
                    idpoor_approved_student: {
                        $cond: [{ $ifNull: ["$idpoor_approved_student", false] }, "$idpoor_approved_student", 0]
                    },
                    idpoor_request_student: {
                        $cond: [{ $ifNull: ["$idpoor_request_student", false] }, "$idpoor_request_student", 0]
                    },
                    idpoor_request_female: {
                        $cond: [{ $ifNull: ["$idpoor_request_female", false] }, "$idpoor_request_female", 0]
                    },
                    info_approved_female: {
                        $cond: [{ $ifNull: ["$info_approved_female", false] }, "$info_approved_female", 0]
                    },
                    info_approved_student: {
                        $cond: [{ $ifNull: ["$info_approved_student", false] }, "$info_approved_student", 0]
                    },
                    scholarship_approved_female: {
                        $cond: [{ $ifNull: ["$scholarship_approved_female", false] }, "$scholarship_approved_female", 0]
                    },
                    scholarship_approved_student: {
                        $cond: [{ $ifNull: ["$scholarship_approved_student", false] }, "$scholarship_approved_student", 0]
                    },
                }
            },
            {
                $sort: {
                    id_code: 1,
                }
            },
            {
                $group: {
                    _id: "$address.city_provinces",
                    schools: { $push: "$$ROOT" },
                    apply_student: {$sum: "$apply_student"},
                    apply_female: {$sum: "$apply_female"},
                    scholarship_approved_student: {$sum: "$scholarship_approved_student"},
                    scholarship_approved_female: {$sum: "$scholarship_approved_female"},
                    idpoor_approved_student: {$sum: "$idpoor_approved_student"},
                    idpoor_approved_female: {$sum: "$idpoor_approved_female"},
                    info_approved_student: {$sum: "$info_approved_student"},
                    info_approved_female: {$sum: "$info_approved_female"},
                    idpoor_request_student: {$sum: "$idpoor_request_student"},
                    idpoor_request_female: {$sum: "$idpoor_request_female"},
                }
            },
            {
                $lookup: {
                    from: 'city_provinces',
                    let: { id: "$_id" },
                    pipeline: [
                        {
                            $match: {
                                $expr: { $eq: ["$_id", "$$id"] },
                            }
                        },
                    ],
                    as: "city_provinces"
                }
            },
            {
                $unwind: { path: "$city_provinces", preserveNullAndEmptyArrays: true }
            },
            { 
                $addFields: {
                    name: "$city_provinces.name",
                    name_en: "$city_provinces.name_en",
                }
            },
            {
                $sort: {
                    "city_provinces.order": 1,
                }
            },
            { 
                $project: {
                    city_provinces: 0,
                    "schools.address": 0
                }
            }
        ]).allowDiskUse(true);;
 
        let keyToRemove = ["scholarship_approved_student", "scholarship_approved_female", "apply_student", "apply_female", "idpoor_approved_student", "idpoor_approved_female", "info_approved_student", "info_approved_female"]
        let jsonData = CommonUtil.JSONParse(data);
        let headerColumns: any[] = [];
        headerColumns.push({_id: 1, name: "ចំនួនស្នើសុំចុះឈ្មោះចូលរៀន"})
        headerColumns.push({_id: 2, name: "អនុម័តដោយគ្រឹះស្ថាន"})
        headerColumns.push({_id: 3, name: "សំណើទៅមូលនិធិជាតិជំនួយសង្គម"})
        headerColumns.push({ _id: 4, name: "អនុម័តដោយមូលនិធិជាតិជំនួយសង្គម" })
        for (var i = 0; i < jsonData.length; i++){
            for (var school = 0; school < jsonData[i].schools.length; school++){
                let studentData: any[] = [];
                let sch = jsonData[i].schools[school];
                studentData.push({ _id: 1, total_student: sch.apply_student, total_female: sch.apply_female });
                studentData.push({ _id: 2, total_student: sch.scholarship_approved_student, total_female: sch.scholarship_approved_female });
                // studentData.push({ _id: 3, total_student: sch.info_approved_student, total_female: sch.info_approved_female });
                studentData.push({ _id: 3, total_student: sch.idpoor_request_student, total_female: sch.idpoor_request_female });
                studentData.push({ _id: 4, total_student: sch.idpoor_approved_student, total_female: sch.idpoor_approved_female });
                jsonData[i].schools[school].student_data = studentData;
                jsonData[i].schools[school] = CommonUtil.removeKeys(
                    jsonData[i].schools[school],
                    keyToRemove
                )
            }
            let studentData: any[] = [];
            let city = jsonData[i];
            studentData.push({ _id: 1, total_student: city.apply_student, total_female: city.apply_female });
            studentData.push({ _id: 2, total_student: city.scholarship_approved_student, total_female: city.scholarship_approved_female });
            studentData.push({ _id: 3, total_student: city.idpoor_request_student, total_female: city.idpoor_request_female });
            studentData.push({ _id: 4, total_student: city.idpoor_approved_student, total_female: city.idpoor_approved_female });
            jsonData[i].student_data = studentData;
            jsonData[i] = CommonUtil.removeKeys(
                jsonData[i],keyToRemove                
            )
        }
        return {
            start_date: startDate,
            start_end: endDate,
            header_columns: headerColumns,
            report_data: jsonData,
            total_data: this.totalValue(headerColumns, jsonData)
        }
    }

    async approvalStudentByMajor(req: any) {
        let { apply_majors, shifts, schools } = req.query;
        if (req.body._user.schools) {
            schools = req.body._user.schools;
        }
        let queryMajor: any = {
            status: EnumConstant.ACTIVE
        }
        if (apply_majors) {
            queryMajor._id = new ObjectId(apply_majors);
        }
        let matchCourse: any = {}
        if (shifts || schools) { 
            let queryCourse: any = {
                status: { $ne: EnumConstant.DELETE }
            };
            if (shifts) {
                queryCourse.shifts = shifts;
            }
            if (schools) {
                queryCourse.schools = new ObjectId(schools);
            }
            let getCourses = await controllers.course.getManyNoCount({
                query: queryCourse,
                select: "_id"
            })
            matchCourse._id = { $in: getCourses.map(item => item._id) };
        }
        let [startDate, endDate] = CommonUtil.parseStartDateEndDate(req.query.start_date, req.query.end_date);
        let data = await models.applyMajor.aggregate([
            {
                $match: queryMajor
            },
            {
                $lookup: {
                    from: 'courses',
                    let: { id: "$_id" },
                    pipeline: [
                        {
                            $match: {
                                $expr: { $eq: ["$apply_majors", "$$id"] },
                                // status: { $ne: EnumConstant.DELETE },
                                ...matchCourse
                            }
                        },
                        {
                            $lookup: {
                                from: 'students',
                                let: { id: "$_id" },
                                pipeline: [
                                    {
                                        $match: {
                                            $expr: { $eq: ["$courses", "$$id"] },
                                        }
                                    },
                                    {
                                        $lookup: {
                                            from: 'request_timelines',
                                            let: { id: "$_id" },
                                            pipeline: [
                                                {
                                                    $match: {
                                                        $expr: { $eq: ["$students", "$$id"] },
                                                        $or: [
                                                            {
                                                                status: { $in: [EnumConstant.REQUESTING, EnumConstant.ACTIVE] },
                                                                timeline_type: EnumConstant.TimelineType.SCHOLARSHIP,
                                                                resubmit: {$ne : EnumConstant.ACTIVE}
                                                            },
                                                            {
                                                                status: EnumConstant.ACTIVE,
                                                                timeline_type: EnumConstant.TimelineType.APPROVALINFO,
                                                            },
                                                            {
                                                                status: EnumConstant.ACTIVE,
                                                                timeline_type: EnumConstant.TimelineType.IDPOOR,
                                                            },
                                                            {
                                                                status: EnumConstant.REQUESTING,
                                                                timeline_type: EnumConstant.TimelineType.IDPOOR,
                                                                resubmit: {$ne : EnumConstant.ACTIVE}
                                                            },
                                                        ],
                                                        createdAt: { $gte: startDate, $lte: endDate },
                                                    }
                                                },
                                                {
                                                    $group: {
                                                        _id: {
                                                            status: "$status",
                                                            timeline_type: "$timeline_type"
                                                        }
                                                    }
                                                },
                                               
                                            ],
                                            as: "request_timelines"
                                        },
                                    },
                                    { $unwind: { path: "$request_timelines" } },
                                ],
                                as: "students"
                            }
                        },
                        { $unwind: { path: "$students" } },
                    ],
                    as: "courses"
                }
            },
            { $unwind: { path: "$courses", preserveNullAndEmptyArrays: true } },   
            {
                $group: {
                    _id: "$_id",
                    name: { $first: "$name" },
                    name_en: { $first: "$name_en" },
                    sectors: { $first: "$sectors" },
                    code: { $first: "$code" },
                    apply_student: {
                        $sum: {
                            $cond: [
                                {
                                    $and: [
                                        { $eq: ["$courses.students.request_timelines._id.timeline_type", EnumConstant.TimelineType.SCHOLARSHIP] },
                                        { $eq: ["$courses.students.request_timelines._id.status", EnumConstant.REQUESTING] },
                                    ]
                                },
                                1,
                                0
                            ]
                        }
                    },
                    apply_female: {
                        $sum: {
                            $cond: [
                                {
                                    $and: [
                                        { $eq: ["$courses.students.request_timelines._id.timeline_type", EnumConstant.TimelineType.SCHOLARSHIP] },
                                        { $eq: ["$courses.students.request_timelines._id.status", EnumConstant.REQUESTING] },
                                        { $eq: ["$courses.students.gender", EnumConstant.Gender.FEMALE] }
                                    ]
                                },
                                1,
                                0
                            ]
                        }
                    },
                    scholarship_approved_student: {
                        $sum: {
                            $cond: [
                                {
                                    $and: [
                                        { $eq: ["$courses.students.request_timelines._id.timeline_type", EnumConstant.TimelineType.SCHOLARSHIP] },
                                        { $eq: ["$courses.students.request_timelines._id.status", EnumConstant.ACTIVE] },
                                    ]
                                },
                                1,
                                0
                            ]
                        }
                    },
                    scholarship_approved_female: {
                        $sum: {
                            $cond: [
                                {
                                    $and: [
                                        { $eq: ["$courses.students.request_timelines._id.timeline_type", EnumConstant.TimelineType.SCHOLARSHIP] },
                                        { $eq: ["$courses.students.request_timelines._id.status", EnumConstant.ACTIVE] },
                                        { $eq: ["$courses.students.gender", EnumConstant.Gender.FEMALE] }
                                    ]
                                },
                                1,
                                0
                            ]
                        }
                    },
                    idpoor_request_student: {
                        $sum: {
                            $cond: [
                                {
                                    $and: [
                                        { $eq: ["$courses.students.request_timelines._id.timeline_type", EnumConstant.TimelineType.IDPOOR] },
                                        { $eq: ["$courses.students.request_timelines._id.status", EnumConstant.REQUESTING] },
                                    ]
                                },
                                1,
                                0
                            ]
                        }
                    },
                    idpoor_request_female: {
                        $sum: {
                            $cond: [
                                {
                                    $and: [
                                        { $eq: ["$courses.students.request_timelines._id.timeline_type", EnumConstant.TimelineType.IDPOOR] },
                                        { $eq: ["$courses.students.request_timelines._id.status", EnumConstant.REQUESTING] },
                                        { $eq: ["$courses.students.gender", EnumConstant.Gender.FEMALE] }
                                    ]
                                },
                                1,
                                0
                            ]
                        }
                    },
                    idpoor_approved_student: {
                        $sum: {
                            $cond: [
                                {
                                    $and: [
                                        { $eq: ["$courses.students.request_timelines._id.timeline_type", EnumConstant.TimelineType.IDPOOR] },
                                        { $eq: ["$courses.students.request_timelines._id.status", EnumConstant.ACTIVE] },
                                    ]
                                },
                                1,
                                0
                            ]
                        }
                    },
                    idpoor_approved_female: {
                        $sum: {
                            $cond: [
                                {
                                    $and: [
                                        { $eq: ["$courses.students.request_timelines._id.timeline_type", EnumConstant.TimelineType.IDPOOR] },
                                        { $eq: ["$courses.students.gender", EnumConstant.Gender.FEMALE] },
                                        { $eq: ["$courses.students.request_timelines._id.status", EnumConstant.ACTIVE] },
                                    ]
                                },
                                1,
                                0
                            ]
                        }
                    },
                    info_approved_student: {
                        $sum: {
                            $cond: [
                                {
                                    $eq: ["$courses.students.request_timelines._id.timeline_type", EnumConstant.TimelineType.APPROVALINFO],
                                },
                                1,
                                0
                            ]
                        }
                    },
                    info_approved_female: {
                        $sum: {
                            $cond: [
                                {
                                    $and: [
                                        { $eq: ["$courses.students.request_timelines._id.timeline_type", EnumConstant.TimelineType.APPROVALINFO] },
                                        { $eq: ["$courses.students.gender", EnumConstant.Gender.FEMALE] }
                                    ]
                                },
                                1,
                                0
                            ]
                        }
                    },
                }
            },
            {
                $addFields: {
                    apply_female: {
                        $cond: [{ $ifNull: ["$apply_female", false] }, "$apply_female", 0]
                    },
                    apply_student: {
                        $cond: [{ $ifNull: ["$apply_student", false] }, "$apply_student", 0]
                    },
                    idpoor_approved_female: {
                        $cond: [{ $ifNull: ["$idpoor_approved_female", false] }, "$idpoor_approved_female", 0]
                    },
                    idpoor_approved_student: {
                        $cond: [{ $ifNull: ["$idpoor_approved_student", false] }, "$idpoor_approved_student", 0]
                    },
                    idpoor_request_student: {
                        $cond: [{ $ifNull: ["$idpoor_request_student", false] }, "$idpoor_request_student", 0]
                    },
                    idpoor_request_female: {
                        $cond: [{ $ifNull: ["$idpoor_request_female", false] }, "$idpoor_request_female", 0]
                    },
                    info_approved_female: {
                        $cond: [{ $ifNull: ["$info_approved_female", false] }, "$info_approved_female", 0]
                    },
                    info_approved_student: {
                        $cond: [{ $ifNull: ["$info_approved_student", false] }, "$info_approved_student", 0]
                    },
                    scholarship_approved_female: {
                        $cond: [{ $ifNull: ["$scholarship_approved_female", false] }, "$scholarship_approved_female", 0]
                    },
                    scholarship_approved_student: {
                        $cond: [{ $ifNull: ["$scholarship_approved_student", false] }, "$scholarship_approved_student", 0]
                    },
                }
            },
            {$sort: {code: 1}},
            {
                $group: {
                    _id: "$sectors",
                    apply_majors: { $push: "$$ROOT" },
                    apply_student: {$sum: "$apply_student"},
                    apply_female: {$sum: "$apply_female"},
                    scholarship_approved_student: {$sum: "$scholarship_approved_student"},
                    scholarship_approved_female: {$sum: "$scholarship_approved_female"},
                    idpoor_approved_student: {$sum: "$idpoor_approved_student"},
                    idpoor_approved_female: {$sum: "$idpoor_approved_female"},
                    info_approved_student: {$sum: "$info_approved_student"},
                    info_approved_female: {$sum: "$info_approved_female"},
                    idpoor_request_student: {$sum: "$idpoor_request_student"},
                    idpoor_request_female: {$sum: "$idpoor_request_female"},
                
                }
            },
            {
                $lookup: {
                    from: 'sectors',
                    let: { id: "$_id" },
                    pipeline: [
                        {
                            $match: {
                                $expr: { $eq: ["$_id", "$$id"] },
                            }
                        },
                    ],
                    as: "sectors"
                }
            },
            {
                $unwind: { path: "$sectors", preserveNullAndEmptyArrays: true }
            },
            { 
                $addFields: {
                    name: "$sectors.name",
                    name_en: "$sectors.name_en",
                    code: "$sectors.code",
                }
            },
            {
                $sort: {
                    code: 1,
                }
            },
            { 
                $project: {
                    sectors: 0,
                }
            }
        ]).allowDiskUse(true);;
        let keyToRemove =  ["scholarship_approved_student", "scholarship_approved_female", "apply_student","apply_female",
            "idpoor_approved_student", "idpoor_approved_female","info_approved_student","info_approved_female","idpoor_request_female",
            "idpoor_request_student",
        ]
        let jsonData = CommonUtil.JSONParse(data);
        let headerColumns: any[] = [];
        headerColumns.push({_id: 1, name: "ចំនួនស្នើសុំចុះឈ្មោះចូលរៀន"})
        headerColumns.push({_id: 2, name: "អនុម័តដោយគ្រឹះស្ថាន"})
        // headerColumns.push({_id: 3, name: "អនុម័តដោយអគ្គនាយកដ្ឋាន"})
        headerColumns.push({_id: 3, name: "សំណើទៅមូលនិធិជាតិជំនួយសង្គម"})
        headerColumns.push({ _id: 4, name: "អនុម័តដោយមូលនិធិជាតិជំនួយសង្គម" })
        for (var i = 0; i < jsonData.length; i++){
            for (var major = 0; major < jsonData[i].apply_majors.length; major++){
                let studentData: any[] = [];
                let sch = jsonData[i].apply_majors[major];
                studentData.push({ _id: 1, total_student: sch.apply_student, total_female: sch.apply_female });
                studentData.push({ _id: 2, total_student: sch.scholarship_approved_student, total_female: sch.scholarship_approved_female });
                studentData.push({ _id: 3, total_student: sch.idpoor_request_student, total_female: sch.idpoor_request_female });
                studentData.push({ _id: 4, total_student: sch.idpoor_approved_student, total_female: sch.idpoor_approved_female });
                jsonData[i].apply_majors[major].student_data = studentData;
                jsonData[i].apply_majors[major] = CommonUtil.removeKeys( jsonData[i].apply_majors[major], keyToRemove)
            }
            let studentData: any[] = [];
            let city = jsonData[i];
            studentData.push({ _id: 1, total_student: city.apply_student, total_female: city.apply_female });
            studentData.push({ _id: 2, total_student: city.scholarship_approved_student, total_female: city.scholarship_approved_female });
            studentData.push({ _id: 3, total_student: city.idpoor_request_student, total_female: city.idpoor_request_female });
            studentData.push({ _id: 4, total_student: city.idpoor_approved_student, total_female: city.idpoor_approved_female });
            jsonData[i].student_data = studentData;
            jsonData[i] = CommonUtil.removeKeys( jsonData[i], keyToRemove )
        }
        console.log(jsonData);
        return {
            start_date: startDate,
            start_end: endDate,
            header_columns: headerColumns,
            report_data: jsonData,
            total_data: this.totalValue(headerColumns, jsonData)
        }
        
    }
    async approvalStudentByCityProvince(req: any) {
        let { apply_majors, shifts, schools } = req.query;
        let querySchool: any = {
            status: EnumConstant.ACTIVE
        }
        if (schools) {
            querySchool._id = new ObjectId(schools);
        }
        if (req.body._user.schools) {
            querySchool._id = new ObjectId(req.body._user.schools);
        }
        let matchCourse: any = {}
        if (shifts || apply_majors) { 
            let queryCourse: any = {
                status: { $ne: EnumConstant.DELETE }
            };
            if (shifts) {
                queryCourse.shifts = shifts;
            }
            if (apply_majors) {
                queryCourse.apply_majors = new ObjectId(apply_majors);
            }
            let getCourses = await controllers.course.getManyNoCount({
                query: queryCourse,
                select: "_id"
            })
            matchCourse._id = { $in: getCourses.map(item => item._id) };
        }
    
        let [startDate, endDate] = CommonUtil.parseStartDateEndDate(req.query.start_date, req.query.end_date);
        let data = await models.school.aggregate([
            {
                $match: querySchool
            },
            {
                $lookup: {
                    from: 'skills',
                    let: { schoolId: "$_id" },
                    pipeline: [
                        {
                            $match: {
                                status: EnumConstant.ACTIVE,
                            }
                        },
                        {
                            $lookup: {
                                from: 'courses',
                                let: { id: "$_id" },
                                pipeline: [
                                    {
                                        $match: {
                                            $expr: {
                                                $and: [
                                                    { $eq: ["$apply_majors", "$$id"] },
                                                    { $eq: ["$schools", "$$schoolId"] },
                                                ]
                                            },
                                            // status: { $ne: EnumConstant.DELETE },
                                            ...matchCourse
                                        }
                                    },
                                    {
                                        $lookup: {
                                            from: 'students',
                                            let: { id: "$_id" },
                                            pipeline: [
                                                {
                                                    $match: {
                                                        $expr: { $eq: ["$courses", "$$id"] },
                                                    }
                                                },
                                                {
                                                    $lookup: {
                                                        from: 'request_timelines',
                                                        let: { id: "$_id" },
                                                        pipeline: [
                                                            {
                                                                $match: {
                                                                    $expr: { $eq: ["$students", "$$id"] },
                                                                    $or: [
                                                                        {
                                                                            status: { $in: [EnumConstant.REQUESTING, EnumConstant.ACTIVE] },
                                                                            timeline_type: EnumConstant.TimelineType.SCHOLARSHIP,
                                                                            resubmit: { $ne: EnumConstant.ACTIVE }
                                                                        },
                                                                        {
                                                                            status: EnumConstant.ACTIVE,
                                                                            timeline_type: EnumConstant.TimelineType.APPROVALINFO,
                                                                        },
                                                                        {
                                                                            status: EnumConstant.ACTIVE,
                                                                            timeline_type: EnumConstant.TimelineType.IDPOOR,
                                                                        },
                                                                        {
                                                                            status: EnumConstant.REQUESTING,
                                                                            timeline_type: EnumConstant.TimelineType.IDPOOR,
                                                                            resubmit: { $ne: EnumConstant.ACTIVE }
                                                                        },
                                                                    ],
                                                                    createdAt: { $gte: startDate, $lte: endDate },
                                                                }
                                                            },
                                                            {
                                                                $group: {
                                                                    _id: {
                                                                        status: "$status",
                                                                        timeline_type: "$timeline_type"
                                                                    }
                                                                }
                                                            },
                                                           
                                                        ],
                                                        as: "request_timelines"
                                                    },
                                                },
                                                { $unwind: { path: "$request_timelines" } },
                                            ],
                                            as: "students"
                                        }
                                    },
                                    { $unwind: { path: "$students" } },
                                ],
                                as: "courses"
                            },
                        },
                        { $unwind: { path: "$courses", preserveNullAndEmptyArrays: true } },
                        {
                            $group: {
                                _id: "$_id",
                                name: { $first: "$name" },
                                name_en: { $first: "$name_en" },
                                sectors: { $first: "$sectors" },
                                code: { $first: "$code" },
                                apply_student: {
                                    $sum: {
                                        $cond: [
                                            {
                                                $and: [
                                                    { $eq: ["$courses.students.request_timelines._id.timeline_type", EnumConstant.TimelineType.SCHOLARSHIP] },
                                                    { $eq: ["$courses.students.request_timelines._id.status", EnumConstant.REQUESTING] },
                                                ]
                                            },
                                            1,
                                            0
                                        ]
                                    }
                                },
                                apply_female: {
                                    $sum: {
                                        $cond: [
                                            {
                                                $and: [
                                                    { $eq: ["$courses.students.request_timelines._id.timeline_type", EnumConstant.TimelineType.SCHOLARSHIP] },
                                                    { $eq: ["$courses.students.request_timelines._id.status", EnumConstant.REQUESTING] },
                                                    { $eq: ["$courses.students.gender", EnumConstant.Gender.FEMALE] }
                                                ]
                                            },
                                            1,
                                            0
                                        ]
                                    }
                                },
                                scholarship_approved_student: {
                                    $sum: {
                                        $cond: [
                                            {
                                                $and: [
                                                    { $eq: ["$courses.students.request_timelines._id.timeline_type", EnumConstant.TimelineType.SCHOLARSHIP] },
                                                    { $eq: ["$courses.students.request_timelines._id.status", EnumConstant.ACTIVE] },
                                                ]
                                            },
                                            1,
                                            0
                                        ]
                                    }
                                },
                                scholarship_approved_female: {
                                    $sum: {
                                        $cond: [
                                            {
                                                $and: [
                                                    { $eq: ["$courses.students.request_timelines._id.timeline_type", EnumConstant.TimelineType.SCHOLARSHIP] },
                                                    { $eq: ["$courses.students.request_timelines._id.status", EnumConstant.ACTIVE] },
                                                    { $eq: ["$courses.students.gender", EnumConstant.Gender.FEMALE] }
                                                ]
                                            },
                                            1,
                                            0
                                        ]
                                    }
                                },
                                idpoor_request_student: {
                                    $sum: {
                                        $cond: [
                                            {
                                                $and: [
                                                    { $eq: ["$courses.students.request_timelines._id.timeline_type", EnumConstant.TimelineType.IDPOOR] },
                                                    { $eq: ["$courses.students.request_timelines._id.status", EnumConstant.REQUESTING] },
                                                ]
                                            },
                                            1,
                                            0
                                        ]
                                    }
                                },
                                idpoor_request_female: {
                                    $sum: {
                                        $cond: [
                                            {
                                                $and: [
                                                    { $eq: ["$courses.students.request_timelines._id.timeline_type", EnumConstant.TimelineType.IDPOOR] },
                                                    { $eq: ["$courses.students.request_timelines._id.status", EnumConstant.REQUESTING] },
                                                    { $eq: ["$courses.students.gender", EnumConstant.Gender.FEMALE] }
                                                ]
                                            },
                                            1,
                                            0
                                        ]
                                    }
                                },
                                idpoor_approved_student: {
                                    $sum: {
                                        $cond: [
                                            {
                                                $and: [
                                                    { $eq: ["$courses.students.request_timelines._id.timeline_type", EnumConstant.TimelineType.IDPOOR] },
                                                    { $eq: ["$courses.students.request_timelines._id.status", EnumConstant.ACTIVE] },
                                                ]
                                            },
                                            1,
                                            0
                                        ]
                                    }
                                },
                                idpoor_approved_female: {
                                    $sum: {
                                        $cond: [
                                            {
                                                $and: [
                                                    { $eq: ["$courses.students.request_timelines._id.timeline_type", EnumConstant.TimelineType.IDPOOR] },
                                                    { $eq: ["$courses.students.gender", EnumConstant.Gender.FEMALE] },
                                                    { $eq: ["$courses.students.request_timelines._id.status", EnumConstant.ACTIVE] },
                                                ]
                                            },
                                            1,
                                            0
                                        ]
                                    }
                                },
                                info_approved_student: {
                                    $sum: {
                                        $cond: [
                                            {
                                                $eq: ["$courses.students.request_timelines._id.timeline_type", EnumConstant.TimelineType.APPROVALINFO],
                                            },
                                            1,
                                            0
                                        ]
                                    }
                                },
                                info_approved_female: {
                                    $sum: {
                                        $cond: [
                                            {
                                                $and: [
                                                    { $eq: ["$courses.students.request_timelines._id.timeline_type", EnumConstant.TimelineType.APPROVALINFO] },
                                                    { $eq: ["$courses.students.gender", EnumConstant.Gender.FEMALE] }
                                                ]
                                            },
                                            1,
                                            0
                                        ]
                                    }
                                },
                            }
                        },
                        {
                            $addFields: {
                                apply_female: {
                                    $cond: [{ $ifNull: ["$apply_female", false] }, "$apply_female", 0]
                                },
                                apply_student: {
                                    $cond: [{ $ifNull: ["$apply_student", false] }, "$apply_student", 0]
                                },
                                idpoor_approved_female: {
                                    $cond: [{ $ifNull: ["$idpoor_approved_female", false] }, "$idpoor_approved_female", 0]
                                },
                                idpoor_approved_student: {
                                    $cond: [{ $ifNull: ["$idpoor_approved_student", false] }, "$idpoor_approved_student", 0]
                                },
                                idpoor_request_student: {
                                    $cond: [{ $ifNull: ["$idpoor_request_student", false] }, "$idpoor_request_student", 0]
                                },
                                idpoor_request_female: {
                                    $cond: [{ $ifNull: ["$idpoor_request_female", false] }, "$idpoor_request_female", 0]
                                },
                                info_approved_female: {
                                    $cond: [{ $ifNull: ["$info_approved_female", false] }, "$info_approved_female", 0]
                                },
                                info_approved_student: {
                                    $cond: [{ $ifNull: ["$info_approved_student", false] }, "$info_approved_student", 0]
                                },
                                scholarship_approved_female: {
                                    $cond: [{ $ifNull: ["$scholarship_approved_female", false] }, "$scholarship_approved_female", 0]
                                },
                                scholarship_approved_student: {
                                    $cond: [{ $ifNull: ["$scholarship_approved_student", false] }, "$scholarship_approved_student", 0]
                                },
                            }
                        },
                        {$sort: {code: 1}},
                        {
                            $group: {
                                _id: "$sectors",
                                apply_majors: { $push: "$$ROOT" },
                                apply_student: { $sum: "$apply_student" },
                                apply_female: { $sum: "$apply_female" },
                                scholarship_approved_student: { $sum: "$scholarship_approved_student" },
                                scholarship_approved_female: { $sum: "$scholarship_approved_female" },
                                idpoor_approved_student: { $sum: "$idpoor_approved_student" },
                                idpoor_approved_female: { $sum: "$idpoor_approved_female" },
                                info_approved_student: { $sum: "$info_approved_student" },
                                info_approved_female: { $sum: "$info_approved_female" },
                                idpoor_request_student: { $sum: "$idpoor_request_student" },
                                idpoor_request_female: { $sum: "$idpoor_request_female" },
                            
                            }
                        },
                        {
                            $lookup: {
                                from: 'sectors',
                                let: { id: "$_id" },
                                pipeline: [
                                    {
                                        $match: {
                                            $expr: { $eq: ["$_id", "$$id"] },
                                        }
                                    },
                                ],
                                as: "sectors"
                            }
                        },
                        {
                            $unwind: { path: "$sectors", preserveNullAndEmptyArrays: true }
                        },
                        {
                            $addFields: {
                                name: "$sectors.name",
                                name_en: "$sectors.name_en",
                                code: "$sectors.code",
                            }
                        },
                        {
                            $project: {
                                sectors: 0,
                            }
                        }
                    ],
                    as: "sectors"
                }
            },
            {
                $unwind: { path: "$sectors" },
            },
            {$sort: {"sectors.code": 1}},
            {
                $group: {
                    _id: "$_id",
                    address: {$first: "$address"},
                    name: {$first: "$name"},
                    name_en: {$first: "$name_en"},
                    profile_image: {$first: "$profile_image"},
                    id_code: {$first: "$id_code"},
                    code_en: {$first: "$code_en"},
                    sectors: { $push: "$sectors" },
                    apply_student: { $sum: "$sectors.apply_student" },
                    apply_female: { $sum: "$sectors.apply_female" },
                    scholarship_approved_student: { $sum: "$sectors.scholarship_approved_student" },
                    scholarship_approved_female: { $sum: "$sectors.scholarship_approved_female" },
                    idpoor_approved_student: { $sum: "$sectors.idpoor_approved_student" },
                    idpoor_approved_female: { $sum: "$sectors.idpoor_approved_female" },
                    info_approved_student: { $sum: "$sectors.info_approved_student" },
                    info_approved_female: { $sum: "$sectors.info_approved_female" },
                    idpoor_request_student: { $sum: "$sectors.idpoor_request_student" },
                    idpoor_request_female: { $sum: "$sectors.idpoor_request_female" },
                }
            },
            {
                $sort: {
                    id_code: 1,
                }
            },
            {
                $group: {
                    _id: "$address.city_provinces",
                    schools: { $push: "$$ROOT" },
                    apply_student: { $sum: "$apply_student" },
                    apply_female: { $sum: "$apply_female" },
                    scholarship_approved_student: { $sum: "$scholarship_approved_student" },
                    scholarship_approved_female: { $sum: "$scholarship_approved_female" },
                    idpoor_approved_student: { $sum: "$idpoor_approved_student" },
                    idpoor_approved_female: { $sum: "$idpoor_approved_female" },
                    info_approved_student: { $sum: "$info_approved_student" },
                    info_approved_female: { $sum: "$info_approved_female" },
                    idpoor_request_student: { $sum: "$idpoor_request_student" },
                    idpoor_request_female: { $sum: "$idpoor_request_female" },
                }
            },
            {
                $lookup: {
                    from: 'city_provinces',
                    let: { id: "$_id" },
                    pipeline: [
                        {
                            $match: {
                                $expr: { $eq: ["$_id", "$$id"] },
                            }
                        },
                    ],
                    as: "city_provinces"
                }
            },
            {
                $unwind: { path: "$city_provinces", preserveNullAndEmptyArrays: true }
            },
            {
                $sort: {
                    "city_provinces.order": 1,
                }
            },
            {
                $addFields: {
                    name: "$city_provinces.name",
                    name_en: "$city_provinces.name_en",
                }
            },
            {
                $project: {
                    city_provinces: 0,
                    "schools.address": 0
                }
            }
        ]).allowDiskUse(true);;
        let jsonData = CommonUtil.JSONParse(data);
        let headerColumns: any[] = [];
        headerColumns.push({ _id: 1, name: "ចំនួនស្នើសុំចុះឈ្មោះចូលរៀន" })
        headerColumns.push({ _id: 2, name: "អនុម័តដោយគ្រឹះស្ថាន" })
        headerColumns.push({ _id: 3, name: "សំណើទៅមូលនិធិជាតិជំនួយសង្គម" })
        headerColumns.push({ _id: 4, name: "អនុម័តដោយមូលនិធិជាតិជំនួយសង្គម" })
        let keyToRemove = ["scholarship_approved_student", "scholarship_approved_female", "apply_student", "apply_female", "idpoor_approved_student", "idpoor_approved_female", "info_approved_student", "info_approved_female"]
        for (var i = 0; i < jsonData.length; i++) {
            for (var school = 0; school < jsonData[i].schools.length; school++) {
                let sch = jsonData[i].schools[school];
                for (var sector = 0; sector < sch.sectors.length; sector++) {
                    let sec = sch.sectors[sector];
                    for (var major = 0; major < sec.apply_majors.length; major++) {
                        let studentData: any[] = [];
                        let maj = sec.apply_majors[major];
                        studentData.push({ _id: 1, total_student: maj.apply_student, total_female: maj.apply_female });
                        studentData.push({ _id: 2, total_student: maj.scholarship_approved_student, total_female: maj.scholarship_approved_female });
                        studentData.push({ _id: 3, total_student: maj.idpoor_request_student, total_female: maj.idpoor_request_female });
                        studentData.push({ _id: 4, total_student: maj.idpoor_approved_student, total_female: maj.idpoor_approved_female });
                        jsonData[i].schools[school].sectors[sector].apply_majors[major].student_data = studentData;
                        jsonData[i].schools[school].sectors[sector].apply_majors[major] = CommonUtil.removeKeys(
                            jsonData[i].schools[school].sectors[sector].apply_majors[major], keyToRemove
                        )
                    }
                    let studentData: any[] = [];
                    studentData.push({ _id: 1, total_student: sec.apply_student, total_female: sec.apply_female });
                    studentData.push({ _id: 2, total_student: sec.scholarship_approved_student, total_female: sec.scholarship_approved_female });
                    studentData.push({ _id: 3, total_student: sec.idpoor_request_student, total_female: sec.idpoor_request_female });
                    studentData.push({ _id: 4, total_student: sec.idpoor_approved_student, total_female: sec.idpoor_approved_female });
                    jsonData[i].schools[school].sectors[sector].student_data = studentData;
                    jsonData[i].schools[school].sectors[sector] = CommonUtil.removeKeys(
                        jsonData[i].schools[school].sectors[sector], keyToRemove
                    )
                }
                let studentData: any[] = [];
                studentData.push({ _id: 1, total_student: sch.apply_student, total_female: sch.apply_female });
                studentData.push({ _id: 2, total_student: sch.scholarship_approved_student, total_female: sch.scholarship_approved_female });
                studentData.push({ _id: 3, total_student: sch.idpoor_request_student, total_female: sch.idpoor_request_female });
                studentData.push({ _id: 4, total_student: sch.idpoor_approved_student, total_female: sch.idpoor_approved_female });
                jsonData[i].schools[school].student_data = studentData;
                jsonData[i].schools[school] = CommonUtil.removeKeys(
                    jsonData[i].schools[school], keyToRemove
                )
            }
            let studentData: any[] = [];
            let city = jsonData[i];
            studentData.push({ _id: 1, total_student: city.apply_student, total_female: city.apply_female });
            studentData.push({ _id: 2, total_student: city.scholarship_approved_student, total_female: city.scholarship_approved_female });
            studentData.push({ _id: 3, total_student: city.idpoor_request_student, total_female: city.idpoor_request_female });
            studentData.push({ _id: 4, total_student: city.idpoor_approved_student, total_female: city.idpoor_approved_female });
            jsonData[i].student_data = studentData;
            jsonData[i] = CommonUtil.removeKeys(
                jsonData[i], keyToRemove
            )
        }
        return {
            start_date: startDate,
            start_end: endDate,
            header_columns: headerColumns,
            report_data: jsonData,
            total_data: this.totalValue(headerColumns, jsonData)
        }
    }

    async studentApplyByCityProvince(req: any) {
        let { apply_majors, shifts, schools } = req.query;
        let querySchool: any = {
            status: EnumConstant.ACTIVE
        }
        if (schools) {
            querySchool._id = new ObjectId(schools);
        }
        if (req.body._user.schools) {
            querySchool._id = new ObjectId(req.body._user.schools);
        }
        let matchCourse: any = {}
        if (shifts || apply_majors) { 
            let queryCourse: any = {
                status: { $ne: EnumConstant.DELETE }
            };
            if (shifts) {
                queryCourse.shifts = shifts;
            }
            if (apply_majors) {
                queryCourse.apply_majors = new ObjectId(apply_majors);
            }
            let getCourses = await controllers.course.getManyNoCount({
                query: queryCourse,
                select: "_id"
            })
            matchCourse._id = { $in: getCourses.map(item => item._id) };
        }
        let [startDate, endDate] = CommonUtil.parseStartDateEndDate(req.query.start_date, req.query.end_date);
        let data = await models.school.aggregate([
            {
                $match: querySchool
            },
            {
                $lookup: {
                    from: 'skills',
                    let: { schoolId: "$_id" },
                    pipeline: [
                        {
                            $match: {
                                status: EnumConstant.ACTIVE,
                            }
                        },
                        {
                            $lookup: {
                                from: 'courses',
                                let: { id: "$_id" },
                                pipeline: [
                                    {
                                        $match: {
                                            $expr: {
                                                $and: [
                                                    { $eq: ["$apply_majors", "$$id"] },
                                                    { $eq: ["$schools", "$$schoolId"] },
                                                ]
                                            },
                                            status: { $ne: EnumConstant.DELETE },
                                            ...matchCourse
                                        }
                                    },
                                    {
                                        $lookup: {
                                            from: 'students',
                                            let: { id: "$_id" },
                                            pipeline: [
                                                {
                                                    $match: {
                                                        $expr: { $eq: ["$courses", "$$id"] },
                                                    }
                                                },
                                                {
                                                    $lookup: {
                                                        from: 'request_timelines',
                                                        let: { id: "$_id" },
                                                        pipeline: [
                                                            {
                                                                $match: {
                                                                    $expr: { $eq: ["$students", "$$id"] },
                                                                    status: EnumConstant.REQUESTING,
                                                                    timeline_type: EnumConstant.TimelineType.SCHOLARSHIP,
                                                                    createdAt: { $gte: startDate, $lte: endDate },
                                                                    resubmit: { $ne: EnumConstant.ACTIVE }
                                                                }
                                                            },
                                                            {
                                                                $limit: 1
                                                            }
                                                        ],
                                                        as: "request_timelines"
                                                    },
                                                },
                                                { $unwind: { path: "$request_timelines" } },
                                                {
                                                    $lookup: {
                                                        from: 'staffs',
                                                        let: { id: "$create_by" },
                                                        pipeline: [
                                                            {
                                                                $match: {
                                                                    $expr: { $eq: ["$_id", "$$id"] },
                                                                }
                                                            },
                                                            {
                                                                $project: {
                                                                    schools: 1,
                                                                    user_departments: 1,
                                                                }
                                                            }
                                                        ],
                                                        as: "create_by"
                                                    },
                                                },
                                                { $unwind: { path: "$create_by", preserveNullAndEmptyArrays: true } },
                                               
                                            ],
                                            as: "students"
                                        },
                                    },
                                    { $unwind: { path: "$students" } },
                            
                                ],
                                as: "courses"
                            },
                        },
                        { $unwind: { path: "$courses", preserveNullAndEmptyArrays: true } },   
                        {
                            $group: {
                                name: { $first: "$name" },
                                name_en: { $first: "$name_en" },
                                sectors: { $first: "$sectors" },
                                code: { $first: "$code" },
                                _id: {
                                    apply_majors: "$_id",
                                    user_departments: "$courses.students.create_by.user_departments",
                                    create_by_schools: "$courses.students.create_by.schools",
                                },
                                total_student: {
                                    $sum: {
                                        $cond: [
                                            { $ifNull: ["$courses.students", false] }, 1,0
                                        ]
                                    }
                                },
                                total_female: {
                                    $sum: {
                                        $cond: [
                                            { $eq: ["$courses.students.gender", EnumConstant.Gender.FEMALE] }, 1, 0
                                        ]
                                    }
                                },
                                self_apply_student: {
                                    $sum: {
                                        $cond: [
                                            { $ifNull: ["$courses.students", false] },
                                            {
                                                $cond: [
                                                    { $ifNull: ["$courses.students.create_by", false] },
                                                    0,
                                                    1
                                                ]
                                            }
                                            , 0
                                        ]
                                    }
                                },
                                self_apply_female: {
                                    $sum: {
                                        $cond: [
                                            { $ifNull: ["$courses.students.create_by", false] },
                                            0,
                                            {
                                                $cond: [
                                                    { $eq: ["$courses.students.gender", EnumConstant.Gender.FEMALE] }, 1, 0
                                                ],
                                            }
                                        ]
                                    }
                                },
                            }
                        },
                        {
                            $group: {
                                _id: "$_id.apply_majors",
                                name: { $first: "$name" },
                                name_en: { $first: "$name_en" },
                                sectors: { $first: "$sectors" },
                                code: { $first: "$code" },
                                total_student: { $sum: "$total_student" },
                                total_female: { $sum: "$total_female" },
                                self_apply_student: { $sum: "$self_apply_student" },
                                self_apply_female: { $sum: "$self_apply_female" },
                                user_departments: {
                                    $push: {
                                        $cond: [
                                            { $ifNull: ["$_id.user_departments", false] },
                                            {
                                                user_departments: "$_id.user_departments",
                                                total_student: "$total_student",
                                                total_female: "$total_female",
                                            },
                                            "$$REMOVE"
                                        ]
                                    }
                                },
                                school_apply_student: {
                                    $sum: {
                                        $cond: [{ $ifNull: ["$_id.create_by_schools", false] }, "$total_student", 0]
                                    }
                                },
                                school_apply_female: {
                                    $sum: {
                                        $cond: [
                                            { $ifNull: ["$_id.create_by_schools", false] },
                                            "$total_female",
                                            0,
                                        ]
                                    }
                                },
                            }
                        },
                        { $sort: { code: 1 } },
                        {
                            $group: {
                                _id: "$sectors",
                                apply_majors: { $push: "$$ROOT" },
                                total_student: { $sum: "$total_student" },
                                total_female: { $sum: "$total_female" },
                                self_apply_student: { $sum: "$self_apply_student" },
                                self_apply_female: { $sum: "$self_apply_female" },
                                school_apply_student: { $sum: "$school_apply_student" },
                                school_apply_female: { $sum: "$school_apply_female" },
                            }
                        },
                        {
                            $lookup: {
                                from: 'sectors',
                                let: { id: "$_id" },
                                pipeline: [
                                    {
                                        $match: {
                                            $expr: { $eq: ["$_id", "$$id"] },
                                        }
                                    },
                                ],
                                as: "sectors"
                            }
                        },
                        {
                            $unwind: { path: "$sectors", preserveNullAndEmptyArrays: true }
                        },
                        {
                            $addFields: {
                                name: "$sectors.name",
                                name_en: "$sectors.name_en",
                                code: "$sectors.code",
                            }
                        },
                        {
                            $project: {
                                sectors: 0,
                            }
                        }
                    ],
                    as: "sectors"
                },
            },
            {
                $unwind: { path: "$sectors" },
            },
            {
                $sort: {
                    "sectors.code": 1,
                }
            },
            {
                $group: {
                    _id: "$_id",
                    address: {$first: "$address"},
                    name: {$first: "$name"},
                    name_en: {$first: "$name_en"},
                    profile_image: {$first: "$profile_image"},
                    id_code: {$first: "$id_code"},
                    code_en: {$first: "$code_en"},
                    sectors: { $push: "$sectors" },
                    total_student: { $sum: "$sectors.total_student" },
                    total_female: { $sum: "$sectors.total_female" },
                    self_apply_student: { $sum: "$sectors.self_apply_student" },
                    self_apply_female: { $sum: "$sectors.self_apply_female" },
                    school_apply_student: { $sum: "$sectors.school_apply_student" },
                    school_apply_female: { $sum: "$sectors.school_apply_female" },
                }
            },   
            {
                $sort: {
                    id_code: 1,
                }
            },
            {
                $group: {
                    _id: "$address.city_provinces",
                    schools: { $push: "$$ROOT" },
                    total_student: { $sum: "$total_student" },
                    total_female: { $sum: "$total_female" },
                    self_apply_student: { $sum: "$self_apply_student" },
                    self_apply_female: { $sum: "$self_apply_female" },
                    school_apply_student: { $sum: "$school_apply_student" },
                    school_apply_female: { $sum: "$school_apply_female" },
                }
            },  
            {
                $lookup: {
                    from: 'city_provinces',
                    let: { id: "$_id" },
                    pipeline: [
                        {
                            $match: {
                                $expr: { $eq: ["$_id", "$$id"] },
                            }
                        },
                    ],
                    as: "city_provinces"
                }
            },
            {
                $unwind: { path: "$city_provinces", preserveNullAndEmptyArrays: true }
            },
            {
                $addFields: {
                    name: "$city_provinces.name",
                    name_en: "$city_provinces.name_en",
                }
            },
            {
                $sort: {
                    "city_provinces.order": 1,
                }
            },
            {
                $project: {
                    city_provinces: 0,
                    "schools.address": 0
                }
            }
        ]).allowDiskUse(true);;
        let groupDeparts: any = [];
        data.forEach(ds => {
            ds.schools.forEach((schs:any) => {
                schs.sectors.forEach((secs:any) => {
                    secs.apply_majors.forEach((maj: any) => { 
                        maj.user_departments.forEach((item: any) => {
                            groupDeparts.push(String(item.user_departments));
                        });
                    })
                })
            })
        });
        let getDeparts = await controllers.userDepartment.getManyNoCount({
            query: {
                _id: { $in: groupDeparts }, status: {$ne :EnumConstant.DELETE},
            },
            select: "name name_en"
        });
        let headerColumns: any = [];
        headerColumns.push({ _id: 1, "name": "ដោយខ្លួនឯង" });
        headerColumns.push({ _id: 2, "name": "គ្រឹស្ថានសិក្សា" });
        headerColumns.push(...getDeparts);
        headerColumns.push({ _id: 3, "name": "សរុបរួម" });
        let jsonData = CommonUtil.JSONParse(data);
        let keyToRemove = ["self_apply_student", "self_apply_female", "school_apply_student", "school_apply_female", "user_departments", "total_student", "total_female"]
        for (var i = 0; i < jsonData.length; i++) {
            let cityStudentData: any = []
            cityStudentData.push({ _id: 1, total_student: jsonData[i].self_apply_student, total_female: jsonData[i].self_apply_female });
            cityStudentData.push({ _id: 2, total_student: jsonData[i].school_apply_student, total_female: jsonData[i].school_apply_female });
            let cityDepartValue: any = CommonUtil.JSONParse(getDeparts);
            for (var dep = 0; dep < getDeparts.length; dep++){
                cityDepartValue[dep].total_student = 0
                cityDepartValue[dep].total_female = 0;
            }
            for (var schs = 0; schs < jsonData[i].schools.length; schs++) {
                let schoolItem: any = jsonData[i].schools[schs];
                let schoolStudentData: any = [];
                schoolStudentData.push({ _id: 1, total_student: schoolItem.self_apply_student, total_female: schoolItem.self_apply_female });
                schoolStudentData.push({ _id: 2, total_student: schoolItem.school_apply_student, total_female: schoolItem.school_apply_female });
                let schoolDepartValue: any = CommonUtil.JSONParse(getDeparts);
                for (var dep = 0; dep < getDeparts.length; dep++){
                    schoolDepartValue[dep].total_student = 0
                    schoolDepartValue[dep].total_female = 0;
                }
                for (var sec = 0; sec < schoolItem.sectors.length; sec++){
                    let sectorItem = schoolItem.sectors[sec]
                    let sectorStudentData: any = [];
                    let sectorDepartValue: any = CommonUtil.JSONParse(getDeparts);
                    for (var dep = 0; dep < getDeparts.length; dep++){
                        sectorDepartValue[dep].total_student = 0
                        sectorDepartValue[dep].total_female = 0;
                    }
                    sectorStudentData.push({ _id: 1, total_student: sectorItem.self_apply_student, total_female: sectorItem.self_apply_female });
                    sectorStudentData.push({ _id: 2, total_student: sectorItem.school_apply_student, total_female: sectorItem.school_apply_female });
                    for (var maj = 0; maj < sectorItem.apply_majors.length; maj++){
                        let majorItem = sectorItem.apply_majors[maj]
                        let majorStudentData: any = [];
                        majorStudentData.push({ _id: 1, total_student: majorItem.self_apply_student, total_female: majorItem.self_apply_female });
                        majorStudentData.push({ _id: 2, total_student: majorItem.school_apply_student, total_female: majorItem.school_apply_female });
                        for (var dep = 0; dep < getDeparts.length; dep++) {
                            let exist = false
                            let getDept = getDeparts[dep];
                            for (var depart = 0; depart < majorItem.user_departments.length; depart++) {
                                if (String(majorItem.user_departments[depart].user_departments) == String(getDept._id)) {
                                    majorStudentData.push({
                                        _id: majorItem.user_departments[depart].user_departments,
                                        total_student: majorItem.user_departments[depart].total_student,
                                        total_female: majorItem.user_departments[depart].total_female,
                                    });
                                    sectorDepartValue[dep].total_student += majorItem.user_departments[depart].total_student;
                                    sectorDepartValue[dep].total_female += majorItem.user_departments[depart].total_female;
                                    schoolDepartValue[dep].total_student += majorItem.user_departments[depart].total_student;
                                    schoolDepartValue[dep].total_female += majorItem.user_departments[depart].total_female;
                                    cityDepartValue[dep].total_student += majorItem.user_departments[depart].total_student;
                                    cityDepartValue[dep].total_female += majorItem.user_departments[depart].total_female;
                                    exist = true;
                                    break;
                                }
                            }
                            if (!exist) {
                                majorStudentData.push({
                                    _id: getDept._id,
                                    total_student: 0,
                                    total_female: 0,
                                });
                            }
                        }
                        majorStudentData.push({ _id: 3, total_student: majorItem.total_student, total_female: majorItem.total_female });
                        jsonData[i].schools[schs].sectors[sec].apply_majors[maj].student_data = majorStudentData;
                        jsonData[i].schools[schs].sectors[sec].apply_majors[maj] = CommonUtil.removeKeys(
                            jsonData[i].schools[schs].sectors[sec].apply_majors[maj], keyToRemove
                        )
                    }
                    sectorStudentData.push(...sectorDepartValue);
                    sectorStudentData.push({ _id: 3, total_student: sectorItem.total_student, total_female: sectorItem.total_female });
                    jsonData[i].schools[schs].sectors[sec].student_data = sectorStudentData;
                    jsonData[i].schools[schs].sectors[sec] = CommonUtil.removeKeys(
                        jsonData[i].schools[schs].sectors[sec], keyToRemove
                    )
                }
                schoolStudentData.push(...schoolDepartValue);
                schoolStudentData.push({ _id: 3, total_student: schoolItem.total_student, total_female: schoolItem.total_female });
                jsonData[i].schools[schs].student_data = schoolStudentData;
                jsonData[i].schools[schs] = CommonUtil.removeKeys(
                    jsonData[i].schools[schs], keyToRemove
                )
            }
            cityStudentData.push(...cityDepartValue);
            cityStudentData.push({ _id: 3, total_student: jsonData[i].total_student, total_female: jsonData[i].total_female });
            jsonData[i] = CommonUtil.removeKeys(
                jsonData[i], keyToRemove
            )
            jsonData[i].student_data = cityStudentData;
        }
        return {
            start_date: startDate,
            start_end: endDate,
            header_columns: headerColumns,
            report_data: jsonData,
            total_data: this.totalValue(headerColumns, jsonData)
        }
    }

    async studentStudyStatusBySchool(req: any) {
        let { apply_majors, shifts, schools, poor_status } = req.query;
        let querySchool: any = {
            status: EnumConstant.ACTIVE
        }
        if (schools) {
            querySchool._id = new ObjectId(schools);
        }
        if (req.body._user.schools) {
            querySchool._id = new ObjectId(req.body._user.schools);
        }
        let matchCourse: any = {}
        let matchCountCourse :any = {}
        if (shifts || apply_majors) { 
            let queryCourse: any = {
                status: { $ne: EnumConstant.DELETE }
            };
            if (shifts) {
                queryCourse.shifts = new ObjectId(shifts);
            }
            if (apply_majors) {
                queryCourse.apply_majors = new ObjectId(apply_majors);
            }
            let getCourses = await controllers.course.getManyNoCount({
                query: queryCourse,
                select: "_id"
            })
            matchCourse.courses = { $in: getCourses.map(item => item._id) };
            matchCountCourse._id = { $in: getCourses.map(item => item._id) };
        }
        let matchPoor: any = {};
        let queryTimelineType = EnumConstant.TimelineType.SCHOLARSHIP;
        if (poor_status) {
            matchPoor.poor_status = Number(poor_status);
            // queryTimelineType = EnumConstant.TimelineType.IDPOOR;
        }
        let endDate = new Date(req.query.end_date);
        let minToday = new Date(new Date(req.query.end_date).setHours(0, 0, 0));
        let maxToday = new Date(new Date(req.query.end_date).setHours(23, 59, 59));
        let data = await models.school.aggregate([
            {
                $match: querySchool
            },
            {
                $lookup: {
                    from: 'students',
                    let: { id: "$_id" },
                    pipeline: [
                        {
                            $match: {
                                $expr: { $eq: ["$schools", "$$id"] },
                                scholarship_status: { $in: [EnumConstant.ACTIVE, EnumConstant.QUIT] },
                                ...matchPoor,
                                ...matchCourse
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
                                ],
                                as: "courses"
                            }
                        },
                        { $unwind: { path: "$courses" } },
                        {
                            $lookup: {
                                from: 'request_timelines',
                                let: { id: "$_id" },
                                pipeline: [
                                    {
                                        $match: {
                                            $expr: {
                                                $eq: ["$students", "$$id"],
                                            },
                                            status: { $in: [EnumConstant.ACTIVE, EnumConstant.QUIT, EnumConstant.RESUME_STUDY] },
                                            timeline_type: queryTimelineType,
                                            createdAt: { $lte: endDate },
                                        }
                                    },
                                    { $sort: { createdAt: -1 } },
                                    { $limit: 1},
                                    {
                                        $project: {
                                            _id: {
                                                $cond: {
                                                    if: {
                                                        $eq: ["$status", EnumConstant.RESUME_STUDY] 
                                                    },
                                                    then: EnumConstant.ACTIVE,
                                                    else: "$status"
                                                }
                                            },
                                            createdAt: 1,
                                        }
                                    },
                                ],
                                as: "request_timelines"
                            },
                        },
                        { $unwind: { path:'$request_timelines' } },
                        {
                            $group: {
                                _id: null,
                                scholarship_approved_student: {
                                    $sum:1
                                },
                                scholarship_approved_student_female: {
                                    $sum: {
                                        $cond: [
                                            {
                                                $and: [
                                                    { $eq: ["$gender", EnumConstant.Gender.FEMALE] },
                                                ]
                                            },
                                            1,
                                            0
                                        ]
                                    }
                                },
                                quit_before_studying: {
                                    $sum: {
                                        $cond: [
                                            {
                                                $and: [
                                                    { $eq: ["$request_timelines._id", EnumConstant.QUIT] },
                                                    // { $eq: ["$scholarship_status", EnumConstant.QUIT] },
                                                    { $gt: ["$courses.course_start", "$request_timelines.createdAt"]}
                                                ]
                                            },
                                            1,
                                            0
                                        ]
                                    }
                                },
                                quit_before_studying_female: {
                                    $sum: {
                                        $cond: [
                                            {
                                                $and: [
                                                    { $eq: ["$request_timelines._id", EnumConstant.QUIT] },
                                                    // { $eq: ["$scholarship_status", EnumConstant.QUIT] },
                                                    { $gt: ["$courses.course_start", "$request_timelines.createdAt"]},
                                                    { $eq: ["$gender", EnumConstant.Gender.FEMALE] }
                                                ]
                                            },
                                            1,
                                            0
                                        ]
                                    }
                                },
                                quit_during_studying: {
                                    $sum: {
                                        $cond: [
                                            {
                                                $and: [
                                                    { $eq: ["$request_timelines._id", EnumConstant.QUIT] },
                                                    { $ne: ["$type_leavel_scholarships", controllers.typeLeaveScholarship.status.NOT_ENOUGH_DOCUMENT] },
                                                    { $lte: ["$courses.course_start", "$request_timelines.createdAt"]},
                                                    { $gte: ["$courses.course_end", "$request_timelines.createdAt"]},
                                                ]
                                            },
                                            1,
                                            0
                                        ]
                                    }
                                },
                                quit_during_studying_female: {
                                    $sum: {
                                        $cond: [
                                            {
                                                $and: [
                                                    { $eq: ["$request_timelines._id", EnumConstant.QUIT] },
                                                    { $ne: ["$type_leavel_scholarships", controllers.typeLeaveScholarship.status.NOT_ENOUGH_DOCUMENT] },
                                                    { $lt: ["$courses.course_start", "$request_timelines.createdAt"]},
                                                    { $gt: ["$courses.course_end", "$request_timelines.createdAt"]},
                                                    { $eq: ["$gender", EnumConstant.Gender.FEMALE] }
                                                ]
                                            },
                                            1,
                                            0
                                        ]
                                    }
                                },
                                quit_during_studying_not_enough_document: {
                                    $sum: {
                                        $cond: [
                                            {
                                                $and: [
                                                    { $eq: ["$request_timelines._id", EnumConstant.QUIT] },
                                                    { $eq: ["$type_leavel_scholarships", controllers.typeLeaveScholarship.status.NOT_ENOUGH_DOCUMENT] },
                                                    { $lte: ["$courses.course_start", "$request_timelines.createdAt"]},
                                                    { $gte: ["$courses.course_end", "$request_timelines.createdAt"]},
                                                ]
                                            },
                                            1,
                                            0
                                        ]
                                    }
                                },
                                quit_during_studying_not_enough_document_female: {
                                    $sum: {
                                        $cond: [
                                            {
                                                $and: [
                                                    { $eq: ["$request_timelines._id", EnumConstant.QUIT] },
                                                    { $eq: ["$type_leavel_scholarships", controllers.typeLeaveScholarship.status.NOT_ENOUGH_DOCUMENT] },
                                                    { $lt: ["$courses.course_start", "$request_timelines.createdAt"]},
                                                    { $gt: ["$courses.course_end", "$request_timelines.createdAt"]},
                                                    { $eq: ["$gender", EnumConstant.Gender.FEMALE] }
                                                ]
                                            },
                                            1,
                                            0
                                        ]
                                    }
                                },
                                waiting_studying: {
                                    $sum: {
                                        $cond: [
                                            {
                                                $and: [
                                                    { $eq: ["$request_timelines._id", EnumConstant.ACTIVE] },
                                                    { $gt: ["$courses.course_start", maxToday]},
                                                    // { $gt: ["$courses.course_end", maxToday]},
                                                ]
                                            },
                                            1,
                                            0
                                        ]
                                    }
                                },
                                waiting_studying_female: {
                                    $sum: {
                                        $cond: [
                                            {
                                                $and: [
                                                    { $eq: ["$request_timelines._id", EnumConstant.ACTIVE] },
                                                    { $gt: ["$courses.course_start", maxToday]},
                                                    // { $gt: ["$courses.course_end", maxToday]},
                                                    { $eq: ["$gender", EnumConstant.Gender.FEMALE] }
                                                ]
                                            },
                                            1,
                                            0
                                        ]
                                    }
                                },
                                new_waiting_studying: {
                                    $sum: {
                                        $cond: [
                                            {
                                                $and: [
                                                    { $eq: ["$request_timelines._id", EnumConstant.ACTIVE] },
                                                    { $gte: ["$request_timelines.createdAt", minToday]},
                                                    { $lte: ["$request_timelines.createdAt", maxToday] },
                                                    { $gt: ["$courses.course_start", maxToday]},
                                                    // { $gt: ["$courses.course_end", maxToday]},
                                                ]
                                            },
                                            1,
                                            0
                                        ]
                                    }
                                },
                                new_waiting_studying_female: {
                                    $sum: {
                                        $cond: [
                                            {
                                                $and: [
                                                    { $eq: ["$request_timelines._id", EnumConstant.ACTIVE] },
                                                    { $gte: ["$request_timelines.createdAt", minToday]},
                                                    { $lte: ["$request_timelines.createdAt", maxToday] },
                                                    { $gt: ["$courses.course_start", maxToday]},
                                                    // { $gt: ["$courses.course_end", maxToday]},
                                                    { $eq: ["$gender", EnumConstant.Gender.FEMALE] }
                                                ]
                                            },
                                            1,
                                            0
                                        ]
                                    }
                                },
                                studying: {
                                    $sum: {
                                        $cond: [
                                            {
                                                $and: [
                                                    { $eq: ["$request_timelines._id", EnumConstant.ACTIVE] },
                                                    // { $eq: ["$scholarship_status", EnumConstant.ACTIVE ] },
                                                    { $lt: ["$courses.course_start", maxToday]},
                                                    { $gt: ["$courses.course_end", minToday]},
                                                ]
                                            },
                                            1,
                                            0
                                        ]
                                    }
                                },
                                studying_female: {
                                    $sum: {
                                        $cond: [
                                            {
                                                $and: [
                                                    { $eq: ["$request_timelines._id", EnumConstant.ACTIVE] },
                                                    // { $eq: ["$scholarship_status", EnumConstant.ACTIVE ] },
                                                    { $lt: ["$courses.course_start", maxToday]},
                                                    { $gt: ["$courses.course_end", minToday]},
                                                    { $eq: ["$gender", EnumConstant.Gender.FEMALE] }
                                                ]
                                            },
                                            1,
                                            0
                                        ]
                                    }
                                },
                                id_poor_studying: {
                                    $sum: {
                                        $cond: [
                                            {
                                                $and: [
                                                    { $eq: ["$request_timelines._id", EnumConstant.ACTIVE] },
                                                    { $eq: ["$poor_status", EnumConstant.ACTIVE ] },
                                                    { $lt: ["$courses.course_start", maxToday]},
                                                    { $gt: ["$courses.course_end", minToday]},
                                                ]
                                            },
                                            1,
                                            0
                                        ]
                                    }
                                },
                                id_poor_studying_female: {
                                    $sum: {
                                        $cond: [
                                            {
                                                $and: [
                                                    { $eq: ["$request_timelines._id", EnumConstant.ACTIVE] },
                                                    { $eq: ["$poor_status", EnumConstant.ACTIVE ] },
                                                    { $lt: ["$courses.course_start", maxToday]},
                                                    { $gt: ["$courses.course_end", minToday]},
                                                    { $eq: ["$gender", EnumConstant.Gender.FEMALE] }
                                                ]
                                            },
                                            1,
                                            0
                                        ]
                                    }
                                },
                                finish_studying: {
                                    $sum: {
                                        $cond: [
                                            {
                                                $and: [
                                                    { $eq: ["$request_timelines._id", EnumConstant.ACTIVE] },
                                                    // { $eq: ["$scholarship_status", EnumConstant.ACTIVE] },
                                                    { $lt: ["$courses.course_end", minToday] },
                                                ]
                                            },
                                            1,
                                            0
                                        ]
                                    }
                                },
                                finish_studying_female: {
                                    $sum: {
                                        $cond: [
                                            {
                                                $and: [
                                                    { $eq: ["$request_timelines._id", EnumConstant.ACTIVE] },
                                                    // { $eq: ["$scholarship_status", EnumConstant.ACTIVE ] },
                                                    { $lt: ["$courses.course_end", minToday]},
                                                    { $eq: ["$gender", EnumConstant.Gender.FEMALE] }
                                                ]
                                            },
                                            1,
                                            0
                                        ]
                                    }
                                },
                                new_study: {
                                    $sum: {
                                        $cond: [
                                            {
                                                $or: [
                                                    {
                                                        $and: [
                                                            { $eq: ["$request_timelines._id", EnumConstant.ACTIVE] },
                                                            { $gte: ["$courses.course_start", minToday] },
                                                            { $lte: ["$courses.course_start", maxToday] },
                                                            // { $eq: ["$scholarship_status", EnumConstant.ACTIVE] },
                                                        ]
                                                    },
                                                    {
                                                        $and: [
                                                            { $eq: ["$request_timelines._id", EnumConstant.ACTIVE] },
                                                            // { $lte: ["$courses.course_start", maxToday]},
                                                            // { $gte: ["$courses.course_end", minToday] },
                                                            { $lt: ["$courses.course_start", maxToday]},
                                                            { $gt: ["$courses.course_end", minToday]},
                                                            // { $eq: ["$scholarship_status", EnumConstant.ACTIVE] },
                                                            { $gte: ["$request_timelines.createdAt", minToday]},
                                                            { $lte: ["$request_timelines.createdAt", maxToday] },
                                                        ]
                                                    },
                                                ]
                                            },
                                            1,
                                            0
                                        ]
                                    }
                                },
                                new_study_female: {
                                    $sum: {
                                        $cond: [
                                            {
                                                $or: [
                                                    {
                                                        $and: [
                                                            { $eq: ["$request_timelines._id", EnumConstant.ACTIVE] },
                                                            { $gt: ["$courses.course_start", minToday] },
                                                            { $lt: ["$courses.course_start", maxToday] },
                                                            // { $eq: ["$scholarship_status", EnumConstant.ACTIVE] },
                                                            { $eq: ["$gender", EnumConstant.Gender.FEMALE] },
                                                        ]
                                                    },
                                                    {
                                                        $and: [
                                                            // { $lte: ["$courses.course_start", maxToday]},
                                                            // { $gte: ["$courses.course_end", minToday]},
                                                            // { $eq: ["$scholarship_status", EnumConstant.ACTIVE] },
                                                            { $lt: ["$courses.course_start", maxToday]},
                                                            { $gt: ["$courses.course_end", minToday]},
                                                            { $gte: ["$request_timelines.createdAt", minToday]},
                                                            { $lte: ["$request_timelines.createdAt", maxToday] },
                                                            { $eq: ["$request_timelines._id", EnumConstant.ACTIVE] },
                                                            { $eq: ["$gender", EnumConstant.Gender.FEMALE] },
                                                        ]
                                                    },
                                                ]
                                            },
                                            1,
                                            0
                                        ]
                                    }
                                },
                                
                            }
                        },
                        {
                            $addFields: {
                                internship: 0,
                                internship_female: 0,
                                employment: 0,
                                employment_female: 0,
                            }
                        },
                        {
                            $project: {_id: 0}
                        }
                    ],
                    as: "student_data"
                }
            },          
            { $unwind: { path: "$student_data" } }, //preserveNullAndEmptyArrays: true 
            {
                $replaceRoot: {
                    newRoot: {
                        $mergeObjects: [
                            {
                                _id: "$_id",
                                name: "$name",
                                name_en: "$name_en",
                                address: "$address",
                                profile_image: "$profile_image",
                                code: "$code",
                                id_code: "$id_code",
                            },
                            "$student_data"
                        ]
                    }
                }
            },
            {
                $addFields: {
                    scholarship_approved_student: {
                        $cond: [{ $ifNull: ["$scholarship_approved_student", false] }, "$scholarship_approved_student", 0]
                    },
                    scholarship_approved_student_female: {
                        $cond: [{ $ifNull: ["$scholarship_approved_student_female", false] }, "$scholarship_approved_student_female", 0]
                    },
                    quit_before_studying: {
                        $cond: [{ $ifNull: ["$quit_before_studying", false] }, "$quit_before_studying", 0]
                    },
                    quit_before_studying_female: {
                        $cond: [{ $ifNull: ["$quit_before_studying_female", false] }, "$quit_before_studying_female", 0]
                    },
                    quit_during_studying: {
                        $cond: [{ $ifNull: ["$quit_during_studying", false] }, "$quit_during_studying", 0]
                    },
                    quit_during_studying_female: {
                        $cond: [{ $ifNull: ["$quit_during_studying_female", false] }, "$quit_during_studying_female", 0]
                    },
                    waiting_studying: {
                        $cond: [{ $ifNull: ["$waiting_studying", false] }, "$waiting_studying", 0]
                    },
                    waiting_studying_female: {
                        $cond: [{ $ifNull: ["$waiting_studying_female", false] }, "$waiting_studying_female", 0]
                    },
                    new_waiting_studying: {
                        $cond: [{ $ifNull: ["$new_waiting_studying", false] }, "$new_waiting_studying", 0]
                    },
                    new_waiting_studying_female: {
                        $cond: [{ $ifNull: ["$new_waiting_studying_female", false] }, "$new_waiting_studying_female", 0]
                    },
                    studying: {
                        $cond: [{ $ifNull: ["$studying", false] }, "$studying", 0]
                    },
                    studying_female: {
                        $cond: [{ $ifNull: ["$studying_female", false] }, "$studying_female", 0]
                    },
                    id_poor_studying: {
                        $cond: [{ $ifNull: ["$id_poor_studying", false] }, "$id_poor_studying", 0]
                    },
                    id_poor_studying_female: {
                        $cond: [{ $ifNull: ["$id_poor_studying_female", false] }, "$id_poor_studying_female", 0]
                    },
                    finish_studying: {
                        $cond: [{ $ifNull: ["$finish_studying", false] }, "$finish_studying", 0]
                    },
                    finish_studying_female: {
                        $cond: [{ $ifNull: ["$finish_studying_female", false] }, "$finish_studying_female", 0]
                    },
                    internship: {
                        $cond: [{ $ifNull: ["$internship", false] }, "$internship", 0]
                    },
                    internship_female: {
                        $cond: [{ $ifNull: ["$internship_female", false] }, "$internship_female", 0]
                    },
                    employment: {
                        $cond: [{ $ifNull: ["$employment", false] }, "$employment", 0]
                    },
                    employment_female: {
                        $cond: [{ $ifNull: ["$employment_female", false] }, "$employment_female", 0]
                    },
                    new_study: {
                        $cond: [{ $ifNull: ["$new_study", false] }, "$new_study", 0]
                    },
                    new_study_female: {
                        $cond: [{ $ifNull: ["$new_study_female", false] }, "$new_study_female", 0]
                    },
                    quit_during_studying_not_enough_document: {
                        $cond: [{ $ifNull: ["$quit_during_studying_not_enough_document", false] }, "$quit_during_studying_not_enough_document", 0]
                    },
                    quit_during_studying_not_enough_document_female: {
                        $cond: [{ $ifNull: ["$quit_during_studying_not_enough_document_female", false] }, "$quit_during_studying_not_enough_document_female", 0]
                    },
                }
            },
            {
                $sort: {
                    id_code: 1,
                }
            },
           {
                $lookup: {
                    from: 'courses',
                    let: { id: "$_id" },
                    pipeline: [
                        {
                            $match: {
                                $expr: { $eq: ["$schools", "$$id"] },
                                status: {$ne : EnumConstant.DELETE},
                                ...matchCountCourse
                            }
                        },
                        {
                            $group: {
                                _id: null,
                                course_new: {
                                    $sum: {
                                        $cond: [
                                            {
                                                $and: [
                                                    { $gte: ["$course_start", minToday] },
                                                    { $lte: ["$course_start", maxToday] },
                                                ]
                                            },
                                            1,
                                            0
                                        ]
                                    }
                                },
                                course_studying: {
                                    $sum: {
                                        $cond: [
                                            {
                                                $and: [
                                                    { $lt: ["$course_start", maxToday]},
                                                    { $gt: ["$course_end", minToday]},
                                                ]
                                            },
                                            1,
                                            0
                                        ]
                                    }
                                },
                            }
                        }
                    ],
                    as: "courses"
                }
            },
            {
               $unwind: {path: "$courses", preserveNullAndEmptyArrays: true}
            },
            {
                $addFields: {
                    course_new: {
                        $cond: [{ $ifNull: ["$courses.course_new", false] }, "$courses.course_new", 0]
                    },
                    course_studying: {
                        $cond: [{ $ifNull: ["$courses.course_studying", false] }, "$courses.course_studying", 0]
                    },
                }
            },
            {
                $project: {
                    courses: 0
                }
            },
            {
                $group: {
                    _id: "$address.city_provinces",
                    schools: { $push: "$$ROOT" },
                    scholarship_approved_student: {$sum: "$scholarship_approved_student"},
                    scholarship_approved_student_female: {$sum: "$scholarship_approved_student_female"},
                    quit_before_studying: {$sum: "$quit_before_studying"},
                    quit_before_studying_female: {$sum: "$quit_before_studying_female"},
                    quit_during_studying: {$sum: "$quit_during_studying"},
                    quit_during_studying_female: {$sum: "$quit_during_studying_female"},
                    waiting_studying: {$sum: "$waiting_studying"},
                    waiting_studying_female: {$sum: "$waiting_studying_female"},
                    new_waiting_studying: {$sum: "$new_waiting_studying"},
                    new_waiting_studying_female: {$sum: "$new_waiting_studying_female"},
                    studying: {$sum: "$studying"},
                    studying_female: {$sum: "$studying_female"},
                    id_poor_studying: {$sum: "$id_poor_studying"},
                    id_poor_studying_female: {$sum: "$id_poor_studying_female"},
                    finish_studying: {$sum: "$finish_studying"},
                    finish_studying_female: {$sum: "$finish_studying_female"},
                    internship: {$sum: "$internship"},
                    internship_female: {$sum: "$internship_female"},
                    employment: {$sum: "$employment"},
                    employment_female: {$sum: "$employment_female"},
                    new_study: {$sum: "$new_study"},
                    new_study_female: {$sum: "$new_study_female"},
                    course_new: {$sum: "$course_new"},
                    course_studying: {$sum: "$course_studying"},
                    quit_during_studying_not_enough_document: {$sum: "$quit_during_studying_not_enough_document"},
                    quit_during_studying_not_enough_document_female: {$sum: "$quit_during_studying_not_enough_document_female"},
                }
            },
            {
                $lookup: {
                    from: 'city_provinces',
                    let: { id: "$_id" },
                    pipeline: [
                        {
                            $match: {
                                $expr: { $eq: ["$_id", "$$id"] },
                            }
                        },
                    ],
                    as: "city_provinces"
                }
            },
            {
                $unwind: { path: "$city_provinces", preserveNullAndEmptyArrays: true }
            },
            { 
                $addFields: {
                    name: "$city_provinces.name",
                    name_en: "$city_provinces.name_en",
                }
            },
            {
                $sort: {
                    "city_provinces.order": 1,
                }
            },
            { 
                $project: {
                    city_provinces: 0,
                    "schools.address": 0
                }
            }
        ]).allowDiskUse(true);;
        // return data; 
        let jsonData = CommonUtil.JSONParse(data);
        let keyToRemove = ["scholarship_approved_student", "scholarship_approved_student_female", "waiting_studying", "waiting_studying_female",
            "quit_before_studying", "quit_before_studying_female", "studying", "studying_female", "quit_during_studying",
            "quit_during_studying_female", "internship", "internship_female", "finish_studying", "finish_studying_female",
            "employment", "employment_female", "new_study", "new_study_female", "course_new", "course_studying",
            "new_waiting_studying_female", "waiting_studying_female", "id_poor_studying", "id_poor_studying_female",
            "quit_during_studying_not_enough_document_female","quit_during_studying_not_enough_document"];
        let headerColumns: any[] = [];
        let headerTitle: any = ["ចំនួនសិស្សអនុម័ត", "រងចាំចូលរៀនថ្មីថ្ងៃនេះ", "រងចាំចូលរៀន", "បោះបង់មុនចូលរៀន", "ចូលរៀនថ្មីថ្ងៃនេះ", "កំពុងរៀន", "បោះបង់ពេលរៀន","បោះបង់ពេលរៀនខ្វះឯកសារ", "កម្មសិក្សា",
            "បានបញ្ចប់ការសិក្សា", "ទទួលបានការងារ", "វគ្គសិក្សា"] 
        for (var i = 0; i < headerTitle.length; i++){
            headerColumns.push({_id: (i + 1), name: headerTitle[i]})
        }
        for (var i = 0; i < jsonData.length; i++){
            for (var school = 0; school < jsonData[i].schools.length; school++){
                let studentData: any[] = [];
                let sch = jsonData[i].schools[school];
                studentData.push({ _id: 1, total_student: sch.scholarship_approved_student, total_female: sch.scholarship_approved_student_female });
                studentData.push({ _id: 2, total_student: sch.new_waiting_studying, total_female: sch.new_waiting_studying_female });
                studentData.push({ _id: 3, total_student: sch.waiting_studying, total_female: sch.waiting_studying_female });
                studentData.push({ _id: 4, total_student: sch.quit_before_studying, total_female: sch.quit_before_studying_female });
                studentData.push({ _id: 5, total_student: sch.new_study, total_female: sch.new_study_female });
                studentData.push({ _id: 6, total_student: sch.studying, total_female: sch.studying_female });
                // studentData.push({ _id: 7, total_student: sch.id_poor_studying, total_female: sch.id_poor_studying_female });
                studentData.push({ _id: 7, total_student: sch.quit_during_studying, total_female: sch.quit_during_studying_female });
                studentData.push({ _id: 8, total_student: sch.quit_during_studying_not_enough_document, total_female: sch.quit_during_studying_not_enough_document_female });
                studentData.push({ _id: 9, total_student: sch.internship, total_female: sch.internship_female });
                studentData.push({ _id: 10, total_student: sch.finish_studying, total_female: sch.finish_studying_female });
                studentData.push({ _id: 11, total_student: sch.employment, total_female: sch.employment_female });
                studentData.push({ _id: 12, total_student: sch.course_studying, total_female: sch.course_new });
                jsonData[i].schools[school].student_data = studentData;
                jsonData[i].schools[school] = CommonUtil.removeKeys(
                    jsonData[i].schools[school], keyToRemove )
            }
            let studentData: any[] = [];
            let city = jsonData[i];
            studentData.push({ _id: 1, total_student: city.scholarship_approved_student, total_female: city.scholarship_approved_student_female });
            studentData.push({ _id: 2, total_student: city.new_waiting_studying, total_female: city.new_waiting_studying_female });
            studentData.push({ _id: 3, total_student: city.waiting_studying, total_female: city.waiting_studying_female });
            studentData.push({ _id: 4, total_student: city.quit_before_studying, total_female: city.quit_before_studying_female });
            studentData.push({ _id: 5, total_student: city.new_study, total_female: city.new_study_female });
            studentData.push({ _id: 6, total_student: city.studying, total_female: city.studying_female });
            // studentData.push({ _id: 7, total_student: city.id_poor_studying, total_female: city.id_poor_studying_female });
            studentData.push({ _id: 7, total_student: city.quit_during_studying, total_female: city.quit_during_studying_female });
            studentData.push({ _id: 8, total_student: city.quit_during_studying_not_enough_document, total_female: city.quit_during_studying_not_enough_document_female });
            studentData.push({ _id: 9, total_student: city.internship, total_female: city.internship_female });
            studentData.push({ _id: 10, total_student: city.finish_studying, total_female: city.finish_studying_female });
            studentData.push({ _id: 11, total_student: city.employment, total_female: city.employment_female });
            studentData.push({ _id: 12, total_student: city.course_studying, total_female: city.course_new });
            jsonData[i].student_data = studentData;
            jsonData[i] = CommonUtil.removeKeys( jsonData[i], keyToRemove )
        }
        return {
            // start_date: startDate,
            // start_end: endDate,
            header_columns: headerColumns,
            report_data: jsonData,
            total_data: this.totalValue(headerColumns, jsonData)
        }
    }

    async studentStudyStatusByMajor(req: any) {
        let { apply_majors, shifts, schools, poor_status } = req.query;
        if (req.body._user.schools) {
            schools = req.body._user.schools;
        }
        let queryMajor: any = {
            status: EnumConstant.ACTIVE
        }
        if (apply_majors) {
            queryMajor._id = new ObjectId(apply_majors);
        }
        let queryTimelineType = EnumConstant.TimelineType.SCHOLARSHIP;
        let matchPoor: any = {};
        if (poor_status) {
            matchPoor.poor_status = Number(poor_status);
            // queryTimelineType = EnumConstant.TimelineType.IDPOOR
        }
        let matchCourse: any = {}
        if (shifts || schools) { 
            let queryCourse: any = {
                status: { $ne: EnumConstant.DELETE }
            };
            if (shifts) {
                queryCourse.shifts = shifts;
            }
            if (schools) {
                queryCourse.schools = new ObjectId(schools);
            }
            let getCourses = await controllers.course.getManyNoCount({
                query: queryCourse,
                select: "_id"
            })
            matchCourse._id = { $in: getCourses.map(item => item._id) };
        }
        let minToday = new Date(new Date(req.query.end_date).setHours(0, 0, 0));
        let maxToday = new Date(new Date(req.query.end_date).setHours(23, 59, 59));
        let endDate = new Date(req.query.end_date);
        // let [startDate, endDate] = CommonUtil.parseStartDateEndDate(req.query.start_date, req.query.end_date);
        let data = await models.applyMajor.aggregate([
            {
                $match: queryMajor
            },
            {
                $lookup: {
                    from: 'courses',
                    let: { id: "$_id" },
                    pipeline: [
                        {
                            $match: {
                                $expr: { $eq: ["$apply_majors", "$$id"] },
                                status: { $ne: EnumConstant.DELETE },
                                ...matchCourse,
                            }
                        },
                        {
                            $lookup: {
                                from: 'students',
                                let: { id: "$_id" },
                                pipeline: [
                                    {
                                        $match: {
                                            $expr: { $eq: ["$courses", "$$id"] },
                                            scholarship_status: { $in: [EnumConstant.ACTIVE, EnumConstant.QUIT] },
                                            ...matchPoor,
                                        }
                                    },
                                    {
                                        $lookup: {
                                            from: 'request_timelines',
                                            let: { id: "$_id", scholarshipStatus: "$scholarship_status" },
                                            pipeline: [
                                                {
                                                    $match: {
                                                        $expr: {
                                                            $eq: ["$students", "$$id"]
                                                        },
                                                        status: { $in: [EnumConstant.ACTIVE, EnumConstant.QUIT, EnumConstant.RESUME_STUDY] },
                                                        timeline_type: queryTimelineType,
                                                        // resubmit: { $ne: EnumConstant.ACTIVE },
                                                        createdAt: {$lte: endDate },
                                                    }
                                                },
                                                { $sort: { createdAt: -1 } },
                                                { $limit: 1 },
                                                {
                                                    $project: {
                                                        _id: {
                                                            $cond: {
                                                                if: {
                                                                    $eq: ["$status", EnumConstant.RESUME_STUDY] 
                                                                },
                                                                then: EnumConstant.ACTIVE,
                                                                else: "$status"
                                                            }
                                                        },
                                                        createdAt: 1,
                                                    }
                                                },
                                            ],
                                            as: "request_timelines"
                                        },
                                    },
                                    { $unwind: { path: "$request_timelines" } },
                                ],
                                as: "students"
                            }
                        },
                        { $unwind: { path: "$students" } },
                    ],
                    as: "courses"
                }
            },
            { $unwind: { path: "$courses", preserveNullAndEmptyArrays: true } },   
            {
                $group: {
                    _id: "$_id",
                    name: { $first: "$name" },
                    name_en: { $first: "$name_en" },
                    sectors: { $first: "$sectors" },
                    code: { $first: "$code" },
                    scholarship_approved_student: {
                        $sum: {
                            $cond: [{ $ifNull: ["$courses.students", false] }, 1, 0]
                        }
                    },
                    scholarship_approved_student_female: {
                        $sum: {
                            $cond: [
                                {
                                    $and: [
                                        { $eq: ["$courses.students.gender", EnumConstant.Gender.FEMALE] }
                                    ]
                                },
                                1,
                                0
                            ]
                        }
                    },
                    quit_before_studying: {
                        $sum: {
                            $cond: [
                                {
                                    $and: [
                                        { $eq: ["$courses.students.request_timelines._id", EnumConstant.QUIT] },
                                        { $gt: ["$courses.course_start", "$courses.students.request_timelines.createdAt"]}
                                    ]
                                },
                                1,
                                0
                            ]
                        }
                    },
                    quit_before_studying_female: {
                        $sum: {
                            $cond: [
                                {
                                    $and: [
                                        { $eq: ["$courses.students.request_timelines._id", EnumConstant.QUIT] },
                                        { $gt: ["$courses.course_start", "$courses.students.request_timelines.createdAt"]},
                                        { $eq: ["$courses.students.gender", EnumConstant.Gender.FEMALE] }
                                    ]
                                },
                                1,
                                0
                            ]
                        }
                    },
                    quit_during_studying: {
                        $sum: {
                            $cond: [
                                {
                                    $and: [
                                        { $ne: ["$courses.students.type_leavel_scholarships", controllers.typeLeaveScholarship.status.NOT_ENOUGH_DOCUMENT] },
                                        { $eq: ["$courses.students.request_timelines._id", EnumConstant.QUIT] },
                                        { $lte: ["$courses.course_start", "$courses.students.request_timelines.createdAt"] },
                                        { $gte: ["$courses.course_end", "$courses.students.request_timelines.createdAt"]}
                                    ]
                                },
                                1,
                                0
                            ]
                        }
                    },
                    quit_during_studying_female: {
                        $sum: {
                            $cond: [
                                {
                                    $and: [
                                        { $ne: ["$courses.students.type_leavel_scholarships", controllers.typeLeaveScholarship.status.NOT_ENOUGH_DOCUMENT] },
                                        { $eq: ["$courses.students.request_timelines._id", EnumConstant.QUIT] },
                                        { $lt: ["$courses.course_start", "$courses.students.request_timelines.createdAt"]},
                                        { $gt: ["$courses.course_end", "$courses.students.request_timelines.createdAt"]},
                                        { $eq: ["$courses.students.gender", EnumConstant.Gender.FEMALE] }
                                    ]
                                },
                                1,
                                0
                            ]
                        }
                    },
                    quit_during_studying_not_enough_document: {
                        $sum: {
                            $cond: [
                                {
                                    $and: [
                                        { $eq: ["$courses.students.type_leavel_scholarships", controllers.typeLeaveScholarship.status.NOT_ENOUGH_DOCUMENT] },
                                        { $eq: ["$courses.students.request_timelines._id", EnumConstant.QUIT] },
                                        { $lte: ["$courses.course_start", "$courses.students.request_timelines.createdAt"] },
                                        { $gte: ["$courses.course_end", "$courses.students.request_timelines.createdAt"]}
                                    ]
                                },
                                1,
                                0
                            ]
                        }
                    },
                    quit_during_studying_not_enough_document_female: {
                        $sum: {
                            $cond: [
                                {
                                    $and: [
                                        { $eq: ["$courses.students.type_leavel_scholarships", controllers.typeLeaveScholarship.status.NOT_ENOUGH_DOCUMENT] },
                                        { $eq: ["$courses.students.request_timelines._id", EnumConstant.QUIT] },
                                        { $lt: ["$courses.course_start", "$courses.students.request_timelines.createdAt"]},
                                        { $gt: ["$courses.course_end", "$courses.students.request_timelines.createdAt"]},
                                        { $eq: ["$courses.students.gender", EnumConstant.Gender.FEMALE] }
                                    ]
                                },
                                1,
                                0
                            ]
                        }
                    },
                    waiting_studying: {
                        $sum: {
                            $cond: [
                                {
                                    $and: [
                                        { $eq: ["$courses.students.request_timelines._id", EnumConstant.ACTIVE] },
                                        { $gt: ["$courses.course_start", maxToday]},
                                        // { $gt: ["$courses.course_end", maxToday]},
                                    ]
                                },
                                1,
                                0
                            ]
                        }
                    },
                    waiting_studying_female: {
                        $sum: {
                            $cond: [
                                {
                                    $and: [
                                        { $eq: ["$courses.students.request_timelines._id", EnumConstant.ACTIVE] },
                                        { $gt: ["$courses.course_start", maxToday] },
                                        // { $gt: ["$courses.course_end", maxToday]},
                                        { $eq: ["$courses.students.gender", EnumConstant.Gender.FEMALE] }
                                    ]
                                },
                                1,
                                0
                            ]
                        }
                    },
                    new_waiting_studying: {
                        $sum: {
                            $cond: [
                                {
                                    $and: [
                                        { $eq: ["$courses.students.request_timelines._id", EnumConstant.ACTIVE] },
                                        { $gt: ["$courses.course_start", maxToday] },
                                        // { $gt: ["$courses.course_end", maxToday] },
                                        { $gte: ["$courses.students.request_timelines.createdAt", minToday]},
                                        { $lte: ["$courses.students.request_timelines.createdAt", maxToday] }
                                    ]
                                },
                                1,
                                0
                            ]
                        }
                    },
                    new_waiting_studying_female: {
                        $sum: {
                            $cond: [
                                {
                                    $and: [
                                        { $eq: ["$courses.students.request_timelines._id", EnumConstant.ACTIVE] },
                                        { $gt: ["$courses.course_start", maxToday]},
                                        // { $gt: ["$courses.course_end", maxToday]},
                                        { $eq: ["$courses.students.gender", EnumConstant.Gender.FEMALE] },
                                        { $gte: ["$courses.students.request_timelines.createdAt", minToday]},
                                        { $lte: ["$courses.students.request_timelines.createdAt", maxToday] }
                                    ]
                                },
                                1,
                                0
                            ]
                        }
                    },
                    studying: {
                        $sum: {
                            $cond: [
                                {
                                    $and: [
                                        { $eq: ["$courses.students.request_timelines._id", EnumConstant.ACTIVE ] },
                                        { $lt: ["$courses.course_start", maxToday]},
                                        { $gt: ["$courses.course_end", minToday]},
                                    ]
                                },
                                1,
                                0
                            ]
                        }
                    },
                    studying_female: {
                        $sum: {
                            $cond: [
                                {
                                    $and: [
                                        { $eq: ["$courses.students.request_timelines._id", EnumConstant.ACTIVE] },
                                        { $lt: ["$courses.course_start", maxToday]},
                                        { $gt: ["$courses.course_end", minToday]},
                                        { $eq: ["$courses.students.gender", EnumConstant.Gender.FEMALE] },
                                    ]
                                },
                                1,
                                0
                            ]
                        }
                    },
                    id_poor_studying: {
                        $sum: {
                            $cond: [
                                {
                                    $and: [
                                        { $eq: ["$courses.students.request_timelines._id", EnumConstant.ACTIVE ] },
                                        { $eq: ["$courses.students.poor_status", EnumConstant.ACTIVE ] },
                                        { $lt: ["$courses.course_start", maxToday]},
                                        { $gt: ["$courses.course_end", minToday]},
                                    ]
                                },
                                1,
                                0
                            ]
                        }
                    },
                    id_poor_studying_female: {
                        $sum: {
                            $cond: [
                                {
                                    $and: [
                                        { $eq: ["$courses.students.request_timelines._id", EnumConstant.ACTIVE] },
                                        { $eq: ["$courses.students.poor_status", EnumConstant.ACTIVE ] },
                                        { $lt: ["$courses.course_start", maxToday]},
                                        { $gt: ["$courses.course_end", minToday]},
                                        { $eq: ["$courses.students.gender", EnumConstant.Gender.FEMALE] },
                                    ]
                                },
                                1,
                                0
                            ]
                        }
                    },
                    finish_studying: {
                        $sum: {
                            $cond: [
                                {
                                    $and: [
                                        { $eq: ["$courses.students.request_timelines._id",EnumConstant.ACTIVE ] },
                                        { $lt: ["$courses.course_end", minToday] },
                                    ]
                                },
                                1,
                                0
                            ]
                        }
                    },
                    finish_studying_female: {
                        $sum: {
                            $cond: [
                                {
                                    $and: [
                                        { $eq: ["$courses.students.request_timelines._id", EnumConstant.ACTIVE ] },
                                        { $lt: ["$courses.course_end", minToday]},
                                        { $eq: ["$courses.students.gender", EnumConstant.Gender.FEMALE] }
                                    ]
                                },
                                1,
                                0
                            ]
                        }
                    },
                    new_study: {
                        $sum: {
                            $cond: [
                                {
                                    $or: [
                                        {
                                            $and: [
                                                { $gt: ["$courses.course_start", minToday] },
                                                { $lt: ["$courses.course_start", maxToday] },
                                                { $eq: ["$courses.students.request_timelines._id", EnumConstant.ACTIVE] }
                                            ]
                                        },
                                        {
                                            $and: [
                                                { $lt: ["$courses.course_start", maxToday] },
                                                { $gt: ["$courses.course_end", minToday] },
                                                { $eq: ["$courses.students.request_timelines._id", EnumConstant.ACTIVE] },
                                                { $gte: ["$courses.students.request_timelines.createdAt", minToday]},
                                                { $lte: ["$courses.students.request_timelines.createdAt", maxToday] }
                                            ]
                                        },
                                    ]
                                },
                                1,
                                0
                            ]
                        }
                    },
                    new_study_female: {
                        $sum: {
                            $cond: [
                                {
                                    $or: [
                                        {
                                            $and: [
                                                { $gt: ["$courses.course_start", minToday] },
                                                { $lt: ["$courses.course_start", maxToday] },
                                                { $eq: ["$courses.students.request_timelines._id", EnumConstant.ACTIVE] },
                                                { $eq: ["$courses.students.gender", EnumConstant.Gender.FEMALE] },
                                            ]
                                        },
                                        {
                                            $and: [
                                                { $lt: ["$courses.course_start", maxToday] },
                                                { $gt: ["$courses.course_end", minToday] },
                                                { $eq: ["$courses.students.request_timelines._id", EnumConstant.ACTIVE] },
                                                { $gte: ["$courses.students.request_timelines.createdAt", minToday]},
                                                { $lte: ["$courses.students.request_timelines.createdAt", maxToday] },
                                                { $eq: ["$courses.students.gender", EnumConstant.Gender.FEMALE] },
                                            ]
                                        },
                                    ]
                                },
                                1,
                                0
                            ]
                        }
                    },
                }
            },
            {
                $addFields: {
                    internship: 0,
                    internship_female: 0,
                    employment: 0,
                    employment_female: 0,
                    // finish_studying: 0, //finish studying need to input by school, can't comare with timeline, since it doesn't have record
                    // finish_studying_female: 0, 
                }
            },
            {
                $lookup: {
                    from: 'courses',
                    let: { id: "$_id" },
                    pipeline: [
                        {
                            $match: {
                                $expr: { $eq: ["$apply_majors", "$$id"] },
                                status: {$ne : EnumConstant.DELETE},
                                ...matchCourse
                            }
                        },
                        {
                            $group: {
                                _id: null,
                                course_new: {
                                    $sum: {
                                        $cond: [
                                            {
                                                $and: [
                                                    { $gte: ["$course_start", minToday] },
                                                    { $lte: ["$course_start", maxToday] },
                                                ]
                                            },
                                            1,
                                            0
                                        ]
                                    }
                                },
                                course_studying: {
                                    $sum: {
                                        $cond: [
                                            {
                                                $and: [
                                                    { $lt: ["$course_start", maxToday]},
                                                    { $gt: ["$course_end", minToday]},
                                                ]
                                            },
                                            1,
                                            0
                                        ]
                                    }
                                },
                            }
                        }
                    ],
                    as: "courses"
                }
            },
            {
               $unwind: {path: "$courses", preserveNullAndEmptyArrays: true}
            },
            {
                $addFields: {
                    course_new: {
                        $cond: [{ $ifNull: ["$courses.course_new", false] }, "$courses.course_new", 0]
                    },
                    course_studying: {
                        $cond: [{ $ifNull: ["$courses.course_studying", false] }, "$courses.course_studying", 0]
                    },
                }
            },
            {$sort: {code: 1}},
            {
                $group: {
                    _id: "$sectors",
                    apply_majors: { $push: "$$ROOT" },
                    scholarship_approved_student: {$sum: "$scholarship_approved_student"},
                    scholarship_approved_student_female: {$sum: "$scholarship_approved_student_female"},
                    quit_before_studying: {$sum: "$quit_before_studying"},
                    quit_before_studying_female: {$sum: "$quit_before_studying_female"},
                    quit_during_studying: {$sum: "$quit_during_studying"},
                    quit_during_studying_female: {$sum: "$quit_during_studying_female"},
                    quit_during_studying_not_enough_document: {$sum: "$quit_during_studying_not_enough_document"},
                    quit_during_studying_not_enough_document_female: {$sum: "$quit_during_studying_not_enough_document_female"},
                    waiting_studying: {$sum: "$waiting_studying"},
                    waiting_studying_female: {$sum: "$waiting_studying_female"},
                    new_waiting_studying: {$sum: "$new_waiting_studying"},
                    new_waiting_studying_female: {$sum: "$new_waiting_studying_female"},
                    studying: {$sum: "$studying"},
                    studying_female: {$sum: "$studying_female"},
                    id_poor_studying: {$sum: "$id_poor_studying"},
                    id_poor_studying_female: {$sum: "$id_poor_studying_female"},
                    finish_studying: {$sum: "$finish_studying"},
                    finish_studying_female: {$sum: "$finish_studying_female"},
                    internship: {$sum: "$internship"},
                    internship_female: {$sum: "$internship_female"},
                    employment: {$sum: "$employment"},
                    employment_female: {$sum: "$employment_female"},
                    new_study: {$sum: "$new_study"},
                    new_study_female: { $sum: "$new_study_female" },
                    course_new: {$sum: "$course_new"},
                    course_studying: {$sum: "$course_studying"},
                }
            },
            {
                $lookup: {
                    from: 'sectors',
                    let: { id: "$_id" },
                    pipeline: [
                        {
                            $match: {
                                $expr: { $eq: ["$_id", "$$id"] },
                            }
                        },
                    ],
                    as: "sectors"
                }
            },
            {
                $unwind: { path: "$sectors", preserveNullAndEmptyArrays: true }
            },
            { 
                $addFields: {
                    name: "$sectors.name",
                    name_en: "$sectors.name_en",
                    code: "$sectors.code",
                }
            },
            {
                $sort: {
                    code: 1,
                }
            },
            { 
                $project: {
                    sectors: 0,
                }
            }
        ]).allowDiskUse(true);;
        // return data;
        let jsonData = CommonUtil.JSONParse(data);
        let keyToRemove = ["quit_during_studying_not_enough_document", "quit_during_studying_not_enough_document_female",
            "id_poor_studying", "id_poor_studying_female", "course_new", "course_studying", "scholarship_approved_student", "scholarship_approved_student_female", "waiting_studying", "waiting_studying_female", "quit_before_studying",
            "quit_before_studying_female", "studying", "studying_female", "quit_during_studying", "quit_during_studying_female", "internship", "internship_female",
            "finish_studying", "finish_studying_female", "employment", "employment_female", "new_study_female","new_study", "new_waiting_studying", "new_waiting_studying_female" ];
        let headerColumns: any[] = [];
        let headerTitle: any = ["ចំនួនសិស្សអនុម័ត", "រងចាំចូលរៀនថ្មីថ្ងៃនេះ", "រងចាំចូលរៀន", "បោះបង់មុនចូលរៀន", "ចូលរៀនថ្មីថ្ងៃនេះ", "កំពុងរៀន", "បោះបង់ពេលរៀន", "បោះបង់ពេលរៀនខ្វះឯកសារ","កម្មសិក្សា",
            "បានបញ្ចប់ការសិក្សា", "ទទួលបានការងារ", "វគ្គសិក្សា"]  //,"កំពុងរៀន(មានប័ណ្ណ)"
        for (var i = 0; i < headerTitle.length; i++){
            headerColumns.push({_id: (i + 1), name: headerTitle[i]})
        }
        for (var i = 0; i < jsonData.length; i++){
            for (var major = 0; major < jsonData[i].apply_majors.length; major++){
                let studentData: any[] = [];
                let sch = jsonData[i].apply_majors[major];
                studentData.push({ _id: 1, total_student: sch.scholarship_approved_student, total_female: sch.scholarship_approved_student_female });
                studentData.push({ _id: 2, total_student: sch.new_waiting_studying, total_female: sch.new_waiting_studying_female });
                studentData.push({ _id: 3, total_student: sch.waiting_studying, total_female: sch.waiting_studying_female });
                studentData.push({ _id: 4, total_student: sch.quit_before_studying, total_female: sch.quit_before_studying_female });
                studentData.push({ _id: 5, total_student: sch.new_study, total_female: sch.new_study_female });
                studentData.push({ _id: 6, total_student: sch.studying, total_female: sch.studying_female });
                // studentData.push({ _id: 7, total_student: sch.id_poor_studying, total_female: sch.id_poor_studying_female });
                studentData.push({ _id: 7, total_student: sch.quit_during_studying, total_female: sch.quit_during_studying_female });
                studentData.push({ _id: 8, total_student: sch.quit_during_studying_not_enough_document, total_female: sch.quit_during_studying_not_enough_document_female });
                studentData.push({ _id: 9, total_student: sch.internship, total_female: sch.internship_female });
                studentData.push({ _id: 10, total_student: sch.finish_studying, total_female: sch.finish_studying_female });
                studentData.push({ _id: 11, total_student: sch.employment, total_female: sch.employment_female });
                studentData.push({ _id: 12, total_student: sch.course_studying, total_female: sch.course_new });
                jsonData[i].apply_majors[major].student_data = studentData;
                jsonData[i].apply_majors[major] = CommonUtil.removeKeys( jsonData[i].apply_majors[major], keyToRemove)
            }
            let studentData: any[] = [];
            let city = jsonData[i];
            studentData.push({ _id: 1, total_student: city.scholarship_approved_student, total_female: city.scholarship_approved_student_female });
            studentData.push({ _id: 2, total_student: city.new_waiting_studying, total_female: city.new_waiting_studying_female });
            studentData.push({ _id: 3, total_student: city.waiting_studying, total_female: city.waiting_studying_female });
            studentData.push({ _id: 4, total_student: city.quit_before_studying, total_female: city.quit_before_studying_female });
            studentData.push({ _id: 5, total_student: city.new_study, total_female: city.new_study_female });
            studentData.push({ _id: 6, total_student: city.studying, total_female: city.studying_female });
            // studentData.push({ _id: 7, total_student: city.id_poor_studying, total_female: city.id_poor_studying_female });
            studentData.push({ _id: 7, total_student: city.quit_during_studying, total_female: city.quit_during_studying_female });
            studentData.push({ _id: 8, total_student: city.quit_during_studying_not_enough_document, total_female: city.quit_during_studying_not_enough_document_female });
            studentData.push({ _id: 9, total_student: city.internship, total_female: city.internship_female });
            studentData.push({ _id: 10, total_student: city.finish_studying, total_female: city.finish_studying_female });
            studentData.push({ _id: 11, total_student: city.employment, total_female: city.employment_female });
            studentData.push({ _id: 12, total_student: city.course_studying, total_female: city.course_new });
            jsonData[i].student_data = studentData;
            jsonData[i] = CommonUtil.removeKeys( jsonData[i], keyToRemove )
        }
        return {
            // start_date: startDate,
            // start_end: endDate,
            header_columns: headerColumns,
            report_data: jsonData,
            total_data: this.totalValue(headerColumns, jsonData)
        }
    }

}