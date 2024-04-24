import controllers from '../../controllers';
import { createGetRoute, createPatchRoute } from "../../utils";
import { pAdmin } from '../../utils/permissionAdmin';
import validate_request from '../../utils/validate_request';

export default [
    createGetRoute("/admin/landing_page_cms",
        {
            authorized_permissions: [pAdmin.landingPageCms.read],
        }, async (req) => {
            return await controllers.landingPageCms.getOne({
                select:"-__v -updatedAt -createdAt"
            } );
        }
    ),
    createPatchRoute("/admin/landing_page_cms/",
        {
            authorized_permissions: [pAdmin.landingPageCms.write],
            validators: [
                validate_request("name", {exist: true}),
                validate_request("description", {exist: true}),
            ]   
        }, async (req) => {
            return controllers.landingPageCms.update(req);
        }
    ),
]
