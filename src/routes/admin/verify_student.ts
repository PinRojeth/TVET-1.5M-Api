import EnumConstant from "../../utils/enumConstant";
import controllers from "../../controllers";
import { createGetRoute, createPostRoute } from "../../utils";
import validate_request, { CheckType } from "../../utils/validate_request";
import { pAdmin } from "../../utils/permissionAdmin";

export default [
    createGetRoute("/admin/verify_student/filter_data",
        {
            authorized_permissions: [pAdmin.verifyStudent.read],
        }, async (req) => {
            return controllers.verifyStudent.filterData(req);
        }
    ),
    createGetRoute("/admin/verify_student",
        {
            authorized_permissions: [pAdmin.verifyStudent.read],
            validators: [
                validate_request("schools", { optional: true, isMongoId: true }, CheckType.query),
                validate_request("search", { optional: true, notArray: true }, CheckType.query),
                validate_request("gender", { optional: true }, CheckType.query).isIn([EnumConstant.Gender.MALE, EnumConstant.Gender.FEMALE]).withMessage("invalid gender"),
                validate_request("apply_majors", { optional: true, isMongoId: true }, CheckType.query),
            ]
        }, async (req) => {
            return controllers.verifyStudent.getList(req);
        }
    ),
    createGetRoute("/admin/verify_student/:_id",
        {
            authorized_permissions: [pAdmin.verifyStudent.read],
            validators: [
                validate_request("_id", {isMongoId: true}, CheckType.param), 
            ]
        }, async (req) => {
            return controllers.verifyStudent.getDetail(req, true);
        }
    ),
    createPostRoute("/admin/verify_student/:_id/request",
        {
            authorized_permissions: [pAdmin.verifyStudent.request],
            validators: [
                validate_request("_id", {isMongoId: true}, CheckType.param), 
            ]
        }, async (req) => {
            return controllers.verifyStudent.applyRequest(req);
        }
    ),
    createPostRoute("/admin/verify_student/:_id/approval",
        {
            authorized_permissions: [pAdmin.verifyStudent.writeApproved],
            validators: [
                validate_request("_id", {isMongoId: true}, CheckType.param), 
                validate_request("status", { isNumeric: true }).isIn([EnumConstant.ACTIVE, EnumConstant.REJECTED]), 
                validate_request("reason", { optional: true, notArray: true }),
            ]
        }, async (req) => {
            return controllers.verifyStudent.approval(req);
        }
    ),
]
