import { Model } from 'mongoose';
import { IStudents, ObjectId, createSession } from '../models';
import EnumConstant, { Role } from '../utils/enumConstant';
import AbstractController from './abstract_controller';
import controllers from '.';
import CommonUtil from '../utils/common';

export default class Controller extends AbstractController<IStudents> {
    model: Model<IStudents>;
    constructor(model: Model<IStudents>) {
        super(model);
        this.model = model;
    }

    selectData = "createdAt first_name last_name first_name_en last_name_en profile_image phone_number gender poor_id courses poor_status scholarship_status poor_member_uuid attachment_files";
    projectData = {
        _id: 1, first_name: 1, last_name: 1, first_name_en: 1, last_name_en: 1, status: 1, phone_number: 1,
        gender: 1, profile_image: 1, schools: 1, poor_id: 1, poor_status: 1, courses: 1, apply_majors: 1, scholarship_status: 1,
        poor_member_uuid: 1, attachment_files: 1, createdAt: 1, type_poverty_status: 1,
    }


    async applyRequest(req: any, isLms :boolean = false) {
        if (req.body.last_name) req.body.last_name = req.body.last_name.trim();
        if (req.body.first_name) req.body.first_name = req.body.first_name.trim();
        delete req.body.poor_file_datas
        let { first_name, last_name, poor_id, courses, gender, username, password, date_of_birth } = req.body;
        if (poor_id) {
            let getPoorResponse = await CommonUtil.idPoorAPI(poor_id);
            if (!getPoorResponse) {
                this.throwHttpError("លេខបណ្ណសមធម៌មិនត្រឹមត្រូវ");
            }
            let getPoorData = this.mapPoorData({
                data: getPoorResponse,
                poorId: poor_id,
                dob: date_of_birth,
                gender: gender,
                last_name: last_name,
                first_name: first_name,
            });
            let getStudent = await this.model.findOne({
                first_name: first_name,
                last_name: last_name,
                poor_id: poor_id,
                scholarship_status: { $nin: [EnumConstant.DELETE, EnumConstant.REJECTED, EnumConstant.QUIT] },
                gender: gender,
            }).collation({ locale: "en", strength: 2 })
            if (getStudent) {
                this.throwHttpError("បេក្ខជននេះធ្លាប់បានចុះឈ្មោះរួចហើយ!")
            }
            req.body.type_poverty_status = getPoorData.poverty_status;
        } else {
            // if (isLms) {
            //     this.throwHttpError("សូមបញ្ចូលលេខបណ្ណសមធម៌ ឬបណ្ណងាយរងហានិភ័យ");
            // }
            let getStudent = await this.model.findOne({
                first_name: first_name,
                last_name: last_name,
                date_of_birth: new Date(date_of_birth),
                scholarship_status: { $nin: [EnumConstant.DELETE, EnumConstant.REJECTED, EnumConstant.QUIT] },
                gender: gender,
            }).collation({ locale: "en", strength: 2 })
            if (getStudent) {
                this.throwHttpError("បេក្ខជននេះធ្លាប់បានចុះឈ្មោះរួចហើយ!")
            }
        }
        let [getCourse] = await Promise.all([
            controllers.course.getOne({
                query: {
                    _id: courses,
                    registation_start: { $lte: new Date() },
                    registation_end: { $gte: new Date() },
                }
            })
        ])
        controllers.course.checkThrowNotFound(getCourse);
        if (username) {
            if (!password) {
                this.throwHttpError("password is required")
            }
            await controllers.user.validateUsername(username);
        }
        let studentData = new this.model(req.body);
        studentData.courses = getCourse._id;
        studentData.schools = getCourse.schools;
        studentData.scholarship_status = EnumConstant.REQUESTING;
        if (req.body._user) {
            studentData.create_by = req.body._user._id;
        }
        if (req.body.files.poor_file_datas) {
            let promise = await controllers.fileData.uploadFile({
                bucketName: EnumConstant.BucketName.STUDENT,
                file: req.body.files.poor_file_datas,
                students: studentData._id
            })
            studentData.poor_file_datas = promise._id;
        }
        if (req.body.files.attachment_files) {
            let fileIds: any[] = [];
            if (Array.isArray(req.body.files.attachment_files)) {
                for (var i = 0; i < req.body.files.attachment_files.length; i++) {
                    let promise = await controllers.fileData.uploadFile({
                        bucketName: EnumConstant.BucketName.STUDENT,
                        file: req.body.files.attachment_files[i],
                        students: studentData._id
                    })
                    fileIds.push(promise._id);
                }
            } else {
                let promise = await controllers.fileData.uploadFile({
                    bucketName: EnumConstant.BucketName.STUDENT,
                    file: req.body.files.attachment_files,
                    students: studentData._id
                })
                fileIds.push(promise._id);
            }
            studentData.attachment_files = fileIds;
        }
        let timeline = new this.models.requestTimeline({
            students: studentData._id,
            status: EnumConstant.REQUESTING,
            timeline_type: EnumConstant.TimelineType.SCHOLARSHIP,
        });
        return createSession(async (session) => {
            if (username) {
                let user = await controllers.user.createUserModel({ roles: Role.student._id, username, password });
                studentData.users = user._id;
                user.students = studentData._id;
                await this.models.user.create([user], { session: session });
            }
            await this.models.requestTimeline.create([timeline], { session: session });
            return (await this.model.create([studentData], { session: session }))[0];
        });
    }
    async updateApplyRequest(req: any) {
        if (req.body.last_name) req.body.last_name = req.body.last_name.trim();
        if (req.body.first_name) req.body.first_name = req.body.first_name.trim();
        delete req.body.poor_file_datas
        let { poor_id, courses, last_name, first_name, gender, date_of_birth } = req.body;
        let [getStudent, getCourse] = await Promise.all([
            this.getOne({
                query: {
                    _id: req.body._user._id,
                    scholarship_status: EnumConstant.REQUESTING
                }
            }),
            controllers.course.getOne({
                query: {
                    _id: courses,
                    registation_start: { $lte: new Date() },
                    registation_end: { $gte: new Date() },
                }
            }),
        ])
        controllers.course.checkThrowNotFound(getCourse);
        this.checkThrowNotFound(getStudent)
        if (poor_id) {
            let getPoorResponse = await CommonUtil.idPoorAPI(poor_id);
            if (!getPoorResponse) {
                this.throwHttpError("លេខបណ្ណសមធម៌មិនត្រឹមត្រូវ");
            }
            let getPoorData = this.mapPoorData({
                data: getPoorResponse,
                poorId: poor_id,
                dob: date_of_birth,
                gender: gender,
                last_name: last_name,
                first_name: first_name,
            })
            let getAppliedStudent = await this.model.findOne({
                _id: { $ne: req.body._user._id },
                first_name: first_name,
                last_name: last_name,
                poor_id: poor_id,
                scholarship_status: { $nin: [EnumConstant.DELETE, EnumConstant.REJECTED, EnumConstant.QUIT] },
                gender: gender,
            }).collation({ locale: "en", strength: 2 })
            if (getAppliedStudent) {
                this.throwHttpError("បេក្ខជននេះធ្លាប់បានចុះឈ្មោះរួចហើយ!")
            }
            req.body.type_poverty_status = getPoorData.poverty_status;
        } else {
            this.throwHttpError("សូមបញ្ចូលលេខបណ្ណសមធម៌ ឬបណ្ណងាយរងហានិភ័យ");
            let getAppliedStudent = await this.model.findOne({
                _id: { $ne: req.body._user._id },
                first_name: first_name,
                last_name: last_name,
                date_of_birth: new Date(date_of_birth),
                scholarship_status: { $nin: [EnumConstant.DELETE, EnumConstant.REJECTED, EnumConstant.QUIT] },
                gender: gender,
            }).collation({ locale: "en", strength: 2 })
            if (getAppliedStudent) {
                this.throwHttpError("បេក្ខជននេះធ្លាប់បានចុះឈ្មោះរួចហើយ!")
            }
        }
        let studentData = new this.model(req.body);
        studentData.courses = getCourse._id;
        studentData.schools = getCourse.schools;
        studentData.scholarship_status = EnumConstant.REQUESTING;
        studentData.attachment_files = getStudent.attachment_files;
        let json = CommonUtil.removeKeys(studentData, ["_id", "status", "poor_status", "poor_file_datas", "scholarship_status"])
        if (req.body.remove_poor_file_datas == "true") {
            json.poor_file_datas = "";
            controllers.fileData.deleteFileFromGrid(getStudent.poor_file_datas);
        } else if (req.body.files.poor_file_datas) {
            let promise = await controllers.fileData.uploadFile({
                bucketName: EnumConstant.BucketName.STUDENT,
                file: req.body.files.poor_file_datas,
                students: studentData._id
            })
            json.poor_file_datas = promise._id;
        }
        if (req.body.remove_attachment_files) {
            let removes: any[] = CommonUtil.requestObjectToArray(req.body.remove_attachment_files, { field: "remove_attachment_files" });
            for (var i = 0; i < removes.length; i++) {
                controllers.fileData.deleteFileFromGrid(removes[i]);
            }
            json.attachment_files = studentData.attachment_files.filter(function (val) {
                return removes.indexOf(String(val)) == -1;
            });
        }
        if (req.body.files.attachment_files) {
            if (Array.isArray(req.body.files.attachment_files)) {
                for (var i = 0; i < req.body.files.attachment_files.length; i++) {
                    if (req.body.files.attachment_files[i]) {
                        let promise = await controllers.fileData.uploadFile({
                            bucketName: EnumConstant.BucketName.STUDENT,
                            file: req.body.files.attachment_files[i],
                            students: studentData._id
                        })
                        json.attachment_files.push(promise._id);
                    }
                }
            } else {
                let promise = await controllers.fileData.uploadFile({
                    bucketName: EnumConstant.BucketName.STUDENT,
                    file: req.body.files.attachment_files,
                    students: studentData._id
                })
                json.attachment_files.push(promise._id);
            }
        }
        return await this.model.findOneAndUpdate({ _id: getStudent._id }, { $set: json }, { new: true });
    }

