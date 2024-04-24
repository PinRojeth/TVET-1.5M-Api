import {Schema, Document, model} from "mongoose";

export interface ISectors extends Document {
    name: string;
    name_en: string;
    code: string;
    status: number;
}

const schema = new Schema({
    status: { type: Number, default: 1},
    name: String,
    name_en: String,
    code: String,
}, { timestamps: true});
 
export const modelSector = model<ISectors>("sectors", schema);