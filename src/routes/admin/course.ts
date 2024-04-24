import validate_request, { CheckType } from "../../utils/validate_request";
import controllers from "../../controllers";
import {
  createDeleteRoute,
  createGetRoute,
  createPostRoute,
  createPatchRoute,
} from "../../utils";
import { pAdmin } from "../../utils/permissionAdmin";
import EnumConstant from "../../utils/enumConstant";

let validates = [
  validate_request("code", { exist: true }),
  validate_request("registation_start", { isDate: true }),
  validate_request("registation_end", { isDate: true }),
  validate_request("apply_majors", { isMongoId: true }),
  validate_request("fee", { optional: true, isNumeric: true }),
  validate_request("duration", { optional: true, isNumeric: true }),
  validate_request("student_amount", { optional: true, isNumeric: true }),
  validate_request("shifts", { isMongoId: true }),
];

export default [
  createGetRoute(
    "/admin/course/filter_data",
    {
      authorized_permissions: [pAdmin.course.read],
    },
    async (req) => {
      return controllers.course.filterData(req);
    }
  ),
  createPostRoute(
    "/admin/course",
    {
      authorized_permissions: [pAdmin.course.write],
      validators: validates,
    },
    async (req) => {
      return controllers.course.create(req);
    }
  ),
  createPatchRoute(
    "/admin/course/:_id/set_active",
    {
      authorized_permissions: [pAdmin.course.setActive],
      validators: [
        validate_request("_id", { isMongoId: true }, CheckType.param),
        validate_request("status", { isNumeric: true }).isIn([
          EnumConstant.ACTIVE,
          EnumConstant.DISABLED,
        ]),
      ],
    },
    async (req) => {
      return controllers.course.setActive(req);
    }
  ),
  createPatchRoute(
    "/admin/course/:_id/archive",
    {
      authorized_permissions: [pAdmin.course.setActive],
      validators: [
        validate_request("_id", { isMongoId: true }, CheckType.param),
        validate_request("archive", { isNumeric: true }).isIn([
          EnumConstant.ACTIVE,
          EnumConstant.INACTIVE,
        ]),
      ],
    },
    async (req) => {
      return controllers.course.setArchive(req);
    }
  ),
  createPatchRoute(
    "/admin/course/:_id",
    {
      authorized_permissions: [pAdmin.course.write],
      validators: [
        validate_request("_id", { isMongoId: true }, CheckType.param),
        ...validates,
      ],
    },
    async (req) => {
      return controllers.course.update(req);
    }
  ),
  createGetRoute(
    "/admin/course/",
    {
      authorized_permissions: [pAdmin.course.read],
    },
    async (req) => {
      return controllers.course.getList(req);
    }
  ),
  createGetRoute(
    "/admin/course/filter_date_data",
    {
      authorized_permissions: [pAdmin.course.read],
      validators: [
        validate_request("start_date", { exist: true }, CheckType.query),
        validate_request("end_date", { exist: true }, CheckType.query)
      ],
    },
    async (req) => {
      return controllers.course.getDataFromDateRange(req);
    }
  ),

  createGetRoute(
    "/admin/course/:_id/student",
    {
      authorized_permissions: [pAdmin.course.read],
      validators: [
        validate_request("_id", { isMongoId: true }, CheckType.param),
      ],
    },
    async (req) => {
      req.query.limit = "0";
      req.query.page = "0";
      return controllers.course.studentInCourse(req);
    }
  ),
  createGetRoute(
    "/admin/course/:_id",
    {
      authorized_permissions: [pAdmin.course.read],
      validators: [
        validate_request("_id", { isMongoId: true }, CheckType.param),
      ],
    },
    async (req) => {
      let data = await controllers.course.getOne({
        query: {
          _id: req.params._id,
          status: { $ne: EnumConstant.DELETE },
        },
        populates: [
          { path: "apply_majors", select: "name name_en code" },
          { path: "shifts", select: "name name_en code" },
          { path: "schools", select: "name name_en code profile_image" },
        ],
      });
      return controllers.course.checkThrowNotFound(data);
    }
  ),
  createDeleteRoute(
    "/admin/course/:_id",
    {
      authorized_permissions: [pAdmin.course.delete],
      validators: [
        validate_request("_id", { isMongoId: true }, CheckType.param),
      ],
    },
    async (req) => {
      return controllers.course.delete(req);
    }
  ),
];
