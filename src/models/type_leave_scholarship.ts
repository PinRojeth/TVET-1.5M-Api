import { Schema, model } from "mongoose";

export interface IType_leave_scholarships{
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

export const modelTypeLeave = model<IType_leave_scholarships>("type_leave_scholarships", schema);