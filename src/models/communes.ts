import {Schema, Document, model} from "mongoose";
import { IDistricts } from ".";

export interface ICommunes extends Document{
    _id : number,
    name: string,
    districts: IDistricts["_id"],
    version: number, 
    code : number,
    commune_type_kh: string,
    commune_type_en: string,
    reference: string,
    issued_date: string,
    note: string,
    prefix: number,
    name_en: string,
    total_village: number;
    status: number;
}
const communes = new Schema({
    _id : Number,
    name: { type: String },
    districts: { type: Number, ref: "districts" },
    version: Number, 
    code : Number,
    commune_type_kh: String,
    commune_type_en: String,
    reference: String,
    issued_date: String,
    note: String,
    prefix: Number,
    name_en: String,
    total_village: Number,
    status: { type: Number, default: 1 },
}, { timestamps: true});
 

export const modelCommune = model<ICommunes>("communes", communes);