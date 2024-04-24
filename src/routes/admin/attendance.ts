import controllers from "../../controllers";
import { createDeleteRoute, createGetRoute, createPatchRoute, createPostRoute } from "../../utils";
import validate_request, { CheckType } from "../../utils/validate_request";
import { pAdmin } from "../../utils/permissionAdmin";

let validates = [ 
    validate_request("courses", { isMongoId: true }), 
    validate_request("date", { isDate: true }), 
    validate_request("data", {isArray: true}).isLength({min: 0}), 
    validate_request("data.*.students", {isMongoId: true}), 
    validate_request("data.*.attendance_score", {isNumeric: true}).isIn([0,25,50,75,100]), 
]

export default [
    createGetRoute("/admin/attendance/filter_data",
        {
            authorized_permissions: [pAdmin.attendance.read],
        }, async (req) => {
            return controllers.attendanceList.filterData(req);
        }
    ),
    createGetRoute("/admin/attendance/course",
        {
            authorized_permissions: [pAdmin.attendance.read],
        }, async (req) => {
            return controllers.attendanceList.availableCourse(req)
        }
    ),
    createGetRoute("/admin/attendance/student",
        {
            authorized_permissions: [pAdmin.attendance.read],
            validators: [
                validate_request("date", {isDate: true}, CheckType.query),
                validate_request("courses", {isMongoId: true}, CheckType.query),
            ]
        }, async (req) => {
            return controllers.attendanceList.AvalidateStudent(req)
        }
    ),
    createPostRoute("/admin/attendance",
        {
            authorized_permissions: [pAdmin.attendance.write],
            validators: [
                ...validates,
            ]
        }, async (req) => {
            return controllers.attendanceList.save(req);
        }
    ),
    createGetRoute("/admin/attendance",
        {
            authorized_permissions: [pAdmin.attendance.read],
        }, async (req) => {
            return controllers.attendanceList.getList(req)
        }
    ),
    createGetRoute("/admin/attendance/:_id",
        {
            authorized_permissions: [pAdmin.attendance.read],
            validators: [
                validate_request("_id", { isMongoId: true }, CheckType.param),
            ]
        }, async (req) => {
            return controllers.attendanceList.getDetail(req)
        }
    ),
    createDeleteRoute('/admin/attendance/:_id',
        {
            authorized_permissions: [pAdmin.attendance.read],
            validators: [
                validate_request("_id", { isMongoId: true }, CheckType.param),
            ]
        }, async (req) => {
            return controllers.attendanceList.delete(req)
        }
    ),

]
