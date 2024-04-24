import { Schema, Document, model } from "mongoose";

export interface ISystem_configs extends Document{
    status: number;
    nsaf_token: string; 
    open_change_course: number;
}

const schema = new Schema({
    status: { type: Number, default: 1 },
    nsaf_token: String,
    open_change_course: Number,
}, {timestamps: true});

export const modelSystemConfig = model<ISystem_configs>("system_configs", schema);