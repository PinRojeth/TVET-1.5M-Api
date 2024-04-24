import controllers from '../../controllers';
import { createGetRoute, createPatchRoute } from "../../utils";
import { pAdmin } from '../../utils/permissionAdmin';
import validate_request from '../../utils/validate_request';

export default [
    createGetRoute("/admin/system_config/token",
        {
            authorized_permissions: [pAdmin.systemConfig.read],
        }, async (req) => {
            return await controllers.systemConfig.getOne({
                select:"nsaf_token"
            } );
        }
    ),
    createPatchRoute("/admin/system_config/token",
        {
            authorized_permissions: [pAdmin.systemConfig.write],
            validators: [
                validate_request("nsaf_token", {exist: true}),
            ]   
        }, async (req) => {
            return controllers.systemConfig.updateToken(req);
        }
    ),
]
