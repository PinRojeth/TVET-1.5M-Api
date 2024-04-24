import { Schema, model } from "mongoose";
import { ISchools, IStaffs, IStudents, IType_projects } from ".";

export interface IAttendance_submits {
    _id: any;
    status: number; 
    schools: ISchools["_id"];
    staffs: IStaffs["_id"];
    year: number;
    month: number;
    students: IStudents["_id"][];
    attendance_data: IAttendance_data[];
    type_projects: IType_projects["_id"];
    start_date: Date;
    end_date: Date; 
}

interface IAttendance_data {
    students: IStudents["_id"];
    average_attendance: number;
    classes?: any;
}
const schema = new Schema({
    status: { type: Number, default: 1 },
    staffs:{ type: Schema.Types.ObjectId, ref: "staffs" },
    schools: { type: Schema.Types.ObjectId, ref: "schools" },
    students: [{ type: Schema.Types.ObjectId, ref: "students" }],
    attendance_data: [{
        students: { type: Schema.Types.ObjectId, ref: "students" },
        average_attendance: Number,
        classes: { type: Schema.Types.ObjectId, ref: "classes" },
    }],
    year: Number,
    month: Number,
    type_projects: Number,
    start_date: Date,
    end_date: Date,
}, { timestamps: true });

export const modelAttendanceSubmit = model<IAttendance_submits>("attendance_submits", schema);