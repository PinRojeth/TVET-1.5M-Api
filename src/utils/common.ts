import dotenv from "dotenv";
import fs from "fs";
import { response } from 'express';
import { File } from "formidable";
import sharp from 'sharp';
import { ClientError } from "./http-errors";
import axios, { Method } from "axios";
import { ObjectId } from "../models";
import controllers from "../controllers";

dotenv.config();
let { temp_storage, image_file_size_mb } = process.env;
let imageSize = Number(image_file_size_mb);
export default class CommonUtil {

    public static makeCustomResponse(data: any) {
       return data
    }

    public static makeJSONResponseData(dataReturn: IDataReturn): any {
        response.status(200);
        if (dataReturn.total == 0 && !Array.isArray(dataReturn.data)) {
            return {
                data: dataReturn.data
            };
        } else {
            if (dataReturn.total == 0) {
                return {
                    data: {
                        list: dataReturn.data,
                        total: dataReturn.data.length,
                        page: dataReturn.page,
                        limit: dataReturn.limit,
                    }
                };
            } else {
                return {
                    data: {
                        list: dataReturn.data,
                        total: dataReturn.total,
                        page: dataReturn.page,
                        limit: dataReturn.limit,
                    }
                };
            }

        }
    }

    public static makeJSONResponseError(error: any): any {
        if (error.headerStatus) {
            if (error.headerStatus != 0) {
                response.status(error.headerStatus);
            }
        } else {
            response.status(200);
        }
        if (error.statusCode < 500) {
            let response: any = {}
            if (this.isJson(error.message)) {
                let jsonData = JSON.parse(error.message)
                response.message = jsonData.message
                response.error = jsonData.error
            } else {
                response.message = error.message;
                response.error_code = error.errorCode == null ? 0 : error.errorCode;
            }
            return response;
        } else {
            console.error(error)
            response.status(500);
            return { message: "internal server error", error: error.message, error_code: -1 };
        }
    }

    public static isValidMongoId(_id: any) {
        if (_id != null) {
            return String(_id).match(/^[0-9a-fA-F]{24}$/)
        }
        return false
    }

    public static validateImage(image: any) {
        if (image) {
            let file: File = image;
            if (file.type === "application/octet-stream") { // from mobile
                let fileExt = file.name.split('.').pop();
                if (fileExt == "jpg" || fileExt == "jpeg" || fileExt == "png" || fileExt == "gif" || fileExt == "bmp") {
                    if (file.size > (imageSize * 1024 * 1024)) {
                        fs.unlinkSync(file.path);
                        throw new ClientError(400,'image size must smaller then 10mb');
                    }
                } else {
                    if (file.path) {
                        fs.unlinkSync(file.path);
                    }
                    throw new ClientError(400,"file type only accept jpg | png | gif | bmp")
                }
            } else if (file.type === 'image/jpg' || file.type === 'image/jpeg' || file.type === 'image/png' || file.type === "image/gif" || file.type === "image/bmp") {
                if (file.size > (imageSize * 1024 * 1024)) { 
                    fs.unlinkSync(file.path);
                    throw new ClientError(400,'image size must smaller then 10mb');
                }
            } else {
                if (file.path) {
                    fs.unlinkSync(file.path);
                }
                throw new ClientError(400,"file type only accept jpg | png | gif | bmp")
            }
        }
    }

    public static async imageDimension(file: File) {
        let metaData = await sharp(file.path).metadata();
        return {
            width: Number(metaData.width),
            height: Number(metaData.height),
        }
    }

    public static async resizeImage(file: File, dimension: number) {
        var dir = temp_storage;
        if (!fs.existsSync(dir as any)) {
            fs.mkdirSync(dir as any);
        }
        let fileName = dimension + "_" + file.name;
        return new Promise((resolve, reject) => {
            sharp(file.path).resize(dimension).toFile(temp_storage + "/" + fileName, (err, info) => {
                if (err) {
                    reject(err);
                }
                let f = this.JSONParse(info);
                f.path = temp_storage + "/" + fileName;
                f.name = fileName;
                f.type = file.type;
                resolve(f)
            });
        });
    }

    public static JSONParse(json: any) {
        return JSON.parse(JSON.stringify(json));
    }

    public static ParseValidJson(json: any) {
        if (this.isJson(json)) {
            return JSON.parse(json);
        } else {
            throw new ClientError(400, "invalid json")
        }
    }
    private static isJson(str: any) {
        try {
            JSON.parse(str);
        } catch (e) {
            return false;
        }
        return true;
    }

    public static removeKeys(jsonObject: any, keys: string[]) {
        let json = JSON.parse(JSON.stringify(jsonObject));
        for (var i = 0; i < keys.length; i++) {
            delete json[keys[i]];
        }
        return json
    }
    
