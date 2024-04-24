import { Schema, model } from "mongoose";

export interface IUser_departments {
    _id: any;
    name: string;
    name_en: string;
    code: string;
}

const schema = new Schema({
    status: { type: Number, default: 1 },
    name: String,
    name_en: String,
    code: String,
}, { timestamps: true });

export const modelUserDepartment = model<IUser_departments>("user_departments", schema);