import { Schema, Document, model } from "mongoose";

export interface I extends Document{
    status: number,
}



const schema = new Schema({
    status: { type: Number, default: 1},
}, {timestamps: true});

export const modelSubject = model<I>("subjects", schema);