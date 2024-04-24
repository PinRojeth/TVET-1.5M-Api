import controllers from "../../controllers";
import { createDeleteRoute, createGetRoute, createPatchRoute, createPostRoute } from "../../utils";
import validate_request, { CheckType } from "../../utils/validate_request";
import { pAdmin } from "../../utils/permissionAdmin";

let validates = [
    // validate_request("start_date", {isDate: true}), 
    // validate_request("end_date", { isDate: true }), 
    validate_request("students", {isArray: true}).isLength({min: 1}),
    validate_request("students.*", {isMongoId: true}),
]

export default [
    createGetRoute("/admin/attendance_submit/check_exist",
        {
            authorized_permissions: [pAdmin.attendanceSubmit.read],
            validators: [
                validate_request("start_date", {isDate: true}, CheckType.query),
                validate_request("end_date", {isDate: true}, CheckType.query),
            ]
        }, async (req) => {
            // let { start_date, end_date } = req.query;
            // let [startDate, endDate] = CommonUtil.parseStartDateEndDate(start_date, end_date);
            // let query: any = {
            //     schools: req.body._user.schools,
            //     status: { $ne: EnumConstant.DELETE },
            //     $or: [
            //         { 'start_date': { $gt: startDate, $lt: endDate } },
            //         { 'end_date': { $gt: startDate, $lt: endDate } },
            //         { 'start_date': { $lt: startDate }, "end_date": { $gt: endDate } },
            //         { 'start_date': startDate, "end_time": endDate } 
            //     ]   
            // }
            // return controllers.attendanceSubmit.checkNameExist({query: query})
        }
    ),
    createGetRoute("/admin/attendance_submit/student",
        {
            authorized_permissions: [pAdmin.attendanceSubmit.read],
            validators: [
                // validate_request("start_date", { isDate: true }, CheckType.query),
                // validate_request("end_date", { isDate: true }, CheckType.query),
                validate_request("exclude_students", { optional: true, isMongoId: true }, CheckType.query),
                validate_request("exclude_students.*", { optional: true, isMongoId: true }, CheckType.query),
                
            ]
        }, async (req) => {
            return controllers.attendanceSubmit.availableStudent(req)
        }
    ),
    createGetRoute("/admin/attendance_submit/student/filter_data",
        {
            authorized_permissions: [pAdmin.attendanceSubmit.read],
        }, async (req) => {
            return controllers.attendanceSubmit.availableStudentFilterData(req);
        }
    ),
    createPostRoute("/admin/attendance_submit",
        {
            authorized_permissions: [pAdmin.attendanceSubmit.write],
            validators: [
                ...validates,
            ]
        }, async (req) => {
            return controllers.attendanceSubmit.create(req);
        }
    ),
    createPatchRoute("/admin/attendance_submit/:_id",
        {
            authorized_permissions: [pAdmin.attendanceSubmit.write],
            validators: [
                ...validates,
                validate_request("_id", {isMongoId: true}, CheckType.param),
            ]
        }, async (req) => {
            return controllers.attendanceSubmit.update(req);
        }
    ),
    createGetRoute("/admin/attendance_submit/filter_data",
        {
            authorized_permissions: [pAdmin.attendanceSubmit.read],
        }, async (req) => {
            return controllers.attendanceSubmit.filterData(req);
        }
    ),
    createGetRoute("/admin/attendance_submit",
        {
            authorized_permissions: [pAdmin.attendanceSubmit.read],
            validators: [
                validate_request("last_query_datetime", {optional: true,isDate: true}),
                validate_request("schools", {optional: true,isMongoId: true}),
            ]​
        }, async (req) => {
            return controllers.attendanceSubmit.getList(req);
        }
    ),
    createGetRoute("/admin/attendance_submit/attendance_detail",
        {
            authorized_permissions: [pAdmin.attendanceSubmit.read],
            validators: [
                validate_request("students", {isMongoId: true}, CheckType.query),
                validate_request("attendance_submits", {isMongoId: true}, CheckType.query),
            ]
        }, async (req) => {
            return controllers.attendanceStudent.getDetailBySubmit(req);
        }
    ),
    createGetRoute("/admin/attendance_submit/:_id",
        {
            authorized_permissions: [pAdmin.attendanceSubmit.read],
            validators: [
                validate_request("_id", {isMongoId: true}, CheckType.param),
            ]
        }, async (req) => {
            return controllers.attendanceSubmit.getDetail(req);
        }
    ),
    createDeleteRoute("/admin/attendance_submit/:_id",
        {
            authorized_permissions: [pAdmin.attendanceSubmit.delete],
            validators: [
                validate_request("_id", {isMongoId: true}, CheckType.param),
            ]
        }, async (req) => {
            return controllers.attendanceSubmit.delete(req);
        }
    ),

]
