import { Schema, model } from "mongoose";

export interface IType_projects  {
    _id: Number;
    name: string;
    status: number;
}



const schema = new Schema({
    _id: Number,
    status: { type: Number, default: 1 },
    name: String,
}, {timestamps: true});

export const modelTypeProject = model<IType_projects>("type_projects", schema);