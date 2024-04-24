import controllers from "../../controllers";
import validate_request, { CheckType } from "../../utils/validate_request";
import { Request, Response } from "express";
export default [
    {
        path: "/shared/file_data/download/:_id",
        method: "get",
        validators: [
            validate_request('_id', { exist: true, isMongoId: true }, CheckType.param),
        ],
        handler: async (req: Request, res: Response) => {
            await controllers.fileData.download({ req: req, res: res });
        }
    }, 
]
