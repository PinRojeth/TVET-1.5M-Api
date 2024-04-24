import { Router, Request, Response, NextFunction } from "express";
import { ValidationChain } from "express-validator";
import ValidationHandler from "../middleware/validation-handler";
import AuthHandlers from "../middleware/auth-handlers";
import FormHandler from "../middleware/form-handlers";
import CommonUtil from "./common";
import validate_request, { CheckType } from "./validate_request";
import { ServerError } from "./http-errors";

type Wrapper = ((router: Router) => void);

type Handler = (
    req: Request,
    res: Response,
    next: NextFunction
) => Promise<void> | Promise<Response<any> | undefined> | void;

type Route = {
    path: string;
    method: string;
    validators?: ValidationChain[];
    required_auth?: boolean;
    authorized_permissions?: string[];
    form_data?: boolean;
    handler: Handler | Handler[];
    optional_authorized? : boolean,
};

export const applyMiddleware = (middleware: Wrapper[], router: Router) => {
    for (const f of middleware) {
        f(router);
    }
};

export const applyRoutes = (routes: Route[], router: Router) => {
    for (const route of routes) {
        const { method, path, validators, required_auth, optional_authorized, authorized_permissions, form_data, handler } = route;
        let middleware = [];
        middleware.push(path);
        if (required_auth || authorized_permissions?.length! > 0 || optional_authorized) {
            middleware.push(new AuthHandlers().authenticateHTTPToken(optional_authorized));
        }
        if (authorized_permissions) {
            middleware.push(new AuthHandlers().authorize(authorized_permissions));
        }
        if (form_data) {
            middleware.push(new FormHandler().parse);
        }
        if (validators) {
            middleware.push(validators, new ValidationHandler().validate);
        }
        middleware.push(handler);
        (router as any)[method](...middleware);   
    }
};


interface IRouteCreation { 
    authorized_permissions?: string[],
    validators?: ValidationChain[],
    optional_authorized? : boolean,
}

type routeCallBack = (req: Request) =>  ReturnType<any>;

export function createGetRoute(path : string,routeParam: IRouteCreation, callback: routeCallBack) { 
    return defineRoute(path,"get",routeParam,false, callback);
}
export function createPostRoute(path : string,routeParam: IRouteCreation, callback: routeCallBack) { 
    return defineRoute(path,"post",routeParam, false,callback);
}
export function createPatchRoute(path : string,routeParam: IRouteCreation, callback: routeCallBack) { 
    return defineRoute(path,"patch",routeParam,false, callback);
}
export function createDeleteRoute(path : string,routeParam: IRouteCreation, callback: routeCallBack) { 
    return defineRoute(path,"delete",routeParam,false, callback);
}
export function formPostRoute(path : string,routeParam: IRouteCreation,  callback: routeCallBack) { 
    return defineRoute(path,"post",routeParam,true, callback);
}
export function formPatchRoute(path : string,routeParam: IRouteCreation,  callback: routeCallBack) { 
    return defineRoute(path,"patch",routeParam,true, callback);
}

function defineRoute(path: string, method: string, routeParam: IRouteCreation, isFormData: boolean, callback: routeCallBack) {
    routeParam.validators?.push(validate_request("limit", { optional: true, isNumeric: true }, CheckType.query));
    routeParam.validators?.push(validate_request("page", { optional: true, isNumeric: true }, CheckType.query));
    return {
        path: path,
        method: method,
        authorized_permissions: routeParam.authorized_permissions,
        validators: routeParam.validators,
        optional_authorized: routeParam.optional_authorized,
        form_data: isFormData,
        handler: async (req: Request, res: Response) => { 
            try {
                req.query.limit = ((req.query.limit) ? req.query.limit : 10) as any;
                req.query.page = ((req.query.page) ? req.query.page : 1) as any;
                let data = await callback(req);
                if (!data) { 
                    throw new ServerError("route: " + path + " | method: " + method + ", has no data return");
                }
                if (data.custom_response) {
                    res.status(200).json(data.custom_response);
                } else {
                    let count = 0;
                    if (Array.isArray(data)) { 
                        if (Number.isFinite(data[1])) { // case from return [data, count] 
                            count = data[1];
                            data = data[0];
                        }
                    }
                    res.json(CommonUtil.makeJSONResponseData({data: data, total : count, page: Number(req.query.page), limit: Number(req.query.limit)}));
                }
            } catch (error) {
                res.json(CommonUtil.makeJSONResponseError(error));
            }
        }
    }
}