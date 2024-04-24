import { createGetRoute } from "../../utils";
import controllers from "../../controllers";
import validate_request, { CheckType } from "../../utils/validate_request";
import models from "../../models";

export default [
    createGetRoute("/shared/address/city_province", {},
        async (req) => {
            let data = await controllers.address.getCityProvince();
            return data;
        }
    ),
    createGetRoute("/shared/address/district",
        {
            validators: [
                validate_request('city_provinces', { exist: true }, CheckType.query)
            ]
        },
        async (req) => {
            let data = await controllers.address.getDistrictByCityId(req.query.city_provinces as any);
            return data;
        }
    ),
    createGetRoute("/shared/address/commune",
        {
            validators: [
                validate_request('districts', { exist: true }, CheckType.query)
            ]
        },
        async (req) => {
            let data = await controllers.address.getCommuneByDistrictId(req.query.districts as any);
            return data;
        }
    ),
    createGetRoute("/shared/address/village",
        {
            validators: [
                validate_request('communes', { exist: true }, CheckType.query)
            ]
        },
        async (req) => {
            let data = await controllers.address.getVillageByCommuneId(req.query.communes as any);
            return data;
        }
    ),
    createGetRoute("/shared/address/nationality",
        {
        },
        async (req) => {
            return await models.country.find()
                .select('_id nationality nationality_en')
                .sort({ order: 1 })
                .lean()
        }
    ),
];

