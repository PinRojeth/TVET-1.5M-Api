import { Request, Response, NextFunction } from "express";
import passport from 'passport';
import "../utils/auth-handler";
import dotenv from 'dotenv';
import CommonUtil from "../utils/common";
import controllers from "../controllers";
import EnumConstant from "../utils/enumConstant";
import TokenGenerator from "../utils/token-generator";
import models from "../models";
import jwt from "jsonwebtoken";

dotenv.config();
const { secret, token_duration } = process.env;

export default class AuthHandlers {
    //Role authorization
    public authorize(permission_options: string[]) {
        return (req: Request, res: Response, next: NextFunction) => {
            if (permission_options.length === 0 || permission_options.indexOf("public") != -1) {
                return next();
            }
            const { _user } = req.body;
            if (!_user) {
                return res.status(401).json({ status: 0, message: "Unauthorized permission." });
            }
            for (var i = 0; i < permission_options.length; i++){
                if (_user.roles.permissions.indexOf(permission_options[i]) != -1) {
                    return next();
               }
            }
            return res.status(401).json({ status: 0, message: "Unauthorized permission." });
        }
    }

    public authenticateLocal(req: Request, res: Response, next: NextFunction) {
        passport.authenticate("local", { passReqToCallback: true }, async (err: any, user: any) => {
            if (err) {
                res.status(400).json({message: err.message, error_code: 1 });
            } else {
                if (!user) {
                    return res.status(400).json(CommonUtil.makeCustomResponse({ error_code: 1, message: "Unauthorized." }));
                }
                const [token, refresh_token] = generateToken(user._id, user.username);
                controllers.userToken.createToken(refresh_token, user._id, req.body.device_os, req.body.device_name);
                let getAcc = user.staffs != null ? user.staffs : user.students;
                res.status(200).json({
                    data: {
                        user: {
                            _id: getAcc._id,
                            roles: user.roles._id,
                            first_name: getAcc.first_name,
                            last_name: getAcc.last_name,
                            profile_image: getAcc.profileImage,
                            status: user.status || EnumConstant.INACTIVE,
                        },
                        token: token,
                        refresh_token: refresh_token
                }});
            }
        })(req, res, next);
    }

    public authenticateHTTPToken(optional_authorized: boolean = false) {
        return (req: Request, res: Response, next: NextFunction) => {
            if (optional_authorized) {
                if (!req.headers.authorization) { 
                    return next();
                }
            }else if (!req.headers.authorization && req.query.auth_token) {
                req.headers.authorization = "Bearer " + req.query.auth_token
            }
            passport.authenticate("jwt", { session: false }, async (err: any, account: any) => {
                if (err) {
                    console.log(err);
                    return res.status(500).json({ status: -1, message: err.stack });
                }
                if (!account) {
                    return res.status(401).json({ status: 0, message: "unauthorized" });
                } else {
                    req.body._user = account.staffs != null ? account.staffs : account.students;
                    req.body._user.roles = account.roles;
                    if (account.status == EnumConstant.DISABLED) {
                        return res.status(401).json({ status: 0, message: "user disabled" })
                    } else if (account.status != EnumConstant.ACTIVE) {
                        return res.status(401).json({ status: 0, message: "user inactive" })
                    }
                    return next();
                }
            })(req, res, next);
        }
    }

    public async renewToken(req: Request, res: Response) {
        const refreshToken = req.headers.authorization?.split(' ')[1] as string;
        try {
            if (TokenGenerator.isValidToken(refreshToken)) {
                const getToken = await controllers.userToken.getToken(refreshToken as string);
                if (getToken) {
                    if (getToken.status == 2) { // token expired
                        return res.status(402).json({ status: 0, message: "unauthorized", expired: true, token_id: getToken._id });
                    }
                    const account = await models.user.findById(getToken.users);
                    if (account) {
                        if (account.status != EnumConstant.ACTIVE) {
                            return res.status(402).json({ status: 0, message: "User has been removed or blocked." });
                        }
                        const [token, refresh_token] = generateToken(account._id, account.username);
                        controllers.userToken.updateToken(refreshToken);
                        return res.json(CommonUtil.makeCustomResponse({ data: { token: token }}));
                    } else {
                        return res.status(402).json({ status: 0, message: "User not found." });
                    }
                } 
            } 
            return res.status(402).json({ status: 0, message: "unauthorized" })
        } catch (error) {
            return res.status(402).json({ status: 0, message: "unauthorized" })
        }
    }
}
export function generateToken(user_id: string, username: string) {
    const payload = { id: user_id, name:username};
    const token = jwt.sign(payload, secret as string, { expiresIn: token_duration });
    const refresh_token = TokenGenerator.encryptData({ id: user_id, current_date: new Date() });
    return [token, refresh_token]
}