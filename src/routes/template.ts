// import controllers from "../controllers";
// import models from "../models";
// import { createDeleteRoute, createGetRoute, createPatchRoute, createPostRoute } from "../utils";
// import CommonUtil from "../utils/common";
// import EnumConstant from "../utils/enumConstant";
// import { pAdmin } from "../utils/permissionAdmin";
// import validate_request, { CheckType } from "../utils/validate_request";

// export default [
//     createGetRoute('/studio/subject/check_exist',
//         {
//             authorized_permissions: [pAdmin.subject.read],
//             validators: [
//                 validate_request("_id", { optional: true, isMongoId: true }, CheckType.query),
//                 validate_request('name', { exist: true }, CheckType.query)
//             ]
//         }, async (req) => {
//             return controllers.subject.checkNameExist({ req });
//         }
//     ),
//     createGetRoute("/studio/subject",
//         {
//             authorized_permissions: [pAdmin.subject.read],
//         }, async (req) => {
//             let { limit, page, search } = req.query;
//             let query: any = {
//                 schools: req.body._user.schools
//             }
//             if (search) {
//                 query.$or = CommonUtil.searchNameCode(search);
//             }
//             return await controllers.subject.getMany({
//                 query: query,
//                 select: "-__v",
//                 limit: limit,
//                 page: page
//             })
//         }
//     ),
//     createPostRoute("/studio/subject",
//         {
//             authorized_permissions: [pAdmin.subject.write],
//             validators: [
//                 validate_request("name", { exist: true }),
//             ]
//         }, async (req) => {
//             return await controllers.subject.create(req);
//         }
//     ),
//     createGetRoute("/studio/subject/:_id",
//         {
//             authorized_permissions: [pAdmin.subject.read],
//             validators: [
//                 validate_request("_id", { isMongoId: true }, CheckType.param)
//             ]
//         }, async (req) => {
//             let subject = await controllers.subject.getOne({
//                 query: { _id: req.params._id },
//             })
//             return controllers.subject.checkThrowNotFound(subject);
//         }
//     ),
//     createPatchRoute("/studio/subject/:_id",
//         {
//             authorized_permissions: [pAdmin.subject.write],
//             validators: [
//                 validate_request("_id", { isMongoId: true }, CheckType.param),
//                 validate_request("name", { exist: true }),
//             ]
//         }, async (req) => {
//             return await controllers.subject.update(req);
//         }
//     ),

//     createDeleteRoute("/studio/subject/:_id",
//         {
//             authorized_permissions: [pAdmin.subject.delete],
//             validators: [
//                 validate_request("_id", { exist: true, isMongoId: true }, CheckType.param),
//             ]
//         }, async (req) => {
//             return await controllers.subject.delete(req);
//         }
//     )
// ]