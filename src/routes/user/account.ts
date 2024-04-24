import controllers from "../../controllers";
import { createGetRoute, createPostRoute, formPatchRoute } from "../../utils";
import EnumConstant from "../../utils/enumConstant";
import validate_request, { CheckType } from "../../utils/validate_request";
import AuthHandlers from "../../middleware/auth-handlers";
import { pStudent } from "../../utils/permissionStudent";
const authHandler = new AuthHandlers();

export default [
    {   //Login
        path: "/user/account/login",
        method: "post",
        validators: [
            validate_request("username", { exist: true }),
            validate_request("password",{exist: true}),
        ],
        handler: authHandler.authenticateLocal
    },
    {
        path: "/user/account/renew_token",
        method: "post",
        handler: authHandler.renewToken
    },   
    createPostRoute("/user/account/logout",
        {}, async (req) => { 
            return controllers.user.logout(req);
        }
    ),
    createPostRoute("/user/account/change_password",
        {
            authorized_permissions: [pStudent.account.write],
            validators: [
                validate_request("old_password", { exist: true }),
                validate_request("new_password", { exist: true }).isLength({min: 8}),
            ],
        }, async (req) => {
            return controllers.user.changePassword(req);
        }
    ),
    createGetRoute("/user/account/info",
        {
            authorized_permissions: [pStudent.account.read]
        }, async (req) => {
            req.params._id = req.body._user._id;
            return controllers.student.getDetail(req);
        }
    ),
    formPatchRoute("/user/account/info",
        {
            authorized_permissions: [pStudent.account.write],
            validators: [
                validate_request('first_name', { exist: true }),
                validate_request('last_name', { exist: true }),
                validate_request("gender", { exist: true }).isIn([EnumConstant.Gender.MALE, EnumConstant.Gender.FEMALE]).withMessage("invalid gender"),
                validate_request("email", { optional: true, email: true }),
                validate_request('nationality', {optional: true,  isNumeric: true }),
                validate_request('ethnicity', {optional: true,  isNumeric: true }),
                validate_request("place_of_birth", { optional: true,isJSON: true }),
                validate_request("address", { optional: true, isJSON: true }),
                validate_request("remove_profile_image", { optional: true, isBoolean: true }),
            ],
        }, async (req) => {
            req.params._id = req.body._user._id;
            let data = await controllers.staff.update(req);
            return data; 
        }
    ),
    createGetRoute('/user/account/check_existed_user',
        {
            validators: [
                validate_request('username', { exist: true }, CheckType.query)
            ]
        },
        async (req) => {
            return await controllers.user.checkUsername(req.query.username as string);
        }
    ),
]