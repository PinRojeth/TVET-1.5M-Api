import EnumConstant from "../../utils/enumConstant";
import controllers from "../../controllers";
import { createGetRoute, createPostRoute, formPatchRoute, formPostRoute } from "../../utils";
import validate_request, { CheckType } from "../../utils/validate_request";
import { pAdmin } from "../../utils/permissionAdmin";

function validationRequst() {
    return [
        validate_request('first_name', { exist: true }),
        validate_request('last_name', { exist: true }),
        validate_request("phone_number", { optional: true, isPhoneNumber: true }),
        validate_request("email", { optional: true, email: true }),
        validate_request("profile_image", { optional: true, isMongoId: true }),
        validate_request("gender", { optional: true }).isIn([EnumConstant.Gender.MALE, EnumConstant.Gender.FEMALE]).withMessage("invalid gender"),
        validate_request("roles", { isNumeric: true }),
        validate_request('nationality', { optional: true, isNumeric: true }),
        validate_request('ethnicity', { optional: true, isNumeric: true }),
        validate_request("place_of_birth", { optional: true, isJSON: true }),
        validate_request("address", { optional: true, isJSON: true }),
        validate_request("date_of_birth", { optional: true, isDate: true }),
        validate_request("schools", { optional: true, isMongoId: true }),
        validate_request("user_departments", { optional: true, isMongoId: true }),
    ]
}

export default [
    createGetRoute("/admin/staff/filter_data",
        {
            authorized_permissions: [pAdmin.staff.read],
        }, async (req) => {
            return controllers.staff.filterData(req); 
        }
    ),
    createGetRoute("/admin/staff/available_role",
        {
            authorized_permissions: [pAdmin.staff.read],
        }, async (req) => {
            return controllers.role.getAvailableRole(req);
        }
    ),
    formPostRoute("/admin/staff",
        {
            authorized_permissions: [pAdmin.staff.write],
            validators: [
                validate_request('username', { exist: true }).isLength({ min: 6 }).withMessage("username must be at least 6 characters"),
                validate_request('password', { exist: true }).isLength({ min: 8 }).withMessage("password must be at least 8 characters"),
                ...validationRequst(),
            ]
        }, async (req) => {
            return controllers.staff.create(req);
        }
    ),
    createPostRoute('/admin/staff/reset_password',
        {
            authorized_permissions: [pAdmin.staff.resetPwd],
            validators: [
                validate_request('staffs', { isMongoId: true }),
                validate_request('new_password', { exist: true }).isLength({ min: 8 }).withMessage("password at least 8 length")
            ]
        }, async (req) => {
            return controllers.user.resetStaffPassword(req);
        }
    ),
    createGetRoute("/admin/staff/",
        {
            authorized_permissions: [pAdmin.staff.read],
            validators: [
                validate_request("schools", { optional: true, isMongoId: true }, CheckType.query),
                validate_request("status", { optional: true, isNumeric: true }, CheckType.query),
                validate_request("search", { optional: true }, CheckType.query),
                validate_request("gender", { optional: true }, CheckType.query).isIn([EnumConstant.Gender.MALE, EnumConstant.Gender.FEMALE]).withMessage("invalid gender"),
                validate_request("roles", { optional: true, isNumeric: true }, CheckType.query),
            ]
        }, async (req) => {
            return controllers.staff.getList(req);
        }
    ),

    createPostRoute("/admin/staff/set_active",
        {
            authorized_permissions: [pAdmin.staff.setActive],
            validators: [
                validate_request("staffs", { isMongoId: true }),
                validate_request("status", { exist: true }).isIn([EnumConstant.ACTIVE, EnumConstant.DISABLED]).withMessage("invalid status"),
            ]
        }, async (req) => {
            return controllers.staff.setActive(req);
        }
    ),
    formPatchRoute('/admin/staff/:_id',
        {
            authorized_permissions: [pAdmin.staff.write],
            validators: [
                validate_request('_id', { isMongoId: true }, CheckType.param),
                validate_request("remove_profile_image", { optional: true, isBoolean: true }),
                validate_request("remove_cv_file", { optional: true, isBoolean: true }),
                ...validationRequst(),
            ]
        }, async (req) => {
            return controllers.staff.update(req);
        }
    ),
    createGetRoute("/admin/staff/:_id",
        {
            authorized_permissions: [pAdmin.staff.read],
            validators: [
                validate_request("_id", { exist: true, isMongoId: true }, CheckType.param)
            ]
        }, async (req) => {
            return controllers.staff.getStaffOne(req);
        }
    )
]
