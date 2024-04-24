import { File } from "formidable";
import {Response } from 'express';  
import CommonUtil from "../utils/common";
const ObjectId = require("mongoose").Types.ObjectId;
import fs from 'fs';
import mongoose, { Model, isValidObjectId } from 'mongoose'
import AbstractController from './abstract_controller';
import Grid from "gridfs-stream";
import EnumConstant from "../utils/enumConstant";
import { IFile_datas } from "../models";

export default class FileDataController extends AbstractController<IFile_datas> {
    model: Model<IFile_datas>;
    constructor(model: Model<IFile_datas>) {
        super(model);
        this.model = model;
    }

    async uploadProfileWithResize(bucketName: string, file: File, staffs: string) {
        let pixels: number[] = [64,256,1024];
        let imageSize: string[] = ["s", "m", "l"];
        let resizeFiles: File[] = [];
        CommonUtil.validateImage(file);
        let getDimension = await CommonUtil.imageDimension(file);
        for (var i = 0; i < pixels.length; i++){
            if (getDimension.width >= pixels[i]) {
                let f = await CommonUtil.resizeImage(file, pixels[i]) as File;
                resizeFiles.push(f);
            }
        }
        let promise = await this.uploadFile({
            bucketName: bucketName,
            file: file,
            staffs: staffs
        }) as any;
        if (resizeFiles.length > 0) {
            for (var i = 0; i < resizeFiles.length; i++) {
                await this.uploadFile({
                    bucketName: bucketName,
                    file: resizeFiles[i],
                    staffs: staffs,
                    extraData: { image_size: imageSize[i], file_id: promise._id }
                })
            }
        }
        return promise;
    }

    async uploadFile(params: { bucketName: string, file: File, staffs?: string,students?: string, extraData?: any }) : Promise<IFile_datas>  {
        const that = this;
        const options = {
            filename: new Date().getTime() + "." + params.file.name!.split('.').pop(),
            metadata: {
                contentType: params.file.type
            },
            contentType: params.file.type
        };
        let bucket = new mongoose.mongo.GridFSBucket(mongoose.connection.db, { bucketName: params.bucketName });
        var writestream = bucket.openUploadStream(new Date().getTime() + "-" + params.file.name, options);
        fs.createReadStream(params.file.path).pipe(writestream);
        return new Promise((resolve, reject) => {
            writestream.on("finish", () => {
                if (params.file.path) fs.unlinkSync(params.file.path);
                let fileData = new this.models.fileData();
                fileData.staffs = params.staffs;
                fileData.students = params.students;
                fileData.buckets = "" + writestream.id;
                fileData.bucket_name = params.bucketName;
                fileData.file_name = params.file.name!;
                fileData.file_size = params.file.size;
                fileData.file_type = params.file.type;
                fileData.read_permission = EnumConstant.ReadPermission.PUBLIC;
                if (params.extraData) {
                    fileData.image_size = params.extraData.image_size;
                    fileData.origin_buckets = params.extraData.file_id;
                    fileData.buckets = "" + writestream.id;
                }
                that.model.create(fileData);
                resolve(fileData);
            }).on("error", (err: Error) => {
                if (params.file.path) fs.unlinkSync(params.file.path);
                console.log("error = " + err.message);
                reject(err);
            })
        });
    }

    async download(params: { req: any, res: any }) {
        try {
            if (params.req.query.image_size) {
                let query: any = {
                    origin_id: params.req.params._id,
                    image_size: params.req.query.image_size,
                    status: { $ne: EnumConstant.DELETE }
                }
                const getImage = await this.model.findOneAndUpdate(query,
                    { $inc: {read_count: 1}}
                );
                if (getImage) {
                    this.downloadData(params.res, getImage.buckets, getImage.bucket_name);
                    return
                }
            }
            let query: any = {
                _id: params.req.params._id,
                status: { $ne: EnumConstant.DELETE } 
            }
            const getFileData = await this.model.findOneAndUpdate(
                query,
                { $inc: { read_count: 1 } }
            )
            if (!getFileData) {
                params.res.status(404).json(CommonUtil.makeJSONResponseError({ statusCode: 0, message: "file not found" }));
                return
            }
            this.downloadData(params.res, getFileData.buckets, getFileData.bucket_name);
        } catch (error) {
            params.res.json(CommonUtil.makeJSONResponseError(error));
        }
    }

    private async downloadData(res: Response, file_id: string, bucket_name: string) {
        let bucket = new mongoose.mongo.GridFSBucket(mongoose.connection.db, { bucketName: bucket_name }); 
        const gfs = Grid(mongoose.connection.db, mongoose.mongo);
        let getFile = await gfs.collection(bucket_name).findOne({
            _id: new ObjectId(file_id)
        });
        if (!getFile) {
            res.status(404).json(CommonUtil.makeJSONResponseError({ statusCode: 0, message: "file not found" }));
            return
        }  
        res.set('Content-Type',  getFile.metadata.contentType);
        res.header("Content-Length", getFile.length);
        res.set('accept-ranges', 'bytes');
        res.header('Content-Disposition', 'inline;filename*=UTF-8\'\'' + encodeURIComponent(getFile.filename));
        const readStream = bucket.openDownloadStream(getFile._id);
        readStream.on('data', (chunk: any) => {
            res.write(chunk);
        });
        readStream.on('error', (error: any) => {
            res.sendStatus(404);
        });
        readStream.on('end', () => {
            res.end();
        });
    }


    async deleteFileFromGrid(_id: string) {
        if (_id == "" || !_id) { 
            return
        }
        if (!isValidObjectId(_id)) {
            return 
        }
        const getFileDatas = await this.getManyNoCount({
            query: {
                _id: _id 
            }
        }) as IFile_datas[];
        if (getFileDatas.length > 0) {
            getFileDatas.forEach(item => {
                this.removeFileFromDB(item.buckets, item.bucket_name); 
                this.model.findByIdAndUpdate({ _id: item._id }, { $set: { status: EnumConstant.DELETE } }).exec();
            });
            return {message: "sucess"}
        }
    }

    private async removeFileFromDB(file_id: string, bucketName: string) {
        const gfs = Grid(mongoose.connection.db, mongoose.mongo);
        let getFile = await gfs.collection(bucketName).deleteOne({ _id: new ObjectId(file_id) })
        return getFile;
    }

}