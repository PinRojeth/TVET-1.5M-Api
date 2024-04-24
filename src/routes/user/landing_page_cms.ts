import controllers from '../../controllers';
import { createGetRoute } from "../../utils";

export default [
    createGetRoute("/user/landing_page_cms",
        { }, async (req) => {
            return await controllers.landingPageCms.getOne({
                select:"-__v -updatedAt -createdAt"
            } );
        }
    ),
]
