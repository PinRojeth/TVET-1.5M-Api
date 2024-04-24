import { Schema, model } from "mongoose";
import { IStudents, ISchools } from ".";

export interface IClass_enrolments {
    _id: any;
    status: number;
    classes: any;
    students: IStudents["_id"];
    pass_fail: number;
    remark: string;
    schools: ISchools["_id"];
}

const schema = new Schema({
    status: { type: Number, default: 1 },
    classes: { type: Schema.Types.ObjectId, ref: "classes" },
    students: { type: Schema.Types.ObjectId, ref: "students" },
    pass_fail: { type: Number, default: null },
    remark: String,
    schools: { type: Schema.Types.ObjectId, ref: "schools" },
}, { timestamps: true });

schema.index({classes: 1, students: 1});
export const modelClassEnrolment = model<IClass_enrolments>("class_enrolments", schema);