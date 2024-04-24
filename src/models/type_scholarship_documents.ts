import { Schema, model } from "mongoose";

export interface IType_scholarship_documents{
    _id: number,
    name: string;
    name_en: string;
    status: number,
}

const schema = new Schema({
    _id: Number,
    name: String,
    name_en: String,
    status: { type: Number, default: 1},
}, {timestamps: true});

export const modelTypeScholarshipDoc = model<IType_scholarship_documents>("type_scholarship_documents", schema);