import EnumConstant from "../../utils/enumConstant";
import controllers from "../../controllers";
import { createGetRoute, createPostRoute } from "../../utils";
import validate_request, { CheckType } from "../../utils/validate_request";
import { pAdmin } from "../../utils/permissionAdmin";

export default [
    createGetRoute("/admin/approval_info_student/filter_data",
        {
            authorized_permissions: [pAdmin.approvalInfoStudent.read],
        }, async (req) => {
            return controllers.approvalInfoStudent.filterData(req);
        }
    ),
    createGetRoute("/admin/approval_info_student",
        {
            authorized_permissions: [pAdmin.approvalInfoStudent.read],
            validators: [
                validate_request("schools", { optional: true, isMongoId: true }, CheckType.query),
                validate_request("search", { optional: true, notArray: true }, CheckType.query),
                validate_request("gender", { optional: true }, CheckType.query).isIn([EnumConstant.Gender.MALE, EnumConstant.Gender.FEMALE]).withMessage("invalid gender"),
                validate_request("apply_majors", { optional: true, isMongoId: true }, CheckType.query),
            ]
        }, async (req) => {
            return controllers.approvalInfoStudent.getList(req);
        }
    ),
    createGetRoute("/admin/approval_info_student/:_id",
        {
            authorized_permissions: [pAdmin.approvalInfoStudent.read],
            validators: [
                validate_request("_id", {isMongoId: true}, CheckType.param), 
            ]
        }, async (req) => {
            return controllers.approvalInfoStudent.getDetail(req, true);
        }
    ),
    createPostRoute("/admin/approval_info_student/:_id/request",
        {
            authorized_permissions: [pAdmin.approvalInfoStudent.request],
            validators: [
                validate_request("_id", {isMongoId: true}, CheckType.param), 
            ]
        }, async (req) => {
            return controllers.approvalInfoStudent.applyRequest(req);
        }
    ),
    createPostRoute("/admin/approval_info_student/:_id/approval",
        {
            authorized_permissions: [pAdmin.approvalInfoStudent.writeApproved],
            validators: [
                validate_request("_id", {isMongoId: true}, CheckType.param), 
                validate_request("status", { isNumeric: true }).isIn([EnumConstant.ACTIVE, EnumConstant.REJECTED]), 
                validate_request("reason", { optional: true, notArray: true }),
            ]
        }, async (req) => {
            return controllers.approvalInfoStudent.approval(req);
        }
    ),
]
