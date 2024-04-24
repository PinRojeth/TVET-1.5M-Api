import { Model } from 'mongoose';
import { IRequest_timelines } from '../models';
import EnumConstant from '../utils/enumConstant';
import AbstractController from './abstract_controller';
import controllers from '.';
import CommonUtil from '../utils/common';

export default class Controller extends AbstractController<IRequest_timelines> {
    model: Model<IRequest_timelines>;
    constructor(model: Model<IRequest_timelines>) {
        super(model);
        this.model = model;
    }

    async getList(req: any) {
        let students = req.params._id;
        let data = await this.getManyNoCount({
            query: {
                students: students,
                status: { $ne: EnumConstant.DELETE },
                timeline_type: {$in : Object.values(EnumConstant.TimelineType)}
            },
            populates: [
                {path: "staffs", select: controllers.staff.selectData},
                {path: "students", select: controllers.student.selectData},
            ],
            select: "-__v"
        })
        let json = CommonUtil.JSONParse(data);
        for (var i = 0; i < json.length; i++){
            json[i].name = this.timelineTypeToString(json[i].status, json[i].timeline_type);
            if (json[i].staffs) {
                json[i].create_by = json[i].staffs;
            } else {
                json[i].create_by = json[i].students
            }
            delete json[i].students;
            delete json[i].staffs;
        }
        return json
    }
    private timelineTypeToString(status: number, timelineType: number) {
        let textStatus = "សំណើ";
        if (status == EnumConstant.ACTIVE) {
            textStatus = "អនុម័ត"
        }else if (status == EnumConstant.REJECTED) {
            textStatus = "បដិសេធ"
        } else if (status == EnumConstant.QUIT) {
            textStatus = "បានចាកចេញ"
        } else if (status == EnumConstant.RESUME_STUDY) {
            textStatus = "បានបន្ត"
        }
        if (timelineType == EnumConstant.TimelineType.VERIFY) {
            if (status == EnumConstant.ACTIVE) {
                textStatus = "ឯកភាព"
            }else  if (status == EnumConstant.REJECTED) {
                textStatus = "មិនឯកភាព"
            }
        }
        let scholarshipText;
        if (timelineType == EnumConstant.TimelineType.SCHOLARSHIP) {
            scholarshipText = "អាហារូបករណ៍"
        }else if (timelineType == EnumConstant.TimelineType.VERIFY) {
            scholarshipText = "ប្រវត្តិរូប"
        }else if (timelineType == EnumConstant.TimelineType.IDPOOR) {
            scholarshipText = "​ម.ជ.ជ"
        }else if (timelineType == EnumConstant.TimelineType.APPROVALINFO) {
            scholarshipText = "អគ្គ អ.ប.វ"
        }
        return textStatus + " " + scholarshipText;
    }
}