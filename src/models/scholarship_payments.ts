import { Schema, model } from "mongoose";
import { IAttendance_submits, ISchools, IStaffs, IStudents } from ".";

export interface IScholarship_payments {
    _id: any;
    status: number; 
    students: IStudents["_id"];
    staffs: IStaffs["_id"];
    reason: string;
    paid_amount: number;
    year: number;
    month: number;
    schools: ISchools["_id"];
    attendance_submits: IAttendance_submits["_id"];
}

const schema = new Schema({
    status: { type: Number, default: 1 },
    students: { type: Schema.Types.ObjectId, ref: "students" },
    staffs:{ type: Schema.Types.ObjectId, ref: "staffs" },
    schools:{ type: Schema.Types.ObjectId, ref: "schools" },
    attendance_submits:{ type: Schema.Types.ObjectId, ref: "attendance_submits" },
    reason: String,
    paid_amount: Number,
    permission: Number,
    year: Number,
    month: Number,
}, { timestamps: true });

export const modelScholarshipPayment = model<IScholarship_payments>("scholarship_payments", schema);