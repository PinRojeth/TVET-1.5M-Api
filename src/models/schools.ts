import { Schema, Document, model } from "mongoose";
import { IAddress, IApply_majors, IFile_datas} from ".";
import { AddressSchema } from "./addresses";

export interface ISchools  {
    _id: any;
    status: number;
    name: string;
    name_en: string;
    phone_number: string;
    id_code: string;
    code: string;
    code_en: string;
    email: string;
    school_type: number;
    website: string;
    description: string;
    profile_image: IFile_datas["_id"];
    address: IAddress;
    apply_majors: IApply_majors["_id"][];
    create_by: string;
    create_number: string;
    create_date: Date;
    register_by: string;
    register_number: string;
    register_date: Date;
}

const schema = new Schema({
    status: { type: Number, default: 1 },
    name: String,
    name_en: String,
    phone_number: String,
    email: String,
    id_code: String,
    school_type: Number,
    website: String,
    description: String,
    apply_majors: [{type: Schema.Types.ObjectId, ref: "skills" }],
    profile_image: { type: Schema.Types.ObjectId, ref: "file_datas" },
    address: AddressSchema,
    code: String,
    code_en: String,
    create_by: String,
    create_number: String,
    create_date: Date,
    register_by: String,
    register_number: String,
    register_date: Date
}, {timestamps: true});

export const modelSchool = model<ISchools>("schools", schema);