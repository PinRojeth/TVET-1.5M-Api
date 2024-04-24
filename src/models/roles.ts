import { Schema, model } from "mongoose";
export interface IRoles{
    _id: number;
    name: string;
    status: number;
    permissions: string[];
    sms_permissions: string[];
}

const schema = new Schema({
    _id: Number,
    name: String,
    status: { type: Number, default: 1 },
    permissions: [String],
    sms_permissions: [String],
}, {timestamps: true});

export const modelRoles = model<IRoles>("roles", schema);