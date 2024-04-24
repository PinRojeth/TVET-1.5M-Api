import EnumConstant from "../../utils/enumConstant";
import controllers from "../../controllers";
import { createGetRoute, createPostRoute } from "../../utils";
import validate_request, { CheckType } from "../../utils/validate_request";
import { pAdmin } from "../../utils/permissionAdmin";

export default [
    createGetRoute("/admin/poor_student/filter_data",
        {
            authorized_permissions: [pAdmin.poorStudent.read],
        }, async (req) => {
            return controllers.poorStudent.filterData(req);
        }
    ),
    createGetRoute("/admin/poor_student",
        {
            authorized_permissions: [pAdmin.poorStudent.read],
            validators: [
                validate_request("schools", { optional: true, isMongoId: true }, CheckType.query),
                validate_request("search", { optional: true, notArray: true }, CheckType.query),
                validate_request("gender", { optional: true }, CheckType.query).isIn([EnumConstant.Gender.MALE, EnumConstant.Gender.FEMALE]).withMessage("invalid gender"),
                validate_request("apply_majors", { optional: true, isMongoId: true }, CheckType.query),
                validate_request("last_query_datetime", {optional: true,isDate: true}),
                validate_request("scholarship_status", {optional: true,isNumeric: true}).isIn([EnumConstant.ACTIVE, EnumConstant.QUIT]),
            ]
        }, async (req) => {
            return controllers.poorStudent.getList(req);
        }
    ),
    createGetRoute("/admin/poor_student/:_id",
        {
            authorized_permissions: [pAdmin.poorStudent.read],
            validators: [
                validate_request("_id", {isMongoId: true}, CheckType.param), 
            ]
        }, async (req) => {
            return controllers.poorStudent.getDetail(req, true);
        }
    ),
    createPostRoute("/admin/poor_student/:_id/request",
        {
            authorized_permissions: [pAdmin.poorStudent.request],
            validators: [
                validate_request("_id", {isMongoId: true}, CheckType.param), 
            ]
        }, async (req) => {
            return controllers.poorStudent.reapplyRequest(req);
        }
    ),
    createPostRoute("/admin/poor_student/:_id/approval",
        {
            authorized_permissions: [pAdmin.poorStudent.writeApproved],
            validators: [
                validate_request("_id", {isMongoId: true}, CheckType.param), 
                validate_request("status", { optional: true, isNumeric: true }).isIn([EnumConstant.ACTIVE, EnumConstant.REJECTED]), 
                validate_request("poor_status", { optional: true, isNumeric: true }).isIn([EnumConstant.ACTIVE, EnumConstant.REJECTED]), 
                validate_request("reason", { optional: true, notArray: true }),
            ]
        }, async (req) => {
            return controllers.poorStudent.approval(req);
        }
    ),
]
