import { Request, Response, NextFunction } from "express";
import  {IncomingForm} from 'formidable'
import CommonUtil from "../utils/common";
var qs = require('qs');
import { ClientError } from "../utils/http-errors";

export default class FormHandler {
    public parse(req: Request, res: Response, next: NextFunction) {
        try {
            let form = new IncomingForm();
            form.multiples = true;
            form.maxFileSize = 5 * 1024 * 1024 * 1024;
            if (!req.headers["content-type"]?.includes("form-data")) { 
                throw new ClientError(400, "content-type must be form-data")
            }
            form.parse(req, (err: any, fields: any, files: any) => {
                if (err) {
                    return res.json({ status: -1, message: err.stack });
                } else {
                    let data = {
                        ...fields,
                    }
                    let _user = req.body._user;
                    req.body = qs.parse(data);
                    req.body._user = _user;
                    let filaData = {
                        ...files,
                    }
                    req.body.files = qs.parse(filaData, {allowSparse : true})
                    return next();
                }
            });
        } catch (error) {
            res.json(CommonUtil.makeJSONResponseError(error));
        }
    }
}
