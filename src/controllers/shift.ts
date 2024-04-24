import { IShifts, ObjectId } from '../models';
import AbstractController from './abstract_controller';
import CommonUtil from '../utils/common';
import { Model } from 'mongoose';
import EnumConstant from '../utils/enumConstant';
import controllers from '.';

export default class Controller extends AbstractController<IShifts> {
    model: Model<IShifts>;
    constructor(model: Model<IShifts>) {
        super(model);
        this.model = model;
    }

    async create(req: any) {
        let data = new this.model(req.body);
        // data.devide_length = data.shift_times.length;
        // if (data.shift_times.length != new Set(data.shift_times).size) {
        //     this.throwHttpError("invalid shift_times data");
        // }
        let [checkName, ] = await Promise.all([ //countTime
            this.checkNameExist({ req }),
            // controllers.shiftTime.countDocument({_id: {$in : data.shift_times}}),
        ])
        // if (countTime != data.shift_times.length) {
        //     this.throwHttpError("invalid shift_times data");
        // }
        this.checkThrowAlreadyExist(checkName)
        return await this.model.create(data);
    }

    async update(req: any) {
        let id = req.params._id
        let data = new this.model(req.body); 
        // data.devide_length = data.shift_times.length;
        // if (data.shift_times.length != new Set(data.shift_times).size) {
        //     this.throwHttpError("invalid shift_times data");
        // }
        let [getData, checkName] = await Promise.all([ //countTime
            this.getOne({
                query: {
                    _id: id
                }
            }),
            this.checkNameExist({ req }),
            // controllers.shiftTime.countDocument({_id: {$in : data.shift_times}}),
        ])
        this.checkThrowNotFound(getData);
        this.checkThrowAlreadyExist(checkName)
        // if (countTime != data.shift_times.length) {
        //     this.throwHttpError("invalid shift_times data");
        // }
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
            controllers.course.getOne({
                query: {
                    shifts: id
                }
            })
        ]) 
        this.checkThrowNotFound(getData);
        if (checkValidate) {
            this.throwHttpError("failed to delete: this major is used in course"); 
        }
        return this.model.findOneAndUpdate({ _id: id }, { $set: { status: EnumConstant.DELETE } }, { new: true });
    }

    async lmsGetList(req: any) {
        let search = req.query.search;
        let matchSearch: any = {}
        if (search) {
            matchSearch.$or = CommonUtil.searchNameCode(search);
        }
        let data = await this.models.course.aggregate([
            {
                $match: {
                    status: EnumConstant.ACTIVE, 
                    registation_end: { $gte: new Date() },
                    apply_majors: new ObjectId(req.query.apply_majors)
                }
            },
            {
                $lookup: {
                    from: 'students',
                    let: { courseId: "$_id", stAmount: "$student_amount" },
                    pipeline: [
                        {
                            $match: {
                                $expr: { $eq: ["$courses", "$$courseId"] },
                                scholarship_status: EnumConstant.ACTIVE,
                            }
                        },
                        {
                            $count: "count"
                        },
                    ],
                    as: 'students'
                }
            },
            {
                $addFields: {
                    appliedCount: { 
                        "$ifNull": [{ "$arrayElemAt": ["$students.count", 0] }, 0]
                    },
                }
            },
            {
                $match: {
                    $expr: {$gt: ["$student_amount", "$appliedCount"]}
                }
            },
            {
                $group: {
                    _id: "$shifts"
                }
            },
            {
                $lookup: {
                    from: 'shifts',
                    let: { ids: "$_id" },
                    pipeline: [
                        {
                            $match: {
                                $expr: { $eq: ["$_id", "$$ids"] } ,
                            }
                        },
                        {
                            $project: {
                                name: 1, name_en: 1, code: 1,
                            }
                        }
                    ],
                    as: 'shifts'
                }
            },
            {
                $unwind: { path: "$shifts"}
            },
            { $replaceRoot: { newRoot: "$shifts" } },
            { $match: matchSearch },
            { $sort: {_id: 1 }}
        ])
        return data;
    }
 
}
