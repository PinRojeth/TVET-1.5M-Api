import { Schema, Document, model } from "mongoose";
import { IApply_majors } from "./apply_majors";
import { ISchools } from "./schools";
import { IStaffs } from "./staffs";
import { IShifts } from "./shifts";

export interface ICourses extends Document {
    status: number;
    code: string;
    duration: number;
    fee: number;
    student_amount: number;
    registation_start: Date;
    registation_end: Date;
    course_start: Date;
    course_end: Date;
    apply_majors: IApply_majors["_id"];
    schools: ISchools["_id"];
    staffs: IStaffs["_id"];
    shifts: IShifts["_id"];
    requirement: string;
    archive: number;
}

const schema = new Schema({
    status: { type: Number, default: 1 },
    requirement: String,
    duration: Number,
    fee: Number,
    code: String,
    registation_start: Date,
    registation_end: Date,
    course_start: Date,
    course_end: Date,
    student_amount: Number,
    apply_majors: { type: Schema.Types.ObjectId, ref: "skills" },
    shifts: { type: Schema.Types.ObjectId, ref: "shifts" },
    schools: { type: Schema.Types.ObjectId, ref: "schools" },
    staffs: { type: Schema.Types.ObjectId, ref: "staffs" },
    archive: Number,
}, {timestamps: true});

export const modelCourse = model<ICourses>("courses", schema);