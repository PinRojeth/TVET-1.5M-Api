import controllers from "../../controllers";
import { createDeleteRoute, createGetRoute, createPatchRoute, createPostRoute } from "../../utils";
import validate_request, { CheckType } from "../../utils/validate_request";
import { pAdmin } from "../../utils/permissionAdmin";
import EnumConstant from "../../utils/enumConstant";

let validates = [
    // validate_request("year", {isNumeric: true}), 
    // validate_request("month", {isNumeric: true}).isFloat({min: 1, max: 12}), 
    validate_request("status", {isNumeric: true}).isIn([EnumConstant.ACTIVE, EnumConstant.REJECTED]), 
    validate_request("paid_amount", { optional: true, isNumeric: true }), 
    validate_request("attendance_submits", {isMongoId: true}),
]

export default [
    createGetRoute("/admin/scholarship_payments/check_exist",
        {
            authorized_permissions: [pAdmin.scholarshipPayment.read],
            validators: [
                validate_request("students", {isMongoId: true}, CheckType.query),
                validate_request("attendance_submits", {isMongoId: true}, CheckType.query),
                // validate_request("month", {isNumeric: true}, CheckType.query),
            ]
        }, async (req) => {
            let { students, year, month } = req.query;
            return controllers.scholarshipPayment.checkNameExist({query: {students: students, year: year, month: month}})
        }
    ),
    createPostRoute("/admin/scholarship_payments",
        {
            authorized_permissions: [pAdmin.scholarshipPayment.write],
            validators: [
                ...validates,
                validate_request("students", {isMongoId: true}), 
            ]
        }, async (req) => {
            return controllers.scholarshipPayment.create(req);
        }
    ),
    createPatchRoute("/admin/scholarship_payments/:_id",
        {
            authorized_permissions: [pAdmin.scholarshipPayment.write],
            validators: [
                ...validates,
                validate_request("_id", {isMongoId: true}, CheckType.param),
            ]
        }, async (req) => {
            return controllers.scholarshipPayment.update(req);
        }
    ),
    createGetRoute("/admin/scholarship_payments",
        {
            authorized_permissions: [pAdmin.scholarshipPayment.read],
            validators: [
                validate_request("students", {isMongoId: true}, CheckType.query),
            ]
        }, async (req) => {
            let { students, year } = req.query
            let query: any = {
                students: students,
            }
            if (year) {
                query.year = year
            }
            return controllers.scholarshipPayment.getMany({
                query: query,
                select: "-__v -createdAt -updatedAt"
            })
        }
    ),
    createDeleteRoute("/admin/scholarship_payments/:_id",
        {
            authorized_permissions: [pAdmin.scholarshipPayment.write],
            validators: [
                validate_request("_id", {isMongoId: true}, CheckType.param),
            ]
        }, async (req) => {
            return controllers.scholarshipPayment.delete(req);
        }
    )

]
