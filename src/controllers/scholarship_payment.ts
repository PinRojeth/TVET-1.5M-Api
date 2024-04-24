import { Model } from 'mongoose';
import { IScholarship_payments } from '../models';
import EnumConstant from '../utils/enumConstant';
import AbstractController from './abstract_controller';
import controllers from '.';
import CommonUtil from '../utils/common';

export default class Controller extends AbstractController<IScholarship_payments> {
    model: Model<IScholarship_payments>;
    constructor(model: Model<IScholarship_payments>) {
        super(model);
        this.model = model;
    }

    async create(req: any) {
        let { students, attendance_submits } = req.body;
        let [getStudent, getData] = await Promise.all([
            controllers.attendanceSubmit.getOne({
                query: {
                    students: { $in: [students] },
                    _id: attendance_submits
                    // month: month,
                    // year: year,
                },
            }),
            this.getOne({
                query: {
                    students: students,
                    attendance_submits: attendance_submits,
                    status: {$ne : EnumConstant.DELETE}
                }
            }),
        ])
        this.checkThrowAlreadyExist(getData); 
        controllers.student.checkThrowNotFound(getStudent);
        let data = new this.model(req.body);
        data.staffs = req.body._user._id;
        data.schools = getStudent.schools;
        return this.model.create(data);
    }

    async update(req: any) {
        let _id = req.params._id;
        let getData = await this.getOne({
            query: {
                _id: _id,
                status: { $ne: EnumConstant.DELETE },
            }
        })
        this.checkThrowNotFound(getData); 
        let data = new this.model(req.body);
        let json = CommonUtil.removeKeys(data,["_id", "schools", "students", "attendance_submits"])
        return this.model.findOneAndUpdate({ _id: _id}, { $set: json }, {new: true});
    }

    async delete(req: any) {
        let query: any = {
            _id: req.params._id,
            status: {$ne : EnumConstant.DELETE}
        };
        if (req.body._user.schools) {
            query.schools = req.body._user.schools;
        }
        let getAtt = await this.getOne({
            query: query
        }) 
        this.checkThrowNotFound(getAtt); 
        return this.model.findOneAndUpdate({ _id: getAtt._id }, { $set: { status: EnumConstant.DELETE } }, { new: true });
    }
    
}