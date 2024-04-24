import { Request, Response, NextFunction, Router } from "express";
import cors from "cors";
import parser from "body-parser";
import compression from "compression";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";

dotenv.config();

export const handleCors = (router: Router) => {
    router.use(cors({ credentials: true, origin: true }))
};

export const handleBodyRequestParsing = (router: Router) => {  
    router.use(parser.urlencoded({ extended: true }));
    router.use(parser.json());
    router.use((err: Error, req: Request, res: Response, next: NextFunction) => {
        if (err instanceof SyntaxError) {
            const error = { status: undefined, type: undefined, ...err }
            error.message = err.message;
            if (error.status === 400 && 'body' in err) {
              res.status(400).json({ status : 400, errors: "Bad JSON", message: error.message})
            }
        }
    });
};

export const handleCompression = (router: Router) => {
    router.use(compression());
};

export const handleHelmet = (router: Router) => {
    router.use(helmet());
}

export const handleMorgan = (router: Router) => {
    if (process.env.NODE_ENV === "production") {
        router.use(morgan('combined'));
    } else {
        router.use(morgan('dev'));
    }
}

export const catchZeroSpace = (router: Router) => { 
    router.use(function (req, res, next) {
        req.body.name = replaceSpace(req.body.name);
        req.body.username = replaceSpace(req.body.username);
        next();
    })
}

function replaceSpace(value: string) {
    if (value != undefined) { 
        return value.replace(/[\u200B-\u200D\uFEFF]/g, '');
    }
}