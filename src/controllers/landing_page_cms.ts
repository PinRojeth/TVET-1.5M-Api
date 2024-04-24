import { Model } from 'mongoose';
import { ILanding_page_cms, ObjectId } from '../models';
import AbstractController from './abstract_controller';
import CommonUtil from '../utils/common';

export default class Controller extends AbstractController<ILanding_page_cms> {
    model: Model<ILanding_page_cms>;
    constructor(model: Model<ILanding_page_cms>) {
        super(model);
        this.model = model;
    }

    async update(req: any) {
        let data = CommonUtil.removeKeys(req.body, ["_id"]);
        return await this.model.findOneAndUpdate({}, { $set: data }, { new: true, upsert: true });
    }
}