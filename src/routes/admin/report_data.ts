import controllers from "../../controllers";
import { createGetRoute } from "../../utils";
import EnumConstant from "../../utils/enumConstant";
import { pAdmin } from "../../utils/permissionAdmin";
import validate_request, { CheckType } from "../../utils/validate_request";

export default [
  createGetRoute(
    "/admin/report_data/approved_list/filter_data",
    {
      authorized_permissions: [pAdmin.report.studentList],
    },
    async (req) => {
      return controllers.reportData.filterDataApprovedList(req);
    }
  ),
  createGetRoute(
    "/admin/report_data/approved_list",
    {
      authorized_permissions: [pAdmin.report.studentList],
      validators: [
        validate_request("start_date", { isDate: true }, CheckType.query),
        validate_request("end_date", { isDate: true }, CheckType.query),
        validate_request(
          "schools",
          { optional: true, isMongoId: true },
          CheckType.query
        ),
      ],
    },
    async (req) => {
      return controllers.reportData.approvedList(req);
    }
  ),

  createGetRoute(
    "/admin/report_data/filter_data",
    {
      authorized_permissions: [
        pAdmin.report.adminDataStudentApply,
        pAdmin.report.adminDataApprovedCount,
      ],
    },
    async (req) => {
      return controllers.reportData.filterData(req);
    }
  ),
  createGetRoute(
    "/admin/report_data/student_apply_count",
    {
      authorized_permissions: [pAdmin.report.adminDataStudentApply],
      validators: [
        validate_request("start_date", { exist: true }, CheckType.query),
        validate_request("end_date", { exist: true }, CheckType.query),
        validate_request(
          "apply_majors",
          { optional: true, isMongoId: true },
          CheckType.query
        ),
        validate_request(
          "shifts",
          { optional: true, isMongoId: true },
          CheckType.query
        ),
      ],
    },
    async (req) => {
      return controllers.reportData.studentApplyBySchool(req);
    }
  ),
  createGetRoute(
    "/admin/report_data/student_apply_by_major",
    {
      authorized_permissions: [pAdmin.report.adminDataStudentApply],
      validators: [
        validate_request("start_date", { exist: true }, CheckType.query),
        validate_request("end_date", { exist: true }, CheckType.query),
        validate_request(
          "apply_majors",
          { optional: true, isMongoId: true },
          CheckType.query
        ),
        validate_request(
          "shifts",
          { optional: true, isMongoId: true },
          CheckType.query
        ),
      ],
    },
    async (req) => {
      return controllers.reportData.studentApplyBySchoolByMajor(req);
    }
  ),
  createGetRoute(
    "/admin/report_data/student_apply_city_province",
    {
      authorized_permissions: [pAdmin.report.adminDataStudentApply],
      validators: [
        validate_request("start_date", { exist: true }, CheckType.query),
        validate_request("end_date", { exist: true }, CheckType.query),
        validate_request(
          "apply_majors",
          { optional: true, isMongoId: true },
          CheckType.query
        ),
        validate_request(
          "shifts",
          { optional: true, isMongoId: true },
          CheckType.query
        ),
      ],
    },
    async (req) => {
      return controllers.reportData.studentApplyByCityProvince(req);
    }
  ),
  createGetRoute(
    "/admin/report_data/approval_student_count",
    {
      authorized_permissions: [pAdmin.report.adminDataApprovedCount],
      validators: [
        validate_request("start_date", { exist: true }, CheckType.query),
        validate_request("end_date", { exist: true }, CheckType.query),
        validate_request(
          "apply_majors",
          { optional: true, isMongoId: true },
          CheckType.query
        ),
        validate_request(
          "shifts",
          { optional: true, isMongoId: true },
          CheckType.query
        ),
      ],
    },
    async (req) => {
      return controllers.reportData.approvalStudentCount(req);
    }
  ),

  createGetRoute(
    "/admin/report_data/approval_student_by_major",
    {
      authorized_permissions: [pAdmin.report.adminDataApprovedCount],
      validators: [
        validate_request("start_date", { exist: true }, CheckType.query),
        validate_request("end_date", { exist: true }, CheckType.query),
        validate_request(
          "apply_majors",
          { optional: true, isMongoId: true },
          CheckType.query
        ),
        validate_request(
          "shifts",
          { optional: true, isMongoId: true },
          CheckType.query
        ),
      ],
    },
    async (req) => {
      console.log(req.body);

      return controllers.reportData.approvalStudentByMajor(req);
    }
  ),
  createGetRoute(
    "/admin/report_data/approval_student_city_province",
    {
      authorized_permissions: [pAdmin.report.adminDataApprovedCount],
      validators: [
        validate_request("start_date", { exist: true }, CheckType.query),
        validate_request("end_date", { exist: true }, CheckType.query),
        validate_request(
          "apply_majors",
          { optional: true, isMongoId: true },
          CheckType.query
        ),
        validate_request(
          "shifts",
          { optional: true, isMongoId: true },
          CheckType.query
        ),
      ],
    },
    async (req) => {
      return controllers.reportData.approvalStudentByCityProvince(req);
    }
  ),

  createGetRoute(
    "/admin/report_data/study_status/filter_data",
    {
      authorized_permissions: [
        pAdmin.report.adminDataStudentApply,
        pAdmin.report.adminDataApprovedCount,
      ],
    },
    async (req) => {
      let data: any = await controllers.reportData.filterData(req);
      data.poor_status = [EnumConstant.ACTIVE];
      data.type_poverty_status = [
        {
          _id: EnumConstant.TypePovertyStatus.POOR_1,
          name: "ក្រ១",
        },
        {
          _id: EnumConstant.TypePovertyStatus.POOR_2,
          name: "ក្រ២",
        },
        {
          _id: EnumConstant.TypePovertyStatus.NEAR_POOR,
          name: "ងាយរងហានិភ័យ",
        },
        {
          _id: EnumConstant.TypePovertyStatus.NOT_POOR,
          name: "ទូទៅ",
        },
      ];
      return data;
    }
  ),
  createGetRoute(
    "/admin/report_data/study_status_by_school",
    {
      authorized_permissions: [pAdmin.report.adminDataApprovedCount],
      validators: [
        // validate_request("start_date", {exist: true}, CheckType.query),
        validate_request("end_date", { exist: true }, CheckType.query),
        validate_request(
          "apply_majors",
          { optional: true, isMongoId: true },
          CheckType.query
        ),
        validate_request(
          "shifts",
          { optional: true, isMongoId: true },
          CheckType.query
        ),
        validate_request(
          "poor_status",
          { optional: true, isNumeric: true },
          CheckType.query
        ).isIn([EnumConstant.ACTIVE]),
      ],
    },
    async (req) => {
      return controllers.reportData.studentStudyStatusBySchool(req);
    }
  ),
  createGetRoute(
    "/admin/report_data/study_status_by_major",
    {
      authorized_permissions: [pAdmin.report.adminDataApprovedCount],
      validators: [
        // validate_request("start_date", {exist: true}, CheckType.query),
        validate_request("end_date", { exist: true }, CheckType.query),
        validate_request(
          "apply_majors",
          { optional: true, isMongoId: true },
          CheckType.query
        ),
        validate_request(
          "shifts",
          { optional: true, isMongoId: true },
          CheckType.query
        ),
        validate_request(
          "poor_status",
          { optional: true, isNumeric: true },
          CheckType.query
        ).isIn([EnumConstant.ACTIVE]),
      ],
    },
    async (req) => {
      return controllers.reportData.studentStudyStatusByMajor(req);
    }
  ),
  createGetRoute(
    "/admin/report_data/report_weekly_progress",
    {
      authorized_permissions: [pAdmin.report.adminDataApprovedCount],
      validators: [
        // validate_request("start_date", {exist: true}, CheckType.query),
        validate_request("end_date", { exist: true }, CheckType.query),
        validate_request(
          "apply_majors",
          { optional: true, isMongoId: true },
          CheckType.query
        ),
        validate_request(
          "shifts",
          { optional: true, isMongoId: true },
          CheckType.query
        ),
      ],
    },
    async (req) => {
      return controllers.reportData.weeklyProgressReport(req);
    }
  ),
];