    public static requestObjectToArray(param: any, dataType: IValidateRequest) {
        let objs = [];
        if (param) {
            if (Array.isArray(param)) {
                if (param.length == 1) {
                    if (param[0] == "") {
                        return [];
                    }
                }
                param.forEach((item) => {
                    if (dataType.isMongoId) {
                        if (typeof item == "object") {
                            throw new ClientError(400,'invalid ' + dataType.field);
                        }
                        if (!item.match(/^[0-9a-fA-F]{24}$/)) {
                            throw new ClientError(400,'invalid ' + dataType.field);
                        }
                        item = new ObjectId(item);
                    }
                    if (dataType.isNumeric) {
                        if (typeof item == "object") {
                            throw new ClientError(400,'invalid ' + dataType.field);
                        }
                        if (isNaN(item)) {
                            throw new ClientError(400,'invalid ' + dataType.field);
                        }
                    }
                    objs.push(item);
                })
            } else {
                if (dataType.isMongoId) {
                    if (!param.match(/^[0-9a-fA-F]{24}$/)) {
                        throw new ClientError(400,'invalid ' + dataType.field);
                    }
                    param = new ObjectId(param);
                }
                if (dataType.isNumeric) {
                    if (isNaN(param)) {
                        throw new ClientError(400,'invalid ' + dataType.field);
                    }
                }
                objs.push(param);
            }
        }
        return objs;
    }

    public static removeDuplicateArray(array: any) {
        return [...new Set(array)];
    }

    public static isValidUsername(username: string) {
        if (!username.match("^[a-zA-Z][a-zA-Z0-9_\.\-]*$")) {
            return false
        }
        return true;
    }


    public static hasPermission(permission: string, permissions: string[]) {
        for (var i = 0; i < permissions.length; i++) {
            if (permission == permissions[i]) {
                return true;
            }
        }
        return false;
    }

    public static searchNameCode(search: any) {
        if (search) {
            let s = search.replace(/[&\/\\?+()${}]/g, "");
            return [
                { name: { $regex: s, $options: "i" } },
                { name_en: { $regex: s, $options: "i" } },
                { code: { $regex: s, $options: "i" } },
                { phone_number: { $regex: s, $options: "i" } }
            ]
        }
        return [];
    }

    public static parseDefaultDate(date: any) {
        this.isValidDate(date);
        const sDate = new Date(date).setHours(0, 0, 0, 0);
        return new Date(sDate);
    }
    
    public static parseStartDateEndDate(startDate: any, endDate: any) {
        this.isValidDate(startDate);
        this.isValidDate(endDate);
        let pStartDate = new Date(startDate);
        let pEndDate = new Date(endDate);
        if (!startDate.includes(':')) {
            pStartDate = new Date(pStartDate.setHours(0, 0, 0, 0));
        }
        if (!endDate.includes(':')) {
            pEndDate = new Date(pEndDate.setHours(23, 59, 59, 0));
        }
        if (pStartDate > pEndDate) {
            throw new ClientError(400, "stat_date must not greater then end_date");
        }
        return [pStartDate, pEndDate];
    }
    private static isValidDate(date: any) {
        if (isNaN(new Date(date).getTime())) {
            throw new ClientError(400, "invalid date type");
        }
        return true
    }

    public static async idPoorAPI(idPoor: string) {
        let token =  await controllers.systemConfig.getToken();
        let authorizeHeader: any = {
            authorization: "Bearer " + token
        }
        try {
            const response = await axios({
                method: "GET",
                url: "https://app.idpoor.gov.kh/api/collect/external/households?equityCardNo="+idPoor,
                // url: "https://app.idpoor.gov.kh/api/reporting/public/equitycards/verification?cardNo="+idPoor,
                headers: authorizeHeader,
            })
            if (response.data) {
                if (response.data.households) {
                    if (response.data.households.content.length > 0) { 
                        return response.data;
                    }
                }
            }
            return null
        } catch (error: any) {
            return null
        }
    }
    public static sortStudentName(students: any[]) {
        if (students.length > 0) {
            if (students[0].first_name && students[0].last_name) {
                return students.sort((a: any, b: any) => {
                    if (a.last_name.toLowerCase() == b.last_name.toLowerCase()) {
                        return a.first_name.toLowerCase().localeCompare(b.first_name.toLowerCase())
                    }
                    return a.last_name.toLowerCase().localeCompare(b.last_name.toLowerCase())
                })
            }
        }
        return students;
    }
}

interface IValidateRequest {
    isMongoId?: boolean,
    isNumeric?: boolean,
    field: string,
}

export interface IDataReturn {
    data: any,
    total?: number,
    page?: number,
    limit?: number,
}