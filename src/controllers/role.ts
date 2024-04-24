import { Model } from 'mongoose';
import AbstractController from './abstract_controller';
import { IRoles} from '../models';
import EnumConstant, { Role } from '../utils/enumConstant';
import CommonUtil from '../utils/common';

export default class Controller extends AbstractController<IRoles> {
    model: Model<IRoles>;
    constructor(model: Model<IRoles>) {
        super(model);
        this.model = model;
    }
    
    // async validateRole(roles: number) {
    //     let query: any = {
    //         _id: roles
    //     }
    //     let getRole = await this.getOne({ query: query });
    //     this.checkThrowNotFound(getRole);
    // }

    async validate(req: any, roles: number) {
        let getRoleId = req.body._user.roles._id;
        let validRoles : number[] = []
        if (getRoleId == Role.admin._id) {
            validRoles = [Role.admin._id, Role.school._id, Role.tvet._id, Role.verifier._id, Role.viewer._id, Role.teacher._id, Role.officer._id, Role.read_report._id]
        } else if (getRoleId == Role.school._id) {
            validRoles = [Role.school._id, Role.teacher._id]
        } else if (getRoleId == Role.nsaf._id) {
            validRoles = [Role.nsaf._id]
        } else {
            let query: any = {
                _id: roles
            }
            let getRole = await this.getOne({ query: query });
            this.checkThrowNotFound(getRole);
            return {}
        }
        if (!validRoles.includes(roles)) {
            this.checkThrowNotFound(null);
        }
    }

    async getAvailableRole(req: any) : Promise<[IRoles[], number]> {
        let query: any = {
            status: EnumConstant.ACTIVE
        }
        let getRoleId = req.body._user.roles._id;
        if (getRoleId == Role.admin._id) {
            query._id = { $in: [Role.admin._id, Role.school._id, Role.tvet._id, Role.verifier._id, Role.viewer._id, Role.teacher._id, Role.officer._id, Role.read_report._id] }
        } else if (getRoleId == Role.school._id) {
            query._id = { $in: [Role.school._id, Role.teacher._id] }
        } else if (getRoleId == Role.nsaf._id) {
            query._id = { $in: [Role.nsaf._id] }
        } else if (getRoleId == Role.root._id) {
            query._id = { $in: [Role.root._id, Role.admin._id, Role.school._id, Role.tvet._id, Role.verifier._id, Role.viewer._id, Role.teacher._id, Role.officer._id, Role.read_report._id ] }
        }
        let [data,count] = await this.getMany({
            query: query,
            sort: {
                _id: 1,
            },
            select: "-permissions -__v -updatedAt -createdAt -sms_permissions"
        })
        let json = CommonUtil.JSONParse(data);
        for (var i = 0; i < json.length; i++){
            if (json[i]._id == Role.school._id || json[i]._id == Role.teacher._id) {
                json[i].schools = true;
            }
            if (json[i]._id == Role.officer._id) {
                json[i].user_departments = true;
            }
        }
        return [json, count]
    }
    
}