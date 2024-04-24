import controllers from '../../controllers';
import { ISchools } from '../../models';
import { createGetRoute, formPatchRoute, formPostRoute } from '../../utils';
import CommonUtil from '../../utils/common';
import validate_request, { CheckType } from '../../utils/validate_request';
import { pAdmin } from '../../utils/permissionAdmin';

let validates = [
    validate_request('name', { exist: true }),
    validate_request('name_en', { exist: true }),
    validate_request('code', { exist: true }),
    validate_request('code_en', { exist: true }),
    validate_request('phone_number', { exist: true }),
    validate_request('email', { email: true }),
    validate_request('create_date', { isDate: true,optional: true }),
    validate_request('register_date', { isDate: true,optional: true }),
    validate_request("address", { isJSON: true }),
    // validate_request('apply_majors', { isArray: true }).isLength({min: 1}),
    // validate_request('apply_majors.*', { isMongoId: true }),
]
export default [
    createGetRoute("/admin/school/filter_data",
        {
            authorized_permissions: [pAdmin.school.read],
        }, async (req) => {
            return controllers.school.filterData(req);
        }
    ),
    formPostRoute("/admin/school",
        {
            authorized_permissions: [pAdmin.school.write],
            validators: [
                validate_request('first_name', { exist: true }),
                validate_request('last_name', { exist: true }),
                validate_request('username', { exist: true }).isLength({ min: 6 }).withMessage("username at least 6 characters."),
                validate_request('password', { exist: true }).isLength({ min: 8 }).withMessage("password at least 8 characters."),
                ...validates
            ]
        }, async (req) => {
            return await controllers.school.create(req);
        }
    ),
    formPatchRoute("/admin/school/:_id",
        {
            authorized_permissions: [pAdmin.school.update],
            validators: [
                validate_request('_id', { isMongoId: true }, CheckType.param),
                ...validates
            ]
        }, async (req) => {
            return await controllers.school.update(req); 
        }
    ),
    createGetRoute("/admin/school/active_course",
        {
            authorized_permissions: [pAdmin.school.read, pAdmin.student.read]
        }, async (req) => {
            return controllers.school.getSchoolList(req);
        }
    ),
    createGetRoute("/admin/school/check_exist",
        {
            validators: [
                validate_request('name', { exist: true }, CheckType.query),
                validate_request("_id", { optional: true, isMongoId: true }, CheckType.query)
            ]
        }, async (req) => {
            return controllers.school.checkNameExist({ req });
        }
    ),
    
    createGetRoute("/admin/school",
        {
            authorized_permissions: [pAdmin.school.read],
            validators: [
                validate_request('city_provinces', { optional: true, isNumeric: true }, CheckType.query),
            ]
        }, async (req) => {
            let { search } = req.query;
            let query: any = {};
            if (req.query.city_provinces) {
                query["address.city_provinces"] = req.query.city_provinces;
            }
            if (search) {
                query.$or = CommonUtil.searchNameCode(search);
            }
            if (req.body._user.schools) {
                query._id = req.body._user.schools;
            }
            return await controllers.school.getMany({
                query: query,
                limit: req.query.limit,
                page: req.query.page,
                populates: [
                    { path: "address.city_provinces", select: "name name_en" }
                ],
                select: 'name name_en code status address profile_image'
            })
        }
    ),
    
    createGetRoute("/admin/school/:_id",
        {
            validators: [
                validate_request("_id", { exist: true, isMongoId: true }, CheckType.param),
            ]
        }, async (req) => {
            let getSchool = await controllers.school.getOne({
                query: { _id: req.params._id },
                populates: [
                    { path: "address.villages", select: "name name_en" },
                    { path: "address.communes", select: "name name_en" },
                    { path: "address.districts", select: "name name_en" },
                    { path: "address.city_provinces", select: "name name_en" },
                    { path: "apply_majors", select: "name name_en" }, 
                ],
            }) as ISchools;
            return controllers.school.checkThrowNotFound(getSchool);
        }
    )
]