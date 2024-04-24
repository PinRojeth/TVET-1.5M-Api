import { ISectors } from '../models';
import AbstractController from './abstract_controller';
import CommonUtil from '../utils/common';
import { Model } from 'mongoose';
import EnumConstant from '../utils/enumConstant';
import controllers from '.';

export default class ApplyMajorController extends AbstractController<ISectors> {
    model: Model<ISectors>;
    constructor(model: Model<ISectors>) {
        super(model);
        this.model = model;
    }

    async create(req: any) {
        let checkName = await this.checkNameExist({ req });
        this.checkThrowAlreadyExist(checkName)
        let data = new this.model(req.body);
        return await this.model.create(data);
    }

    async update(req: any) {
        let id = req.params._id
        let [getData, checkName] = await Promise.all([
            this.getOne({
                query: {
                    _id: id
                }
            }),
            this.checkNameExist({ req })
        ])
        this.checkThrowNotFound(getData);
        this.checkThrowAlreadyExist(checkName)
        let data = new this.model(req.body); 
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
            controllers.applyMajor.getOne({
                query: {
                    sectors: id
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
                    registation_end: {$gte : new Date()},
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
                    _id: "$apply_majors"
                }
            },
            {
                $lookup: {
                    from: 'skills',
                    let: { ids: "$_id" },
                    pipeline: [
                        {
                            $match: {
                                $expr: { $eq: ["$_id", "$$ids"] } ,
                            }
                        },
                        {
                            $project: {
                                sectors: 1
                            }
                        }
                    ],
                    as: 'apply_majors'
                }
            },
            {
                $unwind: { path: "$apply_majors"}
            },
            {
                $group: {
                    _id: "$apply_majors.sectors"
                }
            },
            {
                $lookup: {
                    from: 'sectors',
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
                    as: 'sectors'
                }
            },
            {
                $unwind: { path: "$sectors"}
            },
            { $replaceRoot: { newRoot: "$sectors" } },
            { $match: matchSearch },
            { $sort: {_id: 1 }}
        ])
        return data;
    }

}
