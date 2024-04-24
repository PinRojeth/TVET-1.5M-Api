import { Schema, model } from "mongoose";
import { IAddress, ICourses, IFile_datas, ISchools, IStaffs, IUsers, IType_leave_scholarships, IType_projects, IType_poverty_status, IType_scholarship_documents } from ".";
import EnumConstant from "../utils/enumConstant";

export interface IStudents {
    _id: any;
    code: string;
    first_name: string;
    last_name: string;
    first_name_en: string;
    last_name_en: string;
    gender: string;
    profile_image: string;
    date_of_birth: Date;
    place_of_birth: IAddress;
    nationality: Number;
    ethnicity: Number;
    address: IAddress;
    phone_number: string;
    poor_id: string;
    poor_status: number;
    poor_member_uuid: string;
    scholarship_status: number;
    verify_status: number;
    approval_info_status: number;
    poor_file_datas: IFile_datas["_id"];
    attachment_files: IFile_datas["_id"][];
    courses: ICourses["_id"];
    schools: ISchools["_id"];
    users: IUsers["_id"];
    status: number;
    id_card_number: string;
    create_by: IStaffs["_id"];
    type_leavel_scholarships: IType_leave_scholarships["_id"]
    type_poverty_status: IType_poverty_status["_id"]
    type_projects: IType_projects["_id"]
    type_scholarship_documents: IType_scholarship_documents["_id"]
}

const schema = new Schema({
    status: { type: Number, default: 1 },
    poor_status: Number,
    scholarship_status: Number,
    verify_status: Number,
    approval_info_status: Number,
    code: String,
    first_name: String,
    last_name: String,
    first_name_en: String,
    last_name_en: String,
    gender: String,
    profile_image: String,
    date_of_birth: Date,
    phone_number: String,
    id_card_number: String,
    place_of_birth: {
        detail: String,
        house_number: String,
        street: String,
        villages: { type: Number, ref: "villages" },
        communes: { type: Number, ref: "communes" },
        districts: { type: Number, ref: "districts" },
        city_provinces: { type: Number, ref: "city_provinces" },
    },
    nationality: { type: Number, ref: "countries" },
    ethnicity: { type: Number, ref: "countries" },
    address: {
        detail: String,
        house_number: String,
        street: String,
        villages: { type: Number, ref: "villages" },
        communes: { type: Number, ref: "communes" },
        districts: { type: Number, ref: "districts" },
        city_provinces: { type: Number, ref: "city_provinces" },
    },
    poor_id: String,
    poor_member_uuid: String,
    create_by: { type: Schema.Types.ObjectId, ref: "staffs" },
    poor_file_datas: { type: Schema.Types.ObjectId, ref: "file_datas" },
    attachment_files: [{ type: Schema.Types.ObjectId, ref: "file_datas" }],
    courses: { type: Schema.Types.ObjectId, ref: "courses" },
    schools: { type: Schema.Types.ObjectId, ref: "schools" },
    users: { type: Schema.Types.ObjectId, ref: "users" },
    type_poverty_status: { type: String, ref: "type_poverty_status" },
    type_leavel_scholarships: { type: Number, ref: "type_leave_scholarships" },
    type_scholarship_documents: { type: Number, ref: "type_scholarship_documents" },
    type_projects: { type: Number, ref: "type_projects", default: EnumConstant.TypeProject.scholarship },
}, { timestamps: true });

export const modelStudent = model<IStudents>("students", schema);