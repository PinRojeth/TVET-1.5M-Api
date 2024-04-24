import {Schema, Document, model} from "mongoose";
import { ICommunes } from "./communes";

export interface IVillages extends Document{
    _id : number,
    name: string,
    communes: ICommunes['_id'];
    version: number, 
    code : number,
    reference: string,
    issued_date: string,
    note: string,
    prefix: number,
    name_en: string,
    status : number 
}
const villages = new Schema({
    _id : Number,
    name: { type: String },
    communes: { type: Number, ref: "communes" },
    version: Number, 
    code : Number,
    reference: String,
    issued_date: String,
    note: String,
    prefix: Number,
    name_en: String,
    status: { type: Number, default: 1 },
}, { timestamps: true});

export const modelVillage = model<IVillages>("villages", villages);