    async update(req: any) {
        let { first_name, last_name, date_of_birth, gender, id_card_number, poor_id } = req.body
        let _id = req.params._id;
        let [getStudent, getExistName] = await Promise.all([
            controllers.student.getOne({
                query: {
                    _id: req.params._id,
                    status: { $ne: EnumConstant.DELETE },
                }
            }),
            this.model.findOne({
                _id: { $ne: _id },
                first_name: first_name,
                last_name: last_name,
                date_of_birth: new Date(date_of_birth),
                scholarship_status:EnumConstant.ACTIVE,
                gender: gender,
            }).populate([
                {
                    path: "courses", select: "code apply_majors", populate: [
                        { path: "apply_majors", select: "name name_en" }
                    ]
                }
            ]).collation({ locale: "en", strength: 2 })
        ])
        controllers.student.checkThrowNotFound(getStudent);
        if (getExistName) {
            this.throwHttpError("ឈ្មោះបេក្ខជនស្ទួននិងបេក្ខជននៅវគ្ក៖ " + getExistName.courses.apply_majors.name + " | " + getExistName.courses.code)
        }
        if (id_card_number) {
            let getExistIdCard = await this.getOne({
                query: {
                    _id: { $ne: getStudent._id },
                    id_card_number: id_card_number,
                    scholarship_status:EnumConstant.ACTIVE,
                },
                populates: [
                    {
                        path: "courses", select: "code apply_majors", populate: [
                            { path: "apply_majors", select: "name name_en" }
                        ]
                    }
                ]
            })
            if (getExistIdCard) {
                this.throwHttpError("លេខអត្តសញ្ញាណប័ណ្ឌស្ទួននិងបេក្ខជននៅវគ្ក៖ " + getExistIdCard.courses.apply_majors.name + " | " + getExistIdCard.courses.code)
            }
        }
        
        await this.validation(req)
        if (poor_id) {
            if (poor_id != getStudent.poor_id) {
                let getPoorResponse = await CommonUtil.idPoorAPI(poor_id);
                if (!getPoorResponse) {
                    this.throwHttpError("លេខបណ្ណសមធម៌មិនត្រឹមត្រូវ");
                }
                if (!getStudent.poor_id) {
                    this.throwHttpError("បេក្ខជនមិនទាន់មានបណ្ណសមធម៌ មិនអាចកែប្រែបានទេ!");
                }
                let getPoorData = this.mapPoorData({
                    data: getPoorResponse,
                    poorId: poor_id,
                    dob: date_of_birth,
                    gender: gender,
                    last_name: last_name,
                    first_name: first_name,
                })
                let getAppliedStudent = await this.model.findOne({
                    _id: { $ne: req.body._user._id },
                    first_name: first_name,
                    last_name: last_name,
                    poor_id: poor_id,
                    scholarship_status: { $nin: [EnumConstant.DELETE, EnumConstant.REJECTED, EnumConstant.QUIT] },
                    gender: gender,
                }).collation({ locale: "en", strength: 2 })
                if (getAppliedStudent) {
                    this.throwHttpError("បេក្ខជននេះធ្លាប់បានចុះឈ្មោះរួចហើយ!")
                }
                req.body.type_poverty_status = getPoorData.poverty_status;
            }
        }
        let objs = new this.model(req.body);
        let student = CommonUtil.removeKeys(objs, ["_id", "schools", "courses", "apply_majors", "status", "profile_image", "attachment_files"]);
        student.attachment_files = getStudent.attachment_files;
        if (String(req.body.remove_profile_image) == "true") {
            student.profile_image = ""
            // controllers.fileData.deleteFileFromGrid(getStudent.profile_image) //Can't delete: certificate need profile, 
        } else if (req.body.files.profile_image) {
            let promise = await controllers.fileData.uploadProfileWithResize(EnumConstant.BucketName.STUDENT, req.body.files.profile_image, req.body._user._id) as any;
            if (promise) {
                student.profile_image = promise._id;
            }
            // controllers.fileData.deleteFileFromGrid(getStudent.profile_image)//Can't delete: certificate need profile, 
        }
        if (req.body.remove_attachment_files) {
            let removes: any[] = CommonUtil.requestObjectToArray(req.body.remove_attachment_files, { field: "remove_attachment_files" });
            for (var i = 0; i < removes.length; i++) {
                controllers.fileData.deleteFileFromGrid(removes[i]);
            }
            student.attachment_files = getStudent.attachment_files.filter(function (val) {
                return removes.indexOf(String(val)) == -1;
            });
        }
        if (req.body.files.attachment_files) {
            if (Array.isArray(req.body.files.attachment_files)) {
                for (var i = 0; i < req.body.files.attachment_files.length; i++) {
                    if (req.body.files.attachment_files[i]) {
                        let promise = await controllers.fileData.uploadFile({
                            bucketName: EnumConstant.BucketName.STUDENT,
                            file: req.body.files.attachment_files[i],
                            students: getStudent._id
                        })
                        student.attachment_files.push(promise._id);
                    }
                }
            } else {
                let promise = await controllers.fileData.uploadFile({
                    bucketName: EnumConstant.BucketName.STUDENT,
                    file: req.body.files.attachment_files,
                    students: getStudent._id
                })
                student.attachment_files.push(promise._id);
            }
        }
        return await this.model.findOneAndUpdate({ _id: getStudent._id }, { $set: student }, { new: true });
    }
    private async validation(req: any) {
        let unset: any = {}
        let validateFields: any[] = [];
        CommonUtil.validateImage(req.body.files.profile_image);
        if (req.body.date_of_birth > new Date) {
            controllers.student.throwHttpError("invalid date_of_birth");
        }
        if (req.body.address) {
            validateFields.push(controllers.address.validateAddress(req.body.address));
            req.body.address = CommonUtil.ParseValidJson(req.body.address);
        }
        if (req.body.place_of_birth) {
            validateFields.push(controllers.address.validateAddress(req.body.place_of_birth));
            req.body.place_of_birth = CommonUtil.ParseValidJson(req.body.place_of_birth);
        }
        if (req.body.parents) {
            req.body.parents = CommonUtil.ParseValidJson(req.body.parents);
        }
        if (req.body.type_scholarship_documents) {
            let typeSchoarship = await controllers.typeScholarshipDocument.getOne({
                query: {
                    _id: req.body.type_scholarship_documents
                }
            })
            controllers.typeScholarshipDocument.checkThrowNotFound(typeSchoarship)
        }
        await Promise.all([
            ...validateFields,
        ]);
        return unset;
    }

