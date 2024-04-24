import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';

export default class ValidationHandler {
    public validate (req: Request, res: Response, next: NextFunction) {
        const result = validationResult(req);
        if (!result.isEmpty()) {
            res.status(400).json({ status: 0, errors: result.array() });
            return
        }
        return next();
    }
}
