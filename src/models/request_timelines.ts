import { Schema, model } from "mongoose";
import { IStaffs, IStudents } from ".";

export interface IRequest_timelines {
    _id: any;
    status: number; 
    students: IStudents["_id"];
    staffs: IStaffs["_id"];
    quit_type: number;
    reason: string;
    timeline_type: number;
    resubmit: number;
}

const schema = new Schema({
    status: Number,
    timeline_type: Number,
    students: { type: Schema.Types.ObjectId, ref: "students" },
    staffs:{ type: Schema.Types.ObjectId, ref: "staffs" },
    quit_type: Number,
    reason: String,
    resubmit: Number,
}, { timestamps: true });

schema.index({ timeline_type: 1, status: 1 });

export const modelRequestTimeline = model<IRequest_timelines>("request_timelines", schema);