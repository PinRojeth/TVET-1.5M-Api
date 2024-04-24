// import { Model } from 'mongoose';
// import { ISubjects, ObjectId } from '../models';
// import EnumConstant from '../utils/enumConstant';
// import AbstractController from './abstract_controller';
// import CommonUtil from '../utils/common';

// export default class SubjectController extends AbstractController<ISubjects> {
//     model: Model<ISubjects>;
//     constructor(model: Model<ISubjects>) {
//         super(model);
//         this.model = model;
//     }

//     async create(req: any) {
//         let obj = new this.model(req.body)
//         obj.schools = req.body._user.schools;
//         let checkName = await this.checkNameExist({ req });
//         this.checkThrowAlreadyExist(checkName);
//         return this.model.create(obj)
//     }

//     async update(req: any) {
//         let id = req.params._id;
//         let obj = new this.model(req.body)
//         let [checkName, getObj] = await Promise.all([
//             this.checkNameExist({ req }),
//             this.getOne({
//                 query: { _id: id, schools: req.body._user.schools},
//             }),
//         ]) as [any, ISubjects];
//         this.checkThrowAlreadyExist(checkName);
//         this.checkThrowNotFound(getObj)
//         obj = CommonUtil.removeKeys(obj, ["_id", "schools", "status"])
//         let update = await this.model.findByIdAndUpdate(id, { $set: obj }, { new: true });
//         return this.checkThrowNotFound(update);
//     }

//     async delete(req: any) {
//         let _id = req.params._id;
//         let schools = req.body._user.schools;
//         let del = await this.model.findOneAndUpdate({ _id: _id, schools: schools, status: EnumConstant.ACTIVE }, { $set: { status: EnumConstant.DELETE } }, { new: true });
//         return this.checkThrowNotFound(del);
//     }

// }