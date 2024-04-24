import { Schema, model } from "mongoose";
import { IStudents, ISMS_Attendance_lists } from ".";

export interface ISMS_attendance_items {
    _id: any;
    status: number;
    students: IStudents["_id"];
    classes: any
    attendance_type: number;
    student_attendance_lists: ISMS_Attendance_lists["_id"];
    note: string;
    date: Date;
}

const schema = new Schema({
    status: { type: Number, default: 1 },
    students: { type: Schema.Types.ObjectId, ref: "students" },
    classes: { type: Schema.Types.ObjectId, ref: "classes" },
    student_attendance_lists: { type: Schema.Types.ObjectId, ref: "student_attendance_lists" },
    attendance_type: Number,
    note: String,
    date: Date,
}, { timestamps: true });

export const modelSmsAttendanceItem = model<ISMS_attendance_items>("student_attendance_items", schema);