    async getDetail(req: any, queryPoor: boolean = true) {
        let getStudent = await this.getOne({
            query: { _id: req.params._id, status: { $ne: EnumConstant.DELETE } },
            select: "-__v -updatedAt",
            populates: [
                { path: "users", select: "username" },
                { path: "type_leavel_scholarships", select: "name name_en" },
                { path: "type_scholarship_documents", select: "name name_en" },
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
                        { path: "shifts", select: "name name_en code", }
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
            if (getStudent.scholarship_status == EnumConstant.ACTIVE) {
                if (getStudent.courses.course_start > new Date()) {
                    response.scholarship_status = EnumConstant.waiting;
                    response.change_course = 1
                }
                if (await controllers.systemConfig.getChangeCourse() == EnumConstant.ACTIVE) {
                    response.change_course = 1
                }
            } else if (getStudent.scholarship_status == EnumConstant.REQUESTING) {
                response.change_course = 1
            }
        }
        response.poor_card_data = null;
        if (getStudent.poor_id && queryPoor) {
            let getPoorData = await CommonUtil.idPoorAPI(getStudent.poor_id);
            if (getPoorData) {
                response.poor_card_data = this.mapPoorData({ data: getPoorData, poorId: getStudent.poor_id })
            }
        }
        if (getStudent.scholarship_status == EnumConstant.QUIT || getStudent.scholarship_status == EnumConstant.REJECTED)  {
            let getTimeline = await controllers.requestTimeline.getManyNoCount({
                query: {
                    students: getStudent._id,
                    status: getStudent.scholarship_status,
                    timeline_type: EnumConstant.TimelineType.SCHOLARSHIP
                },
                sort: {
                    _id: -1
                },
                limit: 1,
                page: 1,
            })
            response.request_timelines = getTimeline.length > 0 ? getTimeline[0]: null;
        }
        return response;
    }

    async approvalScholarship(req: any) {
        let students = req.params._id;
        let { status, reason, poor_member_uuid } = req.body;
        let query: any = {
            _id: students,
            scholarship_status: EnumConstant.REQUESTING
        }
        if (req.body._user.schools) {
            query.schools = req.body._user.schools;
        }
        let getStudent = await this.getOne({
            query: query
        });
        this.checkThrowNotFound(getStudent);
        let clsEnrol : any = null
        if (status == EnumConstant.ACTIVE) {
            let [getCourse, countApproved, getLinkCourse] = await Promise.all([
                controllers.course.getOne({
                    query: {
                        _id: getStudent.courses,
                        status: { $ne: EnumConstant.DELETE }
                    }
                }),
                this.countDocument({
                    scholarship_status: EnumConstant.ACTIVE,
                    courses: getStudent.courses
                }),
                await controllers.linkClassCourse.getOne({
                    query: {
                        courses: getStudent.courses,
                    }
                })
            ])
            controllers.course.checkThrowNotFound(getCourse);
            if (getCourse.course_start < new Date()) {
                this.throwHttpError("មិនអាចអនុម័ត វគ្គដែលស្នើសុំបានចូលរៀន!")
            }
            if (countApproved >= getCourse.student_amount) {
                this.throwHttpError("ចំនួនសិក្ខាកាមក្នុងវគ្គនេះបានពេញ!")
            }
            if (getStudent.id_card_number) {
                let getExisting = await this.getOne({
                    query: {
                        _id: { $ne: getStudent._id },
                        id_card_number: getStudent.id_card_number,
                        scholarship_status: EnumConstant.ACTIVE,
                    },
                    populates: [
                        {
                            path: "courses", select: "code apply_majors", populate: [
                                { path: "apply_majors", select: "name name_en" }
                            ]
                        }
                    ]
                })
                if (getExisting) {
                    this.throwHttpError("លេខអត្តសញ្ញាណប័ណ្ឌស្ទួននិងបេក្ខជននៅវគ្ក៖ " + getExisting.courses.apply_majors.name + " | " + getExisting.courses.code)
                }
            }
            let getExistName = await this.model.findOne({
                _id: { $ne: getStudent._id },
                first_name: getStudent.first_name,
                last_name: getStudent.last_name,
                date_of_birth: getStudent.date_of_birth,
                scholarship_status: EnumConstant.ACTIVE,
                gender: getStudent.gender,
            }).populate([
                {
                    path: "courses", select: "code apply_majors", populate: [
                        { path: "apply_majors", select: "name name_en" }
                    ]
                }
            ]).collation({ locale: "en", strength: 2 })
            if (getExistName) {
                this.throwHttpError("ឈ្មោះបេក្ខជនស្ទួននិងបេក្ខជននៅវគ្ក៖ " + getExistName.courses.apply_majors.name + " | " + getExistName.courses.code)
            }
            if (getLinkCourse) {
                clsEnrol = new this.models.classEnrolment({
                    classes: getLinkCourse.classes,
                    students: getStudent._id,
                    schools: getCourse.schools,
                    status: EnumConstant.ACTIVE, 
                })
            }
        }
        let setData: any = {
            scholarship_status: status
        };
        if (poor_member_uuid) {
            setData.poor_member_uuid = poor_member_uuid
        }
        let requests: any = []
        let reqs = new this.models.requestTimeline({
            students: getStudent._id,
            status: status,
            timeline_type: EnumConstant.TimelineType.SCHOLARSHIP,
            staffs: req.body._user._id,
            reason: reason
        });
        requests.push(reqs);
        if (getStudent.poor_id) {
            if (status == EnumConstant.ACTIVE) {
                let addr = getStudent.address;
                if (!addr.city_provinces || !addr.communes || !addr.villages || !addr.districts) {
                    this.throwHttpError("address is require")
                }
                setData.poor_status = EnumConstant.REQUESTING;
                let reqs = new this.models.requestTimeline({
                    students: getStudent._id,
                    status: EnumConstant.REQUESTING,
                    timeline_type: EnumConstant.TimelineType.IDPOOR,
                    staffs: req.body._user._id,
                });
                requests.push(reqs);
            }
        }
        return createSession(async (session) => {
            if (status == EnumConstant.ACTIVE && clsEnrol) { 
                await this.models.classEnrolment.findOneAndUpdate(
                    { students: clsEnrol.students, classes: clsEnrol.classes },
                    { $set: { status: clsEnrol.status, schools: clsEnrol.schools } },
                    { upsert: true}
                )
            }
            await this.models.requestTimeline.insertMany(requests, { session: session });
            return await this.model.findOneAndUpdate({ _id: getStudent._id }, { $set: setData }, { session: session, new: true })
        });
    }

    async resumeScholarship(req: any) {
        let { students } = req.body;
        let query: any = {
            _id: students,
            scholarship_status: EnumConstant.QUIT
        }
        let getStudent = await controllers.student.getOne({
            query: query
        });
        this.checkThrowNotFound(getStudent);
        let request = new this.models.requestTimeline({
            students: students,
            status: EnumConstant.RESUME_STUDY,
            timeline_type: EnumConstant.TimelineType.SCHOLARSHIP,
            staffs: req.body._user._id,
        });
        let getEnrolmentId = await this.studentEnrolmentId(getStudent._id, getStudent.courses);
        return createSession(async (session) => {
            if (getEnrolmentId) {
                await this.models.classEnrolment.findOneAndUpdate(
                    { _id: getEnrolmentId },
                    { status: EnumConstant.ACTIVE}
                );
            }
            await this.models.requestTimeline.create([request], { session: session });
            return await this.model.findOneAndUpdate(
                { _id: getStudent._id },
                {
                    $set: {
                        scholarship_status: EnumConstant.ACTIVE,
                        type_leavel_scholarships: null
                    }
                },
                { session: session, new: true }
            )
        });
    }

    async quitScholarship(req: any) {
        let { students, quit_type, reason } = req.body;
        let query: any = {
            _id: students,
            scholarship_status: EnumConstant.ACTIVE,
        }
        let getStudent = await controllers.student.getOne({
            query: query
        }); 
        this.checkThrowNotFound(getStudent);
        let request = new this.models.requestTimeline({
            students: students,
            status: EnumConstant.QUIT,
            timeline_type: EnumConstant.TimelineType.SCHOLARSHIP,
            staffs: req.body._user._id,
            quit_type: quit_type, 
            reason: reason
        });
        let getEnrolmentId = await this.studentEnrolmentId(getStudent._id, getStudent.courses);
        return createSession(async (session) => {
            if (getEnrolmentId) {
                await this.models.classEnrolment.findOneAndUpdate(
                    { _id: getEnrolmentId },
                    { status: EnumConstant.QUIT}
                );
            }
            await this.models.requestTimeline.create([request], { session: session });
            return await this.model.findOneAndUpdate(
                { _id: getStudent._id },
                { $set: {
                    type_leavel_scholarships: quit_type,
                    scholarship_status: EnumConstant.QUIT
                } },
                { session: session, new: true }
            )
        });
    }

    private async studentEnrolmentId(students: any, courses: any) {
        let getEnrol = await this.models.classEnrolment.aggregate([
            {
                $match: {
                    students: students,
                    status: {$ne :EnumConstant.DELETE}
                }
            },
            {
                $lookup: {
                    from: 'classes',
                    let: { ids: "$classes" },
                    pipeline: [
                        {
                            $match: {
                                $expr: { $eq: ["$_id", "$$ids"] },
                                courses: courses
                            }
                        },
                    ],
                    as: 'classes'
                }
            },
            {
                $unwind: {
                    path: "$classes"
                }
            }
        ]);
        if (getEnrol.length < 1) {
            return null
        }
        return getEnrol[0]._id
    }

    async getPoorData(req: any) {
        if(req.query.last_name) req.query.last_name = req.query.last_name.trim();
        if(req.query.first_name) req.query.first_name = req.query.first_name.trim();
        let getPoorResponse = await CommonUtil.idPoorAPI(req.query.poor_id);
        if (!getPoorResponse) {
            this.throwHttpError("លេខបណ្ណសមធម៌មិនត្រឹមត្រូវ!");
        }
        return this.mapPoorData({
            data: getPoorResponse,
            poorId: req.query.poor_id,
            dob: req.query.date_of_birth,
            gender: req.query.gender,
            last_name: req.query.last_name,
            first_name: req.query.first_name,
        });

    }

    mapPoorData(param: { data: any, poorId: string, dob?: any, first_name? :string, last_name?: string, gender?: string }) {
        let res: any = {}
        let content = param.data.households.content[0]
        let card = param.data.equityCards[0]
        if (card){//(data.equityCard) {
            res.created_at = card.createDate;
            res.expire_at = card.validUntil;
            // res.is_valid = data.equityCard.valid;
            res.card_number = card.cardNo;
        }
        if (content) {//(data.householdInfo) {
            res.uuid = content.uuid;
            res.poverty_status = content.povertyStatus;
        }
        // if (data.address) {
        //     res.address = {
        //         city_provinces: {
        //             name: data.address.province.nameKm,
        //             name_en: data.address.province.name,
        //         },
        //         communes: {
        //             name: data.address.commune.nameKm,
        //             name_en: data.address.commune.name,
        //         },
        //         districts: {
        //             name: data.address.district.nameKm,
        //             name_en: data.address.district.name,
        //         },
        //         villages: {
        //             name: data.address.village.nameKm,
        //             name_en: data.address.village.name,
        //         },
        //     }
        // }
        res.family_members = [];
        let validDob = true;
        if (param.dob) {   
            validDob = false;
        }
        let isName = false, isDob = false
        if (param.data.individuals) {
            param.data.individuals.forEach((item: any) => {
                let member: any = {}
                if (item.fieldValues) {
                    if (item.fieldValues.surname) { 
                        member.last_name = item.fieldValues.surname.value.trim();
                    }
                    if (item.fieldValues.name) {   
                        member.first_name = item.fieldValues.name.value.trim();
                    }
                    if (item.fieldValues.dob) {
                        member.date_of_birth = new Date(item.fieldValues.dob.value);
                    }
                    if (item.fieldValues.gender) {
                        member.gender = item.fieldValues.gender.value.toLowerCase();
                    }
                    if (item.fieldValues.relationToHead) { 
                        member.relation_to_head = item.fieldValues.relationToHead.value;
                    }
                    member.uuid = item.uuid;
                }
                if (!validDob) {
                    let newDob = new Date(param.dob);
                    if (String(param.last_name) == String(member.last_name) &&  String(param.first_name) == String(member.first_name)) {
                        isName = true;
                        if (newDob.getFullYear() == member.date_of_birth.getFullYear()) {
                            //  && newDob.getMonth() == member.date_of_birth.getMonth() && newDob.getDay() == member.date_of_birth.getDay()) {
                            isDob = true;
                            if (String(param.gender) == String(member.gender)) {
                                validDob = true
                            }
                        }
                    }
                }
                res.family_members.push(member);
            });
        }
        if (!validDob) {
            if (!isName) {
                this.throwHttpError("គោត្តនាម ឬនាមមិនត្រូវក្នុងបណ្ណសមធម៌");
            }
            if (!isDob) {
                this.throwHttpError("ថ្ងៃខែ​ឆ្នាំ​កំណើតមិនត្រូវក្នុងបណ្ណសមធម៌");
            }
            this.throwHttpError("ភេទមិនត្រូវក្នុងបណ្ណសមធម៌");
        }
        res.poor_id = param.poorId;
        return res;
    }

    async filterData(req: any) {
        let query: any = {
            status:EnumConstant.ACTIVE,
            scholarship_status: Number(req.query.status)
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
                    apply_majors: { $addToSet: "$apply_majors" },
                    gender: { $addToSet: "$gender" },
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
                $lookup: {
                    from: 'skills',
                    let: { ids: "$apply_majors" },
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
                    as: 'apply_majors'
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
                gender: [],
                schools: [],
                apply_majors: []
            }
        }
        return data[0]
    }

    async newRequestingList(req: any) {
        let [skip, limit] = this.skipLimit(req);
        let { search, gender, schools,  scholarship_status }: any = req.query; //apply_majors,
        let query: any = { 
            status: EnumConstant.ACTIVE,
            scholarship_status: { $in: [EnumConstant.REQUESTING, EnumConstant.REJECTED] }
        };
        if (scholarship_status) {
            query.scholarship_status = Number(scholarship_status)
        }
        if (req.body._user.schools) {   
            schools = req.body._user.schools; 
        }
        if (schools) {
            query.schools = new ObjectId(schools);
        }
        // let matchMajor: any = {}
        // if (apply_majors) {
        //     matchMajor.apply_majors = new ObjectId(apply_majors);
        // }
        if (gender) {
            query.gender = gender;
        }
        if (req.body._user.roles._id == Role.officer._id) {
            query.create_by = new ObjectId(req.body._user._id);
        }
        let searchQuery: any = {};
        if (search) {
            let s = search.replace(/[&\/\\?+()${}]/g, "");
            searchQuery.$or = [
                ...CommonUtil.searchNameCode(search),
                { poor_id: { $regex: s, $options: "i" } }
            ]
        }
        let data = await this.model.aggregate([
            { $match: query },
            {
                $addFields: {
                    name: { $toLower: { $concat: ["$last_name", " ", "$first_name"] } },
                    name_en: { $toLower: { $concat: ["$last_name_en", " ", "$first_name_en"] } },
                }
            },
            { $match: searchQuery },
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
                                            name: 1, name_en: 1, code: 1, apply_majors: 1, course_start: 1, course_end: 1
                                        }
                                    }
                                ],
                                as: 'courses'
                            }
                        },
                        { $unwind: { path: "$courses" } },
                        {
                            $project: {
                                first_name: 1, last_name: 1, first_name_en: 1, last_name_en: 1, status: 1, phone_number: 1,
                                gender: 1, profile_image: 1, schools: 1, poor_id: 1, poor_status: 1, courses: 1,
                                apply_majors: "$courses.apply_majors", scholarship_status: 1
                            }
                        },
                        {
                            $sort: { scholarship_status: -1, _id: 1 }
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

    

    async getApprovedList(req: any) {
        let [skip, limit] = this.skipLimit(req);
        let { search, gender, schools, apply_majors, scholarship_status, courses }: any = req.query;
        let query: any = { 
            status: EnumConstant.ACTIVE,
            scholarship_status: { $in: [EnumConstant.ACTIVE, EnumConstant.QUIT] }
        };
        if (req.body._user.roles._id == Role.officer._id) {
            query.create_by = new ObjectId(req.body._user._id);
        }
        if (req.body._user.schools) {   
            schools = req.body._user.schools; 
        }
        if (courses) { 
            query.courses = new ObjectId(courses);
        }
        if (schools) {
            query.schools = new ObjectId(schools);
        }
        // let matchMajor: any = {}
        if (apply_majors) {
            let getCourses = await controllers.course.getManyNoCount({
                query: {
                    apply_majors: apply_majors,
                    status: {$ne :EnumConstant.DELETE}
                }
            })
            query.courses = { $in: getCourses.map(item => item._id) };
            // matchMajor.apply_majors = new ObjectId(apply_majors);
        }
        if (gender) {
            query.gender = gender;
        }
        if (req.body._user.roles._id == Role.nsaf._id) {
            query.poor_status = EnumConstant.ACTIVE
        }
        let secondQuery: any = {};
        if (search) {
            let s = search.replace(/[&\/\\?+()${}]/g, "");
            secondQuery.$or = [
                ...CommonUtil.searchNameCode(search),
                { poor_id: { $regex: s, $options: "i" } }
            ]
        }
        let data = await this.model.aggregate([
            { $match: query },
            {
                $addFields: {
                    name: { $toLower: { $concat: ["$last_name", " ", "$first_name"] } },
                    name_en: { $toLower: { $concat: ["$last_name_en", " ", "$first_name_en"] } },
                }
            },
            { $match: secondQuery },
            {
                $facet: {
                    result: [
                        {
                            $sort: { _id : -1}
                        }, 
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
                                            name: 1, name_en: 1, code: 1, apply_majors: 1, course_start: 1, course_end: 1
                                        }
                                    }
                                ],
                                as: 'courses'
                            }
                        },
                        { $unwind: { path: "$courses" } },
                        {
                            $addFields: {
                                apply_majors: "$courses.apply_majors",
                                scholarship_status:{                            
                                    $cond: {
                                        if: {
                                            $and: [
                                                { $gt: ["$courses.course_start", new Date()], },
                                                { $eq: ["$scholarship_status", EnumConstant.ACTIVE] }
                                           ]
                                        },
                                        then: EnumConstant.waiting,
                                        else: {
                                            $cond: {
                                                if: {
                                                    $and: [
                                                        { $eq: ["$scholarship_status", EnumConstant.RESUME_STUDY] }
                                                   ]
                                                },
                                                then: EnumConstant.ACTIVE,
                                                else: "$scholarship_status"
                                            }
                                        }
                                    }
                                },    
                            }
                        },
                        {
                            $project: {
                                __v: 0, updatedAt: 0, users: 0, place_of_birth: 0, ethnicity: 0, nationality: 0, name_en: 0, name: 0
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
        let [getData, count] = await this.facetData(data, [
            {
                path: "schools", select: "name name_en profile_image address", model: "schools", populate: [
                    { path: "address.villages", select: "name name_en" },
                    { path: "address.communes", select: "name name_en" },
                    { path: "address.districts", select: "name name_en" },
                    { path: "address.city_provinces", select: "name name_en" },
            ] 
        },
            { path: "apply_majors", select: "name name_en", model: "skills" },
        ]); 
        let json = CommonUtil.JSONParse(getData);
        return [json,count]
    }

    async filterDataRequestList(req: any) { // isApproveList: boolean
        return {
            gender: [EnumConstant.Gender.MALE, EnumConstant.Gender.FEMALE],
            schools: await controllers.school.getSchoolForFilter(req),
            // apply_majors: await controllers.applyMajor.getApplyMajorForFilter(req),
            scholarship_status: [EnumConstant.REQUESTING, EnumConstant.REJECTED], 
        }
    }
    async filterDataApprovedList(req: any) { // isApproveList: boolean
        return {
            gender: [EnumConstant.Gender.MALE, EnumConstant.Gender.FEMALE],
            schools: await controllers.school.getSchoolForFilter(req),
            apply_majors: await controllers.applyMajor.getApplyMajorForFilter(req),
            // scholarship_status: scholarshipStatus, 
        }
    }
    async resubmitRejected(req: any) {
        let students = req.params._id;
        let query: any = {
            _id: students,
            status: EnumConstant.ACTIVE, 
            scholarship_status: {$in : [EnumConstant.DRAFT, EnumConstant.REJECTED]},
        }
        if (req.body._user.schools) {
            query.schools = req.body._user.schools;
        }
        let getStudent = await this.getOne({
            query:query
        }); 
        this.checkThrowNotFound(getStudent);
        let reqs = new this.models.requestTimeline({
            students: getStudent._id,
            status: EnumConstant.REQUESTING,
            timeline_type: EnumConstant.TimelineType.SCHOLARSHIP,
            staffs: req.body._user._id,
            resubmit: EnumConstant.ACTIVE
        })
        return createSession(async (session) => {
            await this.models.requestTimeline.create([reqs], { session: session });
            return await this.model.findOneAndUpdate({_id: getStudent._id}, {$set: {scholarship_status: EnumConstant.REQUESTING}}, {session: session, new:true})
        });
    }

    async addPoorId(req: any) {
        let { poor_id, poor_member_uuid } = req.body;
        let query: any = {
            poor_id: null,
            status: EnumConstant.ACTIVE,
            _id: req.params._id, 
        }
        if (req.body._user.schools) {
            query.schools = req.body._user.schools;
        }
        let getStudent = await this.getOne({
            query: query
        })
        this.checkThrowNotFound(getStudent);
        let getPoorResponse = await CommonUtil.idPoorAPI(poor_id);
        if (!getPoorResponse) {
            this.throwHttpError("លេខបណ្ណសមធម៌មិនត្រឹមត្រូវ");
        }
        let set: any = {
            poor_id: poor_id, poor_member_uuid: poor_member_uuid, type_poverty_status: getPoorResponse.households.content[0].povertyStatus
        }
        return createSession(async (session) => {
            if (getStudent.scholarship_status == EnumConstant.ACTIVE || getStudent.scholarship_status == EnumConstant.RESUME_STUDY) {
                let reqs = new this.models.requestTimeline({
                    students: getStudent._id,
                    status: EnumConstant.REQUESTING,
                    timeline_type: EnumConstant.TimelineType.IDPOOR,
                    staffs: req.body._user._id,
                }); 
                set.poor_status = EnumConstant.REQUESTING;
                await this.models.requestTimeline.create([reqs], { session: session });
            }
            return this.model.findOneAndUpdate({ _id: getStudent._id }, { $set: set }, { new: true });
       });
    }

    async changeCourse(req: any) {
        let [getStudent, getChangeCourse] = await Promise.all([
            this.getOne({
                query: {
                    _id: req.params._id,
                },
                populates: [
                    {path: "courses"}
                ]
            }),
            controllers.systemConfig.getChangeCourse() 
        ]) 
        this.checkThrowNotFound(getStudent);
        if (!getStudent.courses) {
            this.checkThrowNotFound(getStudent);
        }
        if (getStudent.scholarship_status != EnumConstant.REQUESTING) {
            if (getStudent.courses.course_start < new Date() && getChangeCourse != EnumConstant.ACTIVE) {
                this.throwHttpError("student's course already started")
            }
        }
        let [ getCourse, getAttList] = await Promise.all([
            controllers.course.getOne({
            query: {
                _id: req.body.courses,
                schools: getStudent.schools,
                course_end: { $gt: new Date() }
            }
            }),
            controllers.attendanceList.getManyNoCount({
                query: {
                    courses: getStudent.courses
                }
            }) 
        ]);
        controllers.course.checkThrowNotFound(getCourse);
        return createSession(async (session) => {
            if (getAttList.length > 0) {
                await this.models.attendanceStudent.updateMany(
                    { attendance_lists: { $in: getAttList.map(item => item._id) }, students : getStudent._id },
                    { $set: {status: EnumConstant.DELETE}},
                    {session: session}
                );
            }
            return this.model.findOneAndUpdate({ _id: getStudent._id }, { $set: { courses: getCourse._id } }, { new: true, session: session });
        })

    }

}