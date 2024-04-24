import {Schema, Document, model} from "mongoose";

export interface ICity_provinces extends Document{
    _id : number,
    name: string,
    version: number, 
    code : number,
    province_type_kh: string,
    province_type_en: string,
    reference: string,
    issued_date: string,
    note: string,
    prefix: number,
    name_en: string,
    total_district: number,
    total_commune: number,
    total_village: number,
    order: number,
    status: number,
}
const city_provinces = new Schema({
    _id : Number,
    name: String,
    version: Number, 
    code : Number,
    province_type_kh: String,
    province_type_en: String,
    reference: String,
    issued_date: String,
    note: String,
    prefix: Number,
    name_en: String,
    total_district: Number,
    total_commune: Number,
    total_village: Number,
    ordre: Number,
    status: { type: Number, default: 1 },
}, { timestamps: true});
 

export const modelCityProvince = model<ICity_provinces>("city_provinces", city_provinces);