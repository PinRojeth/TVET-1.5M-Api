import validate, { CheckType } from '../../utils/validate_request';
import controllers from '../../controllers';
import { createDeleteRoute, createGetRoute, createPostRoute, createPatchRoute } from "../../utils";
import { pAdmin } from '../../utils/permissionAdmin';

let validates = [
    validate('name', { exist: true, }),
    validate('sectors', { isMongoId: true }),
    validate('fee', { optional: true, isNumeric: true }),
    validate('duration', { optional: true, isNumeric: true }),
    validate('student_amount', { optional: true, isNumeric: true }),
]

export default [
    createGetRoute("/admin/apply_major/check_exist", {
        authorized_permissions: [pAdmin.applyMajor.read],
        validators: [
            validate('_id', { optional: true, isMongoId: true }, CheckType.query),
            validate('name', { exist: true, }, CheckType.query),
        ]   
        }, async (req) => {
        return controllers.applyMajor.checkNameExist({ req });
        }
    ),
    createPostRoute("/admin/apply_major",
        {
            authorized_permissions: [pAdmin.applyMajor.write],
            validators: validates
        }, async (req) => {
            return controllers.applyMajor.create(req);
        }
    ),
    createPatchRoute("/admin/apply_major/:_id",
        {
            authorized_permissions: [pAdmin.applyMajor.write],
            validators: [
                validate('_id', { isMongoId: true }, CheckType.param),
                ...validates
            ]   
        }, async (req) => {
            return controllers.applyMajor.update(req);
        }
    ),
    createGetRoute("/admin/apply_major/",
        {
            authorized_permissions: [pAdmin.applyMajor.read],
        }, async (req) => {
            let query: any = { }
            if (req.query.search) {
                query.name = { $regex: req.query.search, $options: "i" };
            }
            let data = await controllers.applyMajor.getMany({
                query,
                populates: [
                    {path: "sectors", select: "name name_en code"}
                ],
                select: "-__v -updatedAt -createdAt",
                page: Number(req.query.page),
                limit: Number(req.query.limit),
                sort: {code: 1}
            })
            return data;
        }
    ),
    createGetRoute("/admin/apply_major/:_id",
        {
            authorized_permissions: [pAdmin.applyMajor.read],
            validators: [
                validate('_id', { isMongoId: true }, CheckType.param),
            ]   
        }, async (req) => {
            let data = await controllers.applyMajor.getOne({
                query: {
                    _id: req.params._id,  
                },
                populates: [
                    {path: "sectors", select: "name name_en code"}
                ],
            })
            return controllers.applyMajor.checkThrowNotFound(data);
        }
    ),
    createDeleteRoute("/admin/apply_major/:_id", {
        authorized_permissions: [pAdmin.applyMajor.delete],
        validators: [
            validate('_id', { isMongoId: true }, CheckType.param),
        ]   
        }, async (req) => {
            return controllers.applyMajor.delete(req);
        }
    )
]
