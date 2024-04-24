import validate, { CheckType } from '../../utils/validate_request';
import controllers from '../../controllers';
import { createDeleteRoute, createGetRoute, createPostRoute, createPatchRoute } from "../../utils";
import { pAdmin } from '../../utils/permissionAdmin';

let validates = [
    validate('name', { exist: true, }),
]

export default [
    createGetRoute("/admin/user_department/check_exist", {
        authorized_permissions: [pAdmin.userDepartment.read],
        validators: [
            validate('_id', { optional: true, isMongoId: true }, CheckType.query),
            validate('name', { exist: true, }, CheckType.query),
        ]   
        }, async (req) => {
        return controllers.userDepartment.checkNameExist({ req });
        }
    ),
    createPostRoute("/admin/user_department",
        {
            authorized_permissions: [pAdmin.userDepartment.write],
            validators: validates
        }, async (req) => {
            return controllers.userDepartment.create(req);
        }
    ),
    createPatchRoute("/admin/user_department/:_id",
        {
            authorized_permissions: [pAdmin.userDepartment.write],
            validators: [
                validate('_id', { isMongoId: true }, CheckType.param),
                ...validates
            ]   
        }, async (req) => {
            return controllers.userDepartment.update(req);
        }
    ),
    createGetRoute("/admin/user_department/",
        {
            authorized_permissions: [pAdmin.userDepartment.read],
        }, async (req) => {
            let query: any = { }
            if (req.query.search) {
                query.name = { $regex: req.query.search, $options: "i" };
            }
            return await controllers.userDepartment.getMany({
                query,
                select: "-__v -updatedAt -createdAt",
                page: Number(req.query.page),
                limit: Number(req.query.limit),
            })
        }
    ),
    createGetRoute("/admin/user_department/:_id",
        {
            authorized_permissions: [pAdmin.userDepartment.read],
            validators: [
                validate('_id', { isMongoId: true }, CheckType.param),
            ]   
        }, async (req) => {
            let data = await controllers.userDepartment.getOne({
                query: {
                    _id: req.params._id,  
                },
            })
            return controllers.userDepartment.checkThrowNotFound(data);
        }
    ),
    createDeleteRoute("/admin/user_department/:_id", {
        authorized_permissions: [pAdmin.userDepartment.delete],
        validators: [
            validate('_id', { isMongoId: true }, CheckType.param),
        ]   
        }, async (req) => {
            return controllers.userDepartment.delete(req);
        }
    )
]
