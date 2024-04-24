import { Schema, model } from "mongoose";
import { ISchools } from "./schools";

export interface ISMS_Attendance_lists  {
    _id: any;
    status: number;
    name: string;
    classes: any;
    staffs: any
    class_subjects: any
    subjects: any
    semesters: any
    date: Date;
    schools: ISchools["_id"];
    shift_times: any
    start_time: number;
    end_time: number;
}

const schema = new Schema({
    status: { type: Number, default: 1 },
    staffs: { type: Schema.Types.ObjectId, ref: "staffs" },
    classes: { type: Schema.Types.ObjectId, ref: "classes" },
    subjects: { type: Schema.Types.ObjectId, ref: "subjects" },
    class_subjects: { type: Schema.Types.ObjectId, ref: "class_subjects" },
    semesters: { type: Schema.Types.ObjectId, ref: "semesters" },
    schools: { type: Schema.Types.ObjectId, ref: "schools" },
    shift_times: { type: Number, ref: "type_shift_times" },
    start_time: Number,
    end_time: Number,
    date: Date,
}, { timestamps: true });

schema.index({ class_subjects: 1 });

export const modelStudentAttendanceList = model<ISMS_Attendance_lists>("student_attendance_lists", schema);