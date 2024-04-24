import { Schema, model } from "mongoose";
import { ISchools, ICourses, IStaffs } from ".";

export interface ILink_class_courses  {
    _id: any;
    status: number;
    schools: ISchools["_id"]; 
    courses: ICourses["_id"];
    staffs: IStaffs["_id"];
    classes: any;
}

const schema = new Schema({
    status: { type: Number, default: 1 },
    staffs: {type: Schema.Types.ObjectId, ref: "staffs"},
    courses: {type: Schema.Types.ObjectId, ref: "courses"},
    classes: {type: Schema.Types.ObjectId, ref: "classes"},
    schools: {type: Schema.Types.ObjectId, ref: "schools"}
}, {timestamps: true});

export const modelLinkClassCourse = model<ILink_class_courses>("link_class_courses", schema);