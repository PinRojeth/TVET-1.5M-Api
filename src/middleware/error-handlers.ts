import { Request, Response, NextFunction, Router } from "express";
import { ClientError, HTTPClientError } from "../utils/http-errors";

const handle404Error = (router: Router) => {
    router.use((req: Request, res: Response) => {
        try {
            throw new ClientError(400, "The requested URL " + req.url + " was not found");
        } catch (error: any) {
            res.status(404).json({ status: error.statusCode, message: error.message, error_code: 404 });
        }
    });
};

const handleClientError = (router: Router) => {
    router.use((err: Error, req: Request, res: Response, next: NextFunction) => {
        if (err instanceof HTTPClientError) {
            console.warn(err);
            console.log(typeof err);
            res.status(err.statusCode).send(err.message);
        } else {
            next(err);
        }
    });
};

const handleServerError = (router: Router) => {
    router.use((err: Error, req: Request, res: Response, next: NextFunction) => {
        console.error(err);
        if (process.env.NODE_ENV === "production") {
            res.status(500).send("Internal Server Error");
        } else {
            res.status(500).send(err.stack);
        }
    });
};

export default [handle404Error, handleClientError, handleServerError];