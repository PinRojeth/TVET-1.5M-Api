import { body,query,param} from "express-validator";

interface ValidateOption {
    optional?: boolean,
    exist?: boolean,
    isMongoId?: boolean,
    isNumeric?: boolean,
    isPhoneNumber?: boolean,
    email?: boolean,
    isArray?: boolean,
    notArray?: boolean,
    notExist?: boolean,
    isDate?: boolean,
    isBoolean?: boolean,
    optionalNotEmpty?: boolean,
    isDecimal? : boolean,
    length?: {
        min? : number,
        max?: number
    },
    isJSON?: boolean,
}

export enum CheckType {
    body = 1,
    param,
    query
}

export default (_param: string, option: ValidateOption, checkType : CheckType = CheckType.body) => {
    var getValidate = body(_param);
    if (checkType === CheckType.param) {
        getValidate = param(_param)
    } else if (checkType === CheckType.query) { 
        getValidate = query(_param);
    }
    if (option.optional) { 
        getValidate.optional({checkFalsy: true});
    }
    if (option.optionalNotEmpty) { 
        getValidate.optional().exists({ checkFalsy: true }).withMessage(_param + " cannot be empty");
    }
    if (option.exist) {
        getValidate.exists({checkFalsy: !option.optional}).withMessage(_param + " is required");
    }
    if (option.notExist) { 
        getValidate.not().exists().withMessage(_param + ' is not allowed to passes'); 
    }
    if (option.isMongoId) {
        getValidate.isMongoId().withMessage(_param + ' must be id');
    }
    if (option.isPhoneNumber) { 
        getValidate.isNumeric().withMessage("invalid " + _param + " as phone number").isLength({ min: 9, max: 13 }).withMessage("invalid " + _param + "as phone number");
    }
    if (option.email) { 
        getValidate.isEmail().withMessage("invalid " + _param + " as email format");
    }
    if (option.isNumeric) { 
        getValidate.isNumeric().withMessage(_param + " must be number");
    }
    if (option.isDecimal) { 
        getValidate.isDecimal().withMessage(_param + " must be decimal");
    }
    if (option.isArray) { 
        getValidate.isArray().withMessage(_param + " must be array");
    }
    if (option.notArray) { 
        getValidate.not().isArray().withMessage(_param + " must not be array");
    }
    if (option.isDate) { 
        getValidate.isDate().withMessage(_param + " must be date_time");
    }
    if (option.isBoolean) { 
        getValidate.isBoolean().withMessage(_param + " must be boolean");
    }
    if (option.isJSON) {
        getValidate.isJSON().withMessage(_param + " must be JSON");
    }
    let minLength = option.length?.min ? option.length?.min : 0; 
    let maxLength = option.length?.max ? option.length?.max : 0; 
    if (maxLength > 0 || minLength > 0) {
        if (maxLength < 1) {
            getValidate.isArray({ min: minLength }).withMessage(_param + " at least " + minLength + " length");
        } else if (minLength < 1) {
            getValidate.isArray({ max: maxLength }).withMessage(_param + " at max " + maxLength + " length");
        } else { 
            getValidate.isArray({min: minLength, max: maxLength }).withMessage(_param + " must be in between " + minLength + " - " + maxLength + " length");
        }
    }
    return getValidate;
};
