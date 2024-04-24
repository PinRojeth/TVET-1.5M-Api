import { createGetRoute, formPostRoute } from "../../utils";
import validate_request, { CheckType } from "../../utils/validate_request";
import controllers from "../../controllers";
import { pStudent } from "../../utils/permissionStudent";

export default [
    createGetRoute('/user/apply_study/city_province',
        {
        }, async (req) => { 
            return controllers.school.cityProvinceBySchool(req)
        }
    ),
    createGetRoute('/user/apply_study/institute', //depreciate
        {
            validators: [
                validate_request('city_provinces', { optional: true, isNumeric: true },CheckType.query),
                validate_request('limit', { optional: true, isNumeric: true },CheckType.query),
                validate_request('page', { optional: true, isNumeric: true }, CheckType.query)
            ]
        }, async (req) => { 
            return controllers.school.getSchoolList(req, true)
        }
    ),
    createGetRoute('/user/apply_study/institute/:_id/course',
        {
            validators: [
                validate_request('_id', { isMongoId: true }, CheckType.param),
            ]
        }, async (req) => { 
            return controllers.school.lmsActiveCourse(req)
        }
    ),
    createGetRoute('/user/apply_study/school',
        {
            validators: [
                validate_request('city_provinces', { optional: true, isNumeric: true },CheckType.query),
                validate_request('limit', { optional: true, isNumeric: true },CheckType.query),
                validate_request('page', { optional: true, isNumeric: true }, CheckType.query)
            ]
        }, async (req) => { 
            return controllers.school.getSchoolList(req, true)
        }
    ),
    createGetRoute('/user/apply_study/school/filter_data',
        {
        }, async (req) => { 
            return controllers.school.filterDataLms(req)
        }
    ),
    createGetRoute('/user/apply_study/school/:_id',
        {
            validators: [
                validate_request('_id', { isMongoId: true }, CheckType.param),
            ]
        }, async (req) => { 
            return controllers.school.lmsSchoolDetail(req)
        }
    ),
    formPostRoute("/user/apply_study",
        {
            optional_authorized: true,
            validators: [
                validate_request("first_name", {exist: true}),
                validate_request("last_name", {exist: true}),
                validate_request("gender", {exist: true}).isIn(["male", "female", "other"]),
                validate_request("phone_number", {exist: true}),
                validate_request("courses", { isMongoId: true}),
                validate_request("poor_id", {optional: true,exist: true}),
                validate_request("date_of_birth", { isDate: true }),
                validate_request('username', { optional: true, exist: true }).isLength({ min: 8 }),
                validate_request('password', { optional: true, exist: true }).isLength({ min: 8 }),
                validate_request('remove_attachment_files', { optional: true, isArray: true }),
                validate_request('remove_attachment_files.*', { optional: true, isMongoId: true }),
            ]
        }, async (req) => {
            if (req.body._user) {
                return controllers.student.updateApplyRequest(req);
            } else {
                return controllers.student.applyRequest(req, true);
            }
        }
    ),
    createGetRoute("/user/apply_study/check_poor_data",
        {
            validators: [
                validate_request("poor_id", { exist: true }, CheckType.query),
                validate_request("date_of_birth", { isDate: true}, CheckType.query),
            ]
        }, async (req) => {
            return controllers.student.getPoorData(req);
        }
    ),
    createGetRoute("/user/apply_study/sector",
        {  }, async (req) => {
            return controllers.sector.lmsGetList(req);
        }
    ),
    createGetRoute("/user/apply_study/apply_major",
        { 
            validators: [
                validate_request("sectors", { isMongoId: true }, CheckType.query)
            ]
        }, async (req) => {
            return controllers.applyMajor.lmsGetList(req);
        }
    ),
    createGetRoute("/user/apply_study/shift",
        { 
            validators: [
                validate_request("apply_majors", { isMongoId: true }, CheckType.query)
            ]
        }, async (req) => {
            return controllers.shift.lmsGetList(req);
        }
    ),
    createGetRoute("/user/apply_study/available_school",
        { 
            validators: [
                validate_request("apply_majors", { isMongoId: true }, CheckType.query),
                validate_request("shifts", { isMongoId: true }, CheckType.query)
            ]
        }, async (req) => {
            return controllers.school.lmsGetList(req);
        }
    ),
    createGetRoute("/user/apply_study/applied_detail",
        { 
            authorized_permissions: [pStudent.applyStudy.read],
        }, async (req) => {
            req.params._id = req.body._user._id;
            return controllers.student.getDetail(req);
        }
    ),
];
