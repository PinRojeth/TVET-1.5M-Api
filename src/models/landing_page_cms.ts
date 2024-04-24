import { Schema, Document, model } from "mongoose";

export interface ILanding_page_cms extends Document{
    status: number;
    name: string; 
    description: string;
}

const schema = new Schema({
    status: { type: Number, default: 1 },
    name: String,
    description: String,
}, {timestamps: true});

export const modelLandingCms = model<ILanding_page_cms>("landing_page_cms", schema);