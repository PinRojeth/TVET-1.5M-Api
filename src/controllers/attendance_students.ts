import { Model } from 'mongoose';
import { IAttendance_students, ObjectId } from '../models';
import AbstractController from './abstract_controller';
import controllers from '.';
import CommonUtil from '../utils/common';
import EnumConstant from '../utils/enumConstant';

export default class Controller extends AbstractController<IAttendance_students> {
    model: Model<IAttendance_students>;
    constructor(model: Model<IAttendance_students>) {
        super(model);
        this.model = model;
    }

    async getDetailBySubmit(req: any) {
        let { students, attendance_submits } = req.query;
        let getSubmit = await controllers.attendanceSubmit.getOne({
            query: {
                _id: attendance_submits, students: { $in: students }
            }
        })
        controllers.attendanceSubmit.checkThrowNotFound(getSubmit);
        let getData = await this.getManyNoCount({
            query: {
                date: { $gte: getSubmit.start_date, $lte: getSubmit.end_date },
                students: students,
            },
            sort: {
                date: 1,
            },
            select: "-__v -updatedAt -createdAt -schools"
        })
        let json = CommonUtil.JSONParse(getData);
        return json;
    }
            // if (getSubmit.type_projects != EnumConstant.TypeProject.SMS) {
                    // for (var i = 0; i < json.length; i++){
            //     let d = new Date();
            //     d.setFullYear(json[i].year, json[i].month - 1, json[i].day)
            //     json[i].date = d
            // }
        // } else {
        //     let studentClass = getSubmit.attendance_data.find((obj) => {
        //         return String(obj.students) == String(students)
        //     })?.classes;      
        //     let startDate = new Date(getSubmit.year, getSubmit.month - 1, 1, 0, 0, 0);
        //     let endDate = new Date(getSubmit.year, getSubmit.month, 0, 23, 59, 59);
        //     let query: any = {
        //         status: EnumConstant.ACTIVE,
        //         classes: studentClass,
        //         date: { $gte: startDate, $lte: endDate },
        //     }

        //     let data = await this.models.smsAttendanceItem.aggregate([
        //         {
        //             $match: query
        //         },
        //         {
        //             $lookup: {
        //                 from: 'student_attendance_lists',
        //                 let: { id: "$student_attendance_lists" },
        //                 pipeline: [
        //                     {
        //                         $match: {
        //                             $expr: { $eq: ["$_id", "$$id"] },
        //                             status: EnumConstant.ACTIVE,
        //                         }
        //                     },
        //                     {
        //                         $project: {
        //                             class_subjects: 1, start_time: 1, end_time: 1, date: 1, subjects: 1
        //                         }
        //                     }
        //                 ],
        //                 as: 'attendance_lists'
        //             }
        //         },
        //         {
        //             $unwind: {path: "$attendance_lists"}
        //         },
        //         {
        //             $sort: {
        //                 "attendance_lists.date": -1, "attendance_lists.start_time": 1,
        //             }
        //         },
        //         {
        //             $project: {
        //                 student_attendance_lists: 0, updatedAt: 0, __v : 0, 
        //             }
        //         },
        //         this.facetAggregate({skip: skip, limit: limit})
        //     ]);
        //     return this.facetData(data,
        //         [
        //             {path: "attendance_lists.subjects", model: "subjects", select: "name code color"}
        //         ]
        //     );
        // }
    

    async getListByStudent(req: any) {
        let query: any = {
            status: EnumConstant.ACTIVE,
            students: new ObjectId(req.params._id)
        }
        let data = await this.model.aggregate([
            {
                $match: query
            },
            {
                $group: {
                    _id: {
                        year: "$year",
                        month: "$month",
                    },
                    divide: { $sum: 1 },
                    total_score: { $sum: "$attendance_score"}
                }
            },
            {
                $project: {
                    month: "$_id.month",
                    year: "$_id.year",
                    average_attendance: {$round : [{ $divide: ["$total_score", "$divide"] }, 2]}
                }
            }
        ])
        return data; 
    }

    async getDetailByStudent(req: any) {
        let {  year, month } = req.query; 
        let getData = await this.getManyNoCount({
            query: {
                month: month,
                year: year,
                students: req.params._id,
            },
            sort: {
                day: 1,
            },
            select:"-__v -updatedAt -createdAt -schools"
        })
        let json = CommonUtil.JSONParse(getData);
        for (var i = 0; i < json.length; i++){
            let d = new Date();
            d.setFullYear(json[i].year, json[i].month - 1, json[i].day)
            json[i].date = d
        }
        return json;
    }
}