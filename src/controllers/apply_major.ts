import { IApply_majors, ObjectId } from '../models';
import AbstractController from './abstract_controller';
import CommonUtil from '../utils/common';
import { Model } from 'mongoose';
import EnumConstant from '../utils/enumConstant';
import controllers from '.';
export default class ApplyMajorController extends AbstractController<IApply_majors> {
    model: Model<IApply_majors>;
    constructor(model: Model<IApply_majors>) {
        super(model);
        this.model = model;
    }
    
    async create(req: any) {
        let [checkName, validateSector] = await Promise.all([
            this.checkNameExist({ req }),
            controllers.sector.getOne({
                query: {
                    _id: req.body.sectors
                }
            }),
        ]) 
        this.checkThrowAlreadyExist(checkName)
        controllers.sector.checkThrowNotFound(validateSector)
        let data = new this.model(req.body);
        return await this.model.create(data);
    }

    async update(req: any) {
        let id = req.params._id
        let [getData, checkName, validateSector] = await Promise.all([
            this.getOne({
                query: {
                    _id: id
                }
            }),
            this.checkNameExist({ req }),
            controllers.sector.getOne({
                query: {
                    _id: req.body.sectors
                }
            }),
        ])
        this.checkThrowNotFound(getData);
        this.checkThrowAlreadyExist(checkName)
        controllers.sector.checkThrowNotFound(validateSector)
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
            controllers.course.getOne({
                query: {
                    apply_majors: id
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
                    from: 'skills',
                    let: { id: "$apply_majors" },
                    pipeline: [
                        {
                            $match: {
                                $expr: { $eq: ["$_id", "$$id"] },
                                sectors: new ObjectId(req.query.sectors)
                            }
                        },
                    ],
                    as: 'apply_majors'
                }
            },
            {
                $unwind: { path: "$apply_majors"}
            },
            {
                $lookup: {
                    from: 'students',
                    let: { courseId: "$_id", stAmount: "$student_amount" },
                    pipeline: [
                        {
                            $match: {
                                $expr: { $eq: ["$courses", "$$courseId"] },
                                scholarship_status:EnumConstant.ACTIVE,
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
                    _id: "$apply_majors._id",
                    name: {$first: "$apply_majors.name"},
                    name_en: {$first: "$apply_majors.name_en"},
                    code: {$first: "$apply_majors.code"},
                }
            },
            { $match: matchSearch },
            { $sort: {_id: 1 }}
        ])
        return data;
    }
 

    async activeMajorByCourse(req: any) {
        let search = req.query.search;
        let schools = new ObjectId(req.query.schools);
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
                    from: 'skills',
                    let: { id: "$apply_majors" },
                    pipeline: [
                        {
                            $match: {
                                $expr: { $eq: ["$_id", "$$id"] },
                                schools: schools
                            }
                        },
                    ],
                    as: 'apply_majors'
                }
            },
            {
                $unwind: { path: "$apply_majors"}
            },
            {
                $lookup: {
                    from: 'students',
                    let: { courseId: "$_id", stAmount: "$student_amount" },
                    pipeline: [
                        {
                            $match: {
                                $expr: { $eq: ["$courses", "$$courseId"] },
                                status: EnumConstant.ACTIVE,
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
                    _id: "$apply_majors._id",
                    name: {$first: "$apply_majors.name"},
                    name_en: {$first: "$apply_majors.name_en"},
                    code: {$first: "$apply_majors.code"},
                }
            },
            { $match: matchSearch },
            { $sort: {_id: 1 }}
        ])
        return data;
    }

    async getApplyMajorForFilter(req: any) {
        let query: any = {
            status: EnumConstant.ACTIVE
        }
        return this.getManyNoCount({
            query: query,
            select:"name name_en code"
        })
    }
}
