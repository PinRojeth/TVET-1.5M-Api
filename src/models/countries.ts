import { Schema, Document, model } from "mongoose";

export interface ICountries extends Document {
    _id: number,
    name: string,
    name_en: string,
    country_code: string,
    nationality: string,
    nationality_en: string,
    status: number,
    order: number
}
const countries = new Schema({
    _id: Number,
    name: { type: String },
    name_en: String,
    country_code: String,
    nationality: String,
    nationality_en: String,
    order: Number,
    status: { type: Number, default: 1 },
}, { timestamps: true });


export const modelCountry = model<ICountries>("countries", countries);