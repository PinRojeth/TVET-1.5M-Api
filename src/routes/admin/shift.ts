import validate, { CheckType } from '../../utils/validate_request';
import controllers from '../../controllers';
import { createDeleteRoute, createGetRoute, createPostRoute, createPatchRoute } from "../../utils";
import { pAdmin } from '../../utils/permissionAdmin';

let validates = [
    validate('name', { exist: true, }),
    // validate('shift_times', { isArray: true }).isLength({min: 1}),
    // validate('shift_times.*', { isMongoId: true }),
]

export default [
    createGetRoute("/admin/shift/check_exist", {
        authorized_permissions: [pAdmin.shift.read],
        validators: [
            validate('_id', { optional: true, isMongoId: true }, CheckType.query),
            validate('name', { exist: true, }, CheckType.query),
        ]   
        }, async (req) => {
        return controllers.shift.checkNameExist({ req });
        }
    ),
    createPostRoute("/admin/shift",
        {
            authorized_permissions: [pAdmin.shift.write],
            validators: validates
        }, async (req) => {
            return controllers.shift.create(req);
        }
    ),
    createPatchRoute("/admin/shift/:_id",
        {
            authorized_permissions: [pAdmin.shift.write],
            validators: [
                validate('_id', { isMongoId: true }, CheckType.param),
                ...validates
            ]   
        }, async (req) => {
            return controllers.shift.update(req);
        }
    ),
    // createGetRoute("/admin/shift/shift_time",
    //     {
    //         authorized_permissions: [pAdmin.shift.read],
    //     }, async (req) => {
    //         return await controllers.shiftTime.getMany({
    //             select: "-__v -updatedAt -createdAt",
    //             sort: { order : 1}
    //         })
    //     }
    // ),
    createGetRoute("/admin/shift/",
        {
            authorized_permissions: [pAdmin.shift.read],
        }, async (req) => {
            let query: any = { }
            if (req.query.search) {
                query.name = { $regex: req.query.search, $options: "i" };
            }
            return await controllers.shift.getMany({
                query,
                select: "-__v -updatedAt -createdAt",
                // populates: [
                //     {path: "shift_times", select: "name name_en"}
                // ],
                page: Number(req.query.page),
                limit: Number(req.query.limit),
            })
        }
    ),
    createGetRoute("/admin/shift/:_id",
        {
            authorized_permissions: [pAdmin.shift.read],
            validators: [
                validate('_id', { isMongoId: true }, CheckType.param),
            ]   
        }, async (req) => {
            let data = await controllers.shift.getOne({
                query: {
                    _id: req.params._id,  
                },
                // populates: [
                //     {path: "shift_times", select: "name name_en"}
                // ],
            })
            return controllers.shift.checkThrowNotFound(data);
        }
    ),
    createDeleteRoute("/admin/shift/:_id", {
        authorized_permissions: [pAdmin.shift.delete],
        validators: [
            validate('_id', { isMongoId: true }, CheckType.param),
        ]   
        }, async (req) => {
            return controllers.shift.delete(req);
        }
    )
]
