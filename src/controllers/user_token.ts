import { IUser_tokens } from '../models';
import AbstractController from './abstract_controller';
import { Model } from 'mongoose';

const { refresh_token_duration_as_day } = process.env;

export default class UserTokenController extends AbstractController<IUser_tokens> {
    model: Model<IUser_tokens>;
    constructor(model: Model<IUser_tokens>) {
        super(model);
        this.model = model;
    }
    public async createToken(token: string, users: string, device_os: string, device_name: string) {
        let expAt = (Number(refresh_token_duration_as_day) * 24 * 60 * 60 * 1000) + new Date().getTime();
        let create = new this.model({ token: token, users: users, device_os: device_os, device_name: device_name, status: 1, create_at: new Date(), expire_at: expAt });
        return this.model.create(create);
    }
    public async getToken(token: string): Promise<IUser_tokens> {
        let getToken = await this.model.findOne({ token: token, status: 1 });
        if (!getToken) {
            throw this.throwHttpError('unauthorized');
        }
        if (getToken.expire_at < new Date().getTime()) {
            this.model.findOneAndUpdate({ _id: getToken._id }, { status: -1 });
            getToken.status = 2;
        }
        return getToken;
    }
    public async updateToken(token: string) {
        return this.model.findOneAndUpdate({ token: token },{ last_update: new Date() });
    }
    public async deleteOneByToken(token: string) {
        return this.model.findOneAndUpdate({ token: token, status : 1 }, { status: -1 });
    }
    public async deleletOtherDeviceToken(token: string, device: string) {
        
    }
}