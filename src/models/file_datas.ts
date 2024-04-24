import {Schema, model} from "mongoose";
import { IStaffs } from "./staffs";
import { IStudents } from "./students";

export interface IFile_datas{
    _id: any;
    buckets: string;
    staffs: IStaffs["_id"];
    students: IStudents["_id"];
    read_permission: number;
    bucket_name: string;
    file_name: string;
    file_type: string;
    file_size: number;
    status: number;
    image_size: string;
    origin_buckets: string;
}

const file_datas = new Schema({
    buckets: String,
    staffs: { type: Schema.Types.ObjectId, ref: "staffs" },
    students: { type: Schema.Types.ObjectId, ref: "students" },
    read_permission: Number,
    bucket_name: String,
    file_name: String,
    file_type: String,
    file_size: Number,
    status: { type: Number, default: 1 },
    image_size: String,
    origin_buckets: String,
}, {timestamps: true});

export const modelFileData = model<IFile_datas>("file_datas", file_datas);