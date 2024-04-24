import { model, Schema } from "mongoose";
import { IRoles, IStaffs, IStudents} from ".";

export interface IUsers {
    _id: any;
    status: number;
    username: string;
    password: string;
    email: string;
    telephone: string;
    roles: IRoles["_id"];
    staffs: IStaffs["_id"];
    students: IStudents["_id"];
}

const schema = new Schema({
    status: { type: Number, default: 1 },
    username: { type: String, required: false, default: null },
    password: { type: String, required: false, default: null, hide: true },
    email: { type: String, required: false, default: null },
    telephone: { type: String, required: false, default: null },
    roles: { type: Number, ref: "roles" }, 
    staffs: { type: Schema.Types.ObjectId, ref: "staffs" }, 
    students: { type: Schema.Types.ObjectId, ref: "students" }, 
}, { timestamps: true });


export const modelUser = model<IUsers>('users', schema);