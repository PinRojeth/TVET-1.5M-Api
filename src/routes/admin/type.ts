import controllers from '../../controllers';
import { createGetRoute } from "../../utils";

export default [
    createGetRoute("/admin/type/scholarship_document",
        {}, async (req) => {
            return await controllers.typeScholarshipDocument.getMany({
                sort: {_id: 1}
             })
        }
    )
]
