import { Schema, model } from "mongoose";
import { IAddress, IFile_datas, ISchools, IUser_departments, IUsers } from ".";

export interface IStaffs {
    _id: any;
    status: number,
    code: string,
    first_name: string,
    last_name: string,
    first_name_en: string,
    last_name_en: string,
    gender: string,
    date_of_birth: Date,
    phone_number: string,
    users: IUsers["_id"],
    profile_image: IFile_datas["_id"];
    nationality: number,
    ethnicity: number,
    create_by: IStaffs["_id"];
    address: IAddress;
    place_of_birth: IAddress;
    schools: ISchools["_id"];
    user_departments: IUser_departments["_id"]; 
    is_teaching: number;
}

var schema = new Schema({
    status: { type: Number, default: 1 },
    is_teaching: Number,
    code: String,
    first_name: String,
    last_name: String,
    first_name_en: String,
    last_name_en: String,
    gender: String,
    date_of_birth: Date,
    phone_number: String,
    schools: { type: Schema.Types.ObjectId, ref: "schools" },
    users: { type: Schema.Types.ObjectId, ref: "users" },
    profile_image: { type: Schema.Types.ObjectId, ref: "file_datas" },
    create_by: { type: Schema.Types.ObjectId, ref: "staffs" },
    nationality: { type: Number, ref: "countries" },
    ethnicity: { type: Number, ref: "countries" },
    user_departments: { type: Schema.Types.ObjectId, ref: "user_departments" },
    address: {
        detail: String,
        house_number: String,
        street: String,
        villages: { type: Number, ref: "villages" },
        communes: { type: Number, ref: "communes" },
        districts: { type: Number, ref: "districts" },
        city_provinces: { type: Number, ref: "city_provinces" },
    },
    place_of_birth: {
        detail: String,
        house_number: String,
        street: String,
        villages: { type: Number, ref: "villages" },
        communes: { type: Number, ref: "communes" },
        districts: { type: Number, ref: "districts" },
        city_provinces: { type: Number, ref: "city_provinces" },
    }
}, { timestamps: true, toJSON: { virtuals: true } });

export const modelStaff = model<IStaffs>("staffs", schema);