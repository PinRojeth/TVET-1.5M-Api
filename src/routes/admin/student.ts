import EnumConstant from "../../utils/enumConstant";
import controllers from "../../controllers";
import { createGetRoute, createPostRoute, formPatchRoute, formPostRoute } from "../../utils";
import validate_request, { CheckType } from "../../utils/validate_request";
import { pAdmin } from "../../utils/permissionAdmin";

let validateGET = [
    validate_request("schools", { optional: true, isMongoId: true }, CheckType.query),
    validate_request("search", { optional: true, notArray: true }, CheckType.query),
    validate_request("gender", { optional: true }, CheckType.query).isIn([EnumConstant.Gender.MALE, EnumConstant.Gender.FEMALE]).withMessage("invalid gender"),
    validate_request("apply_majors", { optional: true, isMongoId: true }, CheckType.query),
    validate_request("scholarship_status", { optional: true, isNumeric: true }, CheckType.query),
]

export default [
    createGetRoute("/admin/student/:_id/change_course",
        {
            authorized_permissions: [pAdmin.student.writeApproved],  
            validators: [
                validate_request("_id", { isMongoId: true }, CheckType.param), 
                validate_request("requesting", {optional: true}, CheckType.query).isIn([0,1])
            ]
        }, async (req) => {
            return controllers.course.availableCourseForStudent(req);
        }
    ),
    createPostRoute("/admin/student/:_id/change_course",
        {
            authorized_permissions: [pAdmin.student.writeApproved],  
            validators: [
                validate_request("_id", {isMongoId: true}, CheckType.param), 
                validate_request("courses", {isMongoId: true}), 
            ]
        }, async (req) => {
            return controllers.student.changeCourse(req);
        }
    ),
    createPostRoute("/admin/student/:_id/add_poor_id",
        {
            authorized_permissions: [pAdmin.student.addPoorId],  
            validators: [
                validate_request("_id", {isMongoId: true}, CheckType.param), 
                validate_request("poor_id", { exist: true }), 
                validate_request("poor_member_uuid", { exist: true })
            ]
        }, async (req) => { 
            return controllers.student.addPoorId(req);
        }
    ), 
    createPostRoute("/admin/student/:_id/approval",
        {
            authorized_permissions: [pAdmin.student.writeApproved],
            validators: [
                validate_request("_id", {isMongoId: true}, CheckType.param), 
                validate_request("status", { isNumeric: true }).isIn([EnumConstant.ACTIVE, EnumConstant.REJECTED]), 
                validate_request("request_poor", {optional: true, isNumeric: true}).isIn([EnumConstant.ACTIVE]), 
            ]
        }, async (req) => {
            return controllers.student.approvalScholarship(req);
        }
    ),
    createGetRoute("/admin/student/type_leave_scholarship",
        {
            authorized_permissions: [pAdmin.student.read],
        }, async (req) => {
            return controllers.typeLeaveScholarship.getList(req);
        }
    ),
    createPostRoute("/admin/student/quit",
        {
            authorized_permissions: [pAdmin.student.writeApproved],
            validators: [
                validate_request("students", { isMongoId: true }), 
                validate_request("quit_type", { isNumeric: true }),
                validate_request("reason", { optional: true, notArray: true }),
            ]
        }, async (req) => {
            return controllers.student.quitScholarship(req);
        }
    ),
    createPostRoute("/admin/student/resume",
        {
            authorized_permissions: [pAdmin.student.resumeStudy],
            validators: [
                validate_request("students", { isMongoId: true }), 
            ]
        }, async (req) => {
            return controllers.student.resumeScholarship(req);
        }
    ),
    formPatchRoute('/admin/student/:_id',
        {
            authorized_permissions: [pAdmin.student.write],
            validators: [
                validate_request('_id', { isMongoId: true }, CheckType.param),
                validate_request("remove_profile_image", { optional: true, isBoolean: true }),
                validate_request('first_name', { exist: true }),
                validate_request('last_name', { exist: true }),
                // validate_request("phone_number", { optional: true, isPhoneNumber: true }),
                validate_request("email", { optional: true, email: true }),
                validate_request("profile_image", { optional: true, isMongoId: true }),
                validate_request("gender", { optional: true }).isIn([EnumConstant.Gender.MALE, EnumConstant.Gender.FEMALE]).withMessage("invalid gender"),
                validate_request('nationality', { optional: true, isNumeric: true }),
                validate_request('ethnicity', { optional: true, isNumeric: true }),
                validate_request("place_of_birth", { isJSON: true }),
                validate_request("address", { optional: true, isJSON: true }),
                validate_request("date_of_birth", { optional: true, isDate: true }),
                validate_request("type_scholarship_documents", { optional: true, isNumeric: true }),
            ]
        }, async (req) => {
            return controllers.student.update(req);
        }
    ),
    createGetRoute("/admin/student/:_id/timeline",
        {
            authorized_permissions: [pAdmin.student.read],
            validators: [
                validate_request("_id", { isMongoId: true }, CheckType.param)
            ]
        }, async (req) => {
            return controllers.requestTimeline.getList(req);
        }
    ),
    createGetRoute("/admin/student/check_poor_data",
        {
            authorized_permissions: [pAdmin.student.apply],
            validators: [
                validate_request("poor_id", { exist: true }, CheckType.query)
            ]
        }, async (req) => {
            return controllers.student.getPoorData(req);
        }
    ),
    formPostRoute("/admin/student/apply_study",
        {
            authorized_permissions: [pAdmin.student.apply],
            validators: [
                validate_request("first_name", {exist: true}),
                validate_request("last_name", {exist: true}),
                validate_request("gender", {exist: true}).isIn(["male", "female", "other"]),
                validate_request("date_of_birth", {optional: true, isDate: true}),
                validate_request("schools", {isMongoId: true}),
                validate_request("courses", {isMongoId: true}),
                // validate_request("poor_id", {exist: true}),
            ]
        }, async (req) => {
            return controllers.student.applyRequest(req);
        }
    ),
    createGetRoute("/admin/student/:_id/approved",
        {
            authorized_permissions: [pAdmin.student.read],
            validators: [
                validate_request("_id", { isMongoId: true }, CheckType.param)
            ]
        }, async (req) => {
            return controllers.student.getDetail(req, false);
        }
    ),
    createGetRoute("/admin/student/request_list/filter_data",
        {
            authorized_permissions: [pAdmin.student.readRequesting],
        }, async (req) => {
            return controllers.student.filterDataRequestList(req)//, false);
        }
    ),
    createGetRoute("/admin/student/request_list",
        {
            authorized_permissions: [pAdmin.student.readRequesting],
            validators: validateGET
        }, async (req) => {
            return controllers.student.newRequestingList( req);
        }
    ),
    createGetRoute("/admin/student/approved_list/filter_data",
        {
            authorized_permissions: [pAdmin.student.readApproved],
        }, async (req) => {
            return controllers.student.filterDataApprovedList(req)//, true);
        }
    ),
    createGetRoute("/admin/student/approved_list",
        {
            authorized_permissions: [pAdmin.student.readApproved],
            validators: validateGET
        }, async (req) => {
            return controllers.student.getApprovedList(req);
        }
    ),
    createGetRoute("/admin/student/:_id/attendance",
        {
            authorized_permissions: [pAdmin.student.read],
            validators: [
                validate_request("_id", { isMongoId: true }, CheckType.param)
            ]
        }, async (req) => {
            return controllers.attendanceStudent.getListByStudent(req);
        }
    ),
    createPostRoute("/admin/student/:_id/request",
        {
            authorized_permissions: [pAdmin.student.request],
            validators: [
                validate_request("_id", {isMongoId: true}, CheckType.param), 
            ]
        }, async (req) => {
            return controllers.student.resubmitRejected(req);
        }
    ),
    createPostRoute('/admin/student/reset_password',
        {
            authorized_permissions: [pAdmin.student.writeUser],
            validators: [
                validate_request('students', { isMongoId: true }),
                validate_request('new_password', { exist: true }).isLength({ min: 8 }).withMessage("password at least 8 length")
            ]
        }, async (req) => {
            return controllers.user.resetStudentPassword(req);
        }
    ),
    createPostRoute('/admin/student/add_user',
        {
            authorized_permissions: [pAdmin.student.writeUser],
            validators: [
                validate_request('students', { isMongoId: true }),
                validate_request('username', { exist: true }).isLength({ min: 6 }).withMessage("username must be at least 6 characters"),
                validate_request('password', { exist: true }).isLength({ min: 8 }).withMessage("password must be at least 8 characters"),
            ]
        }, async (req) => {
            return controllers.user.addStudentUsername(req);
        }
    ),
    createGetRoute("/admin/student/:_id/attendance_detail",
        {
            authorized_permissions: [pAdmin.student.read],
            validators: [
                validate_request("_id", { isMongoId: true }, CheckType.param),
                validate_request("year", { isNumeric: true }, CheckType.query),
                validate_request("month", { isNumeric: true }, CheckType.query),

            ]
        }, async (req) => {
            return controllers.attendanceStudent.getDetailByStudent(req);
        }
    ),
    createGetRoute("/admin/student/:_id",
        {
            authorized_permissions: [pAdmin.student.read],
            validators: [
                validate_request("_id", { isMongoId: true }, CheckType.param),
                validate_request("query_poor_data", { optional: true, isBoolean: true }, CheckType.query),
            ]
        }, async (req) => {
            let isRequestPoor : boolean = false;
            if (req.query.query_poor_data){
                isRequestPoor = req.query.query_poor_data == "true"? true : false;
            }
            return controllers.student.getDetail(req, isRequestPoor);
        }
    ),
]
