import validate, { CheckType } from '../../utils/validate_request';
import controllers from '../../controllers';
import { createDeleteRoute, createGetRoute, createPostRoute, createPatchRoute } from "../../utils";
import { pAdmin } from '../../utils/permissionAdmin';

let validates = [
    validate('name', { exist: true, }),
]

export default [
    createGetRoute("/admin/sector/check_exist", {
        authorized_permissions: [pAdmin.sector.read],
        validators: [
            validate('_id', { optional: true, isMongoId: true }, CheckType.query),
            validate('name', { exist: true, }, CheckType.query),
        ]   
        }, async (req) => {
        return controllers.sector.checkNameExist({ req });
        }
    ),
    createPostRoute("/admin/sector",
        {
            authorized_permissions: [pAdmin.sector.write],
            validators: validates
        }, async (req) => {
            return controllers.sector.create(req);
        }
    ),
    createPatchRoute("/admin/sector/:_id",
        {
            authorized_permissions: [pAdmin.sector.write],
            validators: [
                validate('_id', { isMongoId: true }, CheckType.param),
                ...validates
            ]   
        }, async (req) => {
            return controllers.sector.update(req);
        }
    ),
    createGetRoute("/admin/sector/",
        {
            authorized_permissions: [pAdmin.sector.read],
        }, async (req) => {
            let query: any = { }
            if (req.query.search) {
                query.name = { $regex: req.query.search, $options: "i" };
            }
            return await controllers.sector.getMany({
                query,
                select: "-__v -updatedAt -createdAt",
                page: Number(req.query.page),
                limit: Number(req.query.limit),
            })
        }
    ),
    createGetRoute("/admin/sector/:_id",
        {
            authorized_permissions: [pAdmin.sector.read],
            validators: [
                validate('_id', { isMongoId: true }, CheckType.param),
            ]   
        }, async (req) => {
            let data = await controllers.sector.getOne({
                query: {
                    _id: req.params._id,  
                }
            })
            return controllers.sector.checkThrowNotFound(data);
        }
    ),
    createDeleteRoute("/admin/sector/:_id", {
        authorized_permissions: [pAdmin.sector.delete],
        validators: [
            validate('_id', { isMongoId: true }, CheckType.param),
        ]   
        }, async (req) => {
            return controllers.sector.delete(req);
        }
    )
]
