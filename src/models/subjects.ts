import { Schema, model } from "mongoose";
import { ISchools } from ".";

export interface ISubjects {
    _id: any;
    name: string;
    name_en: string;
    code: string;
    status: number;
    schools: ISchools["_id"];
}

const schema = new Schema({
    name: { type: String },
    name_en: { type: String },
    code: String,
    status: { type: Number, default: 1 },
    schools: { type: Schema.Types.ObjectId, ref: "schools" },
}, { timestamps: true });

export const modelSubject = model<ISubjects>("subjects", schema);