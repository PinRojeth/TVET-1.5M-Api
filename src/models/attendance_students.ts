import { Schema, model } from "mongoose";
import { IAttendance_lists, ISchools, IStaffs, IStudents } from ".";

export interface IAttendance_students {
    _id: any;
    status: number; 
    schools: ISchools["_id"];
    students: IStudents["_id"]; 
    attendance_score: number;
    attendance_lists: IAttendance_lists["_id"];
    year: number;
    month: number;
    day: number; 
    date: Date; 
}

const schema = new Schema({
    status: { type: Number, default: 1 },
    schools: { type: Schema.Types.ObjectId, ref: "schools" },
    students: { type: Schema.Types.ObjectId, ref: "students" },
    attendance_lists: { type: Schema.Types.ObjectId, ref: "attendance_lists" },
    attendance_score: Number,
    year: Number,
    month: Number,
    day: Number,
    date: Date,
}, { timestamps: true });

export const modelAttendanceStudent = model<IAttendance_students>("attendance_students", schema);