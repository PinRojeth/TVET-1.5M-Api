import { Schema, model } from "mongoose";
import { ICourses, ISchools, IStaffs } from ".";

export interface IAttendance_lists {
    _id: any;
    status: number; 
    schools: ISchools["_id"];
    staffs: IStaffs["_id"];
    courses: ICourses["_id"];
    year: number;
    month: number;
    day: number; 
    date: Date;
}

const schema = new Schema({
    status: { type: Number, default: 1 },
    staffs:{ type: Schema.Types.ObjectId, ref: "staffs" },
    schools: { type: Schema.Types.ObjectId, ref: "schools" },
    courses: { type: Schema.Types.ObjectId, ref: "courses" },
    year: Number,
    month: Number,
    day: Number,
    date: Date,
}, { timestamps: true });

export const modelAttendanceList = model<IAttendance_lists>("attendance_lists", schema);