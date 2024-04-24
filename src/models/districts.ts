import {Schema, Document, model} from "mongoose";
import { ICity_provinces } from ".";

export interface IDistricts extends Document{
    _id : number,
    name: string,
    city_provinces: ICity_provinces['_id']
    version: number, 
    code : number,
    district_type_kh: string,
    district_type_en: string,
    reference: string,
    issued_date: string,
    note: string,
    prefix: number,
    name_en: string,
    total_commune: number,
    total_village: number
    status: number;
}
const districts = new Schema({
    _id : Number,
    name: { type: String },
    city_provinces: { type: Number, ref: "city_provinces" },
    version: Number, 
    code : Number,
    district_type_kh: String,
    district_type_en: String,
    reference: String,
    issued_date: String,
    note: String,
    prefix: Number,
    name_en: String,
    total_commune: Number,
    total_village: Number,
    status: { type: Number, default: 1 },
}, { timestamps: true});
 

export const modelDistrict = model<IDistricts>("districts", districts);