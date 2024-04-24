import {Schema, Document, model} from "mongoose";
import { ISectors } from "./sectors";

export interface IApply_majors extends Document {
    name: string;
    name_en: string;
    code: string;
    status: number;
    sectors: ISectors["_id"];
}

const schema = new Schema({
    status: { type: Number, default: 1},
    name: String,
    name_en: String,
    code: String,
    sectors: {type:Schema.Types.ObjectId, ref: "sectors"},
}, { timestamps: true});
 
export const modelApplyMajor = model<IApply_majors>("skills", schema);