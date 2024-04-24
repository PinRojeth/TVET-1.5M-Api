import { IUser_departments } from '../models';
import AbstractController from './abstract_controller';
import CommonUtil from '../utils/common';
import { Model } from 'mongoose';
import EnumConstant from '../utils/enumConstant';
import controllers from '.';

export default class Controller extends AbstractController<IUser_departments> {
    model: Model<IUser_departments>;
    constructor(model: Model<IUser_departments>) {
        super(model);
        this.model = model;
    }

    async create(req: any) {
        let data = new this.model(req.body);
        let [checkName ] = await Promise.all([ 
            this.checkNameExist({ req }),
        ])
        this.checkThrowAlreadyExist(checkName)
        return await this.model.create(data);
    }

    async update(req: any) {
        let id = req.params._id
        let data = new this.model(req.body); 
        let [getData, checkName] = await Promise.all([
            this.getOne({
                query: {
                    _id: id
                }
            }),
            this.checkNameExist({ req }),
        ])
        this.checkThrowNotFound(getData);
        this.checkThrowAlreadyExist(checkName)
        let obj = CommonUtil.removeKeys(data, ["_id"]);
        return this.model.findOneAndUpdate({ _id: id }, { $set: obj }, { new: true }); 
    }

    async delete(req: any) {
        let id = req.params._id
        let [getData, checkValidate] = await Promise.all([
            this.getOne({
                query: {
                    _id: id
                }
            }),
            controllers.staff.getOne({
                query: {
                    user_departments: id
                }
            })
        ]) 
        this.checkThrowNotFound(getData);
        if (checkValidate) {
            this.throwHttpError("failed to delete: this item is in used"); 
        }
        return this.model.findOneAndUpdate({ _id: id }, { $set: { status: EnumConstant.DELETE } }, { new: true });
    }
 
    
    async validateId(_id: any) {
        this.checkThrowNotFound(_id); 
        let data =await this.getOne({
            query: {_id: _id}
        })
        this.checkThrowNotFound(data); 
    }

}
