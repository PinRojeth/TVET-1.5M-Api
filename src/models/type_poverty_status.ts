import { Schema, model } from "mongoose";

export interface IType_poverty_status{
    _id: string,
    name: string;
    name_en: string;
    status: number,
    order: number,
}


const schema = new Schema({
    _id: String,
    name: String,
    name_en: String,
    order: Number,
    status: { type: Number, default: 1},
}, {timestamps: true});

export const modelTypePoverty = model<IType_poverty_status>("type_poverty_status", schema);