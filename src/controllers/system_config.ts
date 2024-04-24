import { Model } from 'mongoose';
import { ISystem_configs, ObjectId } from '../models';
import AbstractController from './abstract_controller';

export default class Controller extends AbstractController<ISystem_configs> {
    model: Model<ISystem_configs>;
    constructor(model: Model<ISystem_configs>) {
        super(model);
        this.model = model;
    }

    async updateToken(req: any) {
        return await this.model.findOneAndUpdate({}, { $set: {nsaf_token: req.body.nsaf_token} }, { new: true, upsert: true });
    }

    async getToken() {
        let getData = await this.getOne({ query: {} });
        if (getData) {   
            return getData.nsaf_token;
        } else {
            return ""
        }
    }
    async getChangeCourse() {
        let getData = await this.getOne({ query: {} });
        if (getData) {   
            return getData.open_change_course;
        } else {
            return ""
        }
    }
}