import { ICourses, ObjectId } from "../models";
import AbstractController from "./abstract_controller";
import CommonUtil from "../utils/common";
import { Model } from "mongoose";
import EnumConstant, { Role } from "../utils/enumConstant";
import controllers from ".";
import { pAdmin } from "../utils/permissionAdmin";
import { start } from "repl";
import apply_major from "../routes/admin/apply_major";
export default class ApplyMajorController extends AbstractController<ICourses> {
  model: Model<ICourses>;
  constructor(model: Model<ICourses>) {
    super(model);
    this.model = model;
  }

  courseName(code: any, major: any, shift: any) {
    return code + " | " + major + " | " + shift;
  }
  async create(req: any) {
    await this.validate(req);
    let data = new this.model(req.body);
    data.schools = req.body._user.schools;
    data.staffs = req.body._user._id;
    return await this.model.create(data);
  }

  private async validate(req: any) {
    let {
      registation_start,
      registation_end,
      apply_majors,
      shifts,
      course_start,
      course_end,
    } = req.body;
    let [sDate, eDate] = CommonUtil.parseStartDateEndDate(
      registation_start,
      registation_end
    );
    let [cStart, cEnd] = CommonUtil.parseStartDateEndDate(
      course_start,
      course_end
    );
    if (cStart < sDate) {
      this.throwHttpError("invalid course_start date");
    }
    req.body.registation_start = sDate;
    req.body.registation_end = eDate;
    let query: any = {
      apply_majors: apply_majors,
      shifts: shifts,
      $or: [
        { registation_start: { $gte: sDate, $lte: eDate } },
        { registation_end: { $gte: sDate, $lte: eDate } },
        { registation_start: { $lt: sDate }, registation_end: { $gt: eDate } },
      ],
      schools: req.body._user.schools,
    };
    if (req.params._id) {
      query._id = { $ne: req.params._id };
    }
    let [getMajor, checkCourse, checkShift] = await Promise.all([
      controllers.applyMajor.getOne({
        query: {
          _id: apply_majors,
        },
      }),
      this.getOne({
        query: query,
      }),
      controllers.shift.getOne({
        query: {
          _id: shifts,
        },
      }),
    ]);
    controllers.applyMajor.checkThrowNotFound(getMajor);
    controllers.shift.checkThrowNotFound(checkShift);
    if (checkCourse) {
      this.throwHttpError(
        "ថ្ងៃទទួលពាក្យស្ទួនជាកូដសម្គាល់៖ " + checkCourse.code
      );
    }
  }

  async update(req: any) {
    let id = req.params._id;
    let [getData, validate] = await Promise.all([
      this.getOne({
        query: {
          _id: id,
          status: { $ne: EnumConstant.DELETE },
        },
      }),
      this.validate(req),
    ]);
    this.checkThrowNotFound(getData);
    let data = new this.model(req.body);
    if (getData.course_start < new Date()) {
      if (
        getData.course_start.setHours(0, 0, 0, 0) !=
        data.course_start.setHours(0, 0, 0, 0)
      ) {
        if (
          req.body._user.roles.permissions.indexOf(
            pAdmin.adminAction.change_course_date
          ) == -1
        ) {
          this.throwHttpError(
            "វគ្គបានចាប់ផ្តើម អ្នកមិនមានសិទ្ធផ្លាស់ប្ដូរថ្ងៃចូលរៀនទេ!"
          );
        }
      }
    }
    let obj = CommonUtil.removeKeys(data, [
      "_id",
      "status",
      "schools",
      "staffs",
    ]);
    return this.model.findOneAndUpdate(
      { _id: id },
      { $set: obj },
      { new: true }
    );
  }

  async setActive(req: any) {
    let schools = req.body._user.schools;
    let targetStatus = Number(req.body.status as string);
    let query: any = {
      _id: req.params._id,
    };
    if (schools) {
      query.schools = schools;
    }
    if (targetStatus == EnumConstant.ACTIVE) {
      query.status = EnumConstant.DISABLED;
    } else {
      query.status = EnumConstant.ACTIVE;
    }
    let data = await this.model.findOneAndUpdate(
      query,
      { $set: { status: targetStatus } },
      { new: true }
    );
    return this.checkThrowNotFound(data);
  }
  async setArchive(req: any) {
    let schools = req.body._user.schools;
    let targetStatus = Number(req.body.archive as string);
    let query: any = {
      _id: req.params._id,
      status: { $ne: EnumConstant.DELETE },
    };
    if (schools) {
      query.schools = schools;
    }
    let setData: any = {
      archive: targetStatus,
    };
    if (targetStatus == EnumConstant.ACTIVE) {
      setData.status = EnumConstant.DISABLED;
    }
    let data = await this.model.findOneAndUpdate(
      query,
      { $set: setData },
      { new: true }
    );
    return this.checkThrowNotFound(data);
  }

  async delete(req: any) {
    let id = req.params._id;
    let query: any = {
      _id: id,
      status: { $ne: EnumConstant.DELETE },
    };
    if (req.body._user.schools) {
      query.schools = req.body._user.schools;
    }
    let [getData, studentInCousse] = await Promise.all([
      this.getOne({
        query: query,
      }),
      controllers.student.getOne({
        query: {
          courses: id,
          scholarship_status: { $ne: EnumConstant.REJECTED },
        },
      }),
    ]);
    this.checkThrowNotFound(getData);
    if (studentInCousse) {
      this.throwHttpError("failed to delete, there is student in the course!");
    }
    return this.model.findOneAndUpdate(
      { _id: id },
      { $set: { status: EnumConstant.DELETE } },
      { new: true }
    );
  }
  // async archive(req: any) {
  //     let id = req.params._id
  //     let query: any = {
  //         _id: id,
  //         status: { $ne: EnumConstant.DELETE }
  //     }
  //     if (req.body._user.schools) {
  //         query.schools = req.body._user.schools
  //     }
  //     let getData = await this.getOne({
  //         query: query
  //     });
  //     this.checkThrowNotFound(getData);
  //     return this.model.findOneAndUpdate({ _id: id }, { $set: { status: EnumConstant.ARCHIVE } }, { new: true });
  // }

  async getList(req: any) {
    let { search, schools, apply_majors, shifts } = req.query;
    let [skip, limit] = this.skipLimit(req);
    let query: any = {
      status: { $ne: EnumConstant.DELETE },
    };
    if (schools) {
      query.schools = new ObjectId(schools);
    }
    if (apply_majors) {
      query.apply_majors = new ObjectId(apply_majors);
    }
    if (shifts) {
      query.shifts = new ObjectId(shifts);
    }
    if (req.body._user.schools) {
      query.schools = new ObjectId(req.body._user.schools);
    }
    if (search) {
      query.$or = CommonUtil.searchNameCode(search);
    }
    let data = await this.models.course.aggregate([
      {
        $match: query,
      },
      {
        $addFields: {
          sort_condition: {
            $cond: [{ $eq: ["$archive", EnumConstant.ACTIVE] }, 2, 1],
          },
        },
      },
      { $sort: { sort_condition: 1, _id: -1 } },
      {
        $facet: {
          result: [
            { $skip: skip },
            ...(limit > 0 ? [{ $limit: limit }] : []),
            {
              $lookup: {
                from: "students",
                let: { courseId: "$_id" },
                pipeline: [
                  {
                    $match: {
                      $expr: { $eq: ["$courses", "$$courseId"] },
                      scholarship_status: EnumConstant.ACTIVE,
                    },
                  },
                  {
                    $count: "count",
                  },
                ],
                as: "students",
              },
            },
            {
              $addFields: {
                student_count: {
                  $ifNull: [{ $arrayElemAt: ["$students.count", 0] }, 0],
                },
              },
            },
            {
              $project: {
                __v: 0,
                updatedAt: 0,
                requirement: 0,
                fee: 0,
                students: 0,
                student_amount: 0,
              },
            },
          ],
          totalCount: [
            {
              $count: "count",
            },
          ],
        },
      },
    ]);
    return await this.facetData(data, [
      { path: "apply_majors", select: "name name_en code" },
      { path: "shifts", select: "name name_en code" },
      { path: "schools", select: "name name_en profile_image" },
    ]);
  }

  async filterData(req: any) {
    let query: any = {
      status: { $ne: EnumConstant.DELETE },
    };
    if (req.body._user.schools) {
      query.schools = new ObjectId(req.body._user.schools);
    }
    let data = await this.model.aggregate([
      {
        $match: query,
      },
      {
        $group: {
          _id: "null",
          schools: { $addToSet: "$schools" },
          apply_majors: { $addToSet: "$apply_majors" },
          shifts: { $addToSet: "$shifts" },
        },
      },
      {
        $lookup: {
          from: "schools",
          let: { ids: "$schools" },
          pipeline: [
            {
              $match: {
                $expr: { $in: ["$_id", "$$ids"] },
              },
            },
            {
              $project: {
                name: 1,
                name_en: 1,
                code: 1,
              },
            },
          ],
          as: "schools",
        },
      },
      {
        $lookup: {
          from: "shifts",
          let: { ids: "$shifts" },
          pipeline: [
            {
              $match: {
                $expr: { $in: ["$_id", "$$ids"] },
              },
            },
            {
              $project: {
                name: 1,
                name_en: 1,
                code: 1,
              },
            },
          ],
          as: "shifts",
        },
      },
      {
        $lookup: {
          from: "skills",
          let: { ids: "$apply_majors" },
          pipeline: [
            {
              $match: {
                $expr: { $in: ["$_id", "$$ids"] },
              },
            },
            {
              $project: {
                name: 1,
                name_en: 1,
                code: 1,
              },
            },
          ],
          as: "apply_majors",
        },
      },
      {
        $project: {
          _id: 0,
        },
      },
    ]);
    if (data.length < 1) {
      return {
        apply_majors: [],
        schools: [],
        shifts: [],
      };
    }
    return data[0];
  }

  async availableCourseForStudent(req: any) {
    let getStudent = await controllers.student.getOne({
      query: {
        _id: req.params._id,
      },
    });
    controllers.student.checkThrowNotFound(getStudent);
    let query: any = {
      schools: getStudent.schools,
      status: EnumConstant.ACTIVE,
      _id: { $ne: getStudent.courses },
      // course_end: { $gt: new Date() }
      course_start: { $gt: new Date() },
    };
    // if (req.query.requesting == EnumConstant.ACTIVE) {
    //     query.course_start = { $gt: new Date() };
    // }
    let matchSearch: any = {};
    if (req.query.search) {
      matchSearch.$or = CommonUtil.searchNameCode(req.query.search);
    }
    let data = await this.model.aggregate([
      {
        $match: query,
      },
      {
        $lookup: {
          from: "students",
          let: { courseId: "$_id", stAmount: "$student_amount" },
          pipeline: [
            {
              $match: {
                $expr: { $eq: ["$courses", "$$courseId"] },
                scholarship_status: EnumConstant.ACTIVE,
              },
            },
            {
              $count: "count",
            },
          ],
          as: "students",
        },
      },
      {
        $addFields: {
          appliedCount: {
            $ifNull: [{ $arrayElemAt: ["$students.count", 0] }, 0],
          },
        },
      },
      {
        $match: {
          $expr: { $gt: ["$student_amount", "$appliedCount"] },
        },
      },
      {
        $lookup: {
          from: "skills",
          let: { id: "$apply_majors" },
          pipeline: [
            {
              $match: {
                $expr: { $eq: ["$_id", "$$id"] },
              },
            },
          ],
          as: "apply_majors",
        },
      },
      { $unwind: { path: "$apply_majors" } },
      {
        $lookup: {
          from: "shifts",
          let: { id: "$shifts" },
          pipeline: [
            {
              $match: {
                $expr: { $eq: ["$_id", "$$id"] },
              },
            },
          ],
          as: "shifts",
        },
      },
      { $unwind: { path: "$shifts" } },
      {
        $addFields: {
          name: {
            $toLower: {
              $concat: [
                "$code",
                " | ",
                "$apply_majors.name",
                " | ",
                "$shifts.name",
              ],
            },
          },
          name_en: {
            $toLower: {
              $concat: [
                "$code",
                " | ",
                "$apply_majors.name_en",
                " | ",
                "$shifts.name_en",
              ],
            },
          },
        },
      },
      { $match: matchSearch },
      {
        $project: {
          name_en: 1,
          name: 1,
          code: 1,
        },
      },
    ]);
    return data;
  }

  async studentInCourse(req: any) {
    let [skip, limit] = this.skipLimit(req);
    let { search, gender }: any = req.query;
    let query: any = {
      status: EnumConstant.ACTIVE,
      scholarship_status: EnumConstant.ACTIVE,
      courses: new ObjectId(req.params._id),
    };
    if (req.body._user.roles._id == Role.officer._id) {
      query.create_by = new ObjectId(req.body._user._id);
    }
    if (gender) {
      query.gender = gender;
    }
    if (req.body._user.roles._id == Role.nsaf._id) {
      query.poor_status = EnumConstant.ACTIVE;
    }
    let secondQuery: any = {};
    if (search) {
      let s = search.replace(/[&\/\\?+()${}]/g, "");
      secondQuery.$or = [
        ...CommonUtil.searchNameCode(search),
        { poor_id: { $regex: s, $options: "i" } },
      ];
    }
    let data = await this.models.student.aggregate([
      { $match: query },
      {
        $addFields: {
          name: { $toLower: { $concat: ["$last_name", " ", "$first_name"] } },
          name_en: {
            $toLower: { $concat: ["$last_name_en", " ", "$first_name_en"] },
          },
        },
      },
      { $match: secondQuery },
      {
        $lookup: {
          from: "courses",
          let: { ids: "$courses" },
          pipeline: [
            {
              $match: {
                $expr: { $eq: ["$_id", "$$ids"] },
              },
            },
            {
              $project: {
                name: 1,
                name_en: 1,
                code: 1,
                apply_majors: 1,
                course_start: 1,
                course_end: 1,
              },
            },
          ],
          as: "courses",
        },
      },
      { $unwind: { path: "$courses" } },
      {
        $addFields: {
          apply_majors: "$courses.apply_majors",
          scholarship_status: {
            $cond: {
              if: {
                $and: [
                  { $gt: ["$courses.course_start", new Date()] },
                  { $eq: ["$scholarship_status", EnumConstant.ACTIVE] },
                ],
              },
              then: EnumConstant.waiting,
              else: {
                $cond: {
                  if: {
                    $and: [
                      {
                        $eq: ["$scholarship_status", EnumConstant.RESUME_STUDY],
                      },
                    ],
                  },
                  then: EnumConstant.ACTIVE,
                  else: "$scholarship_status",
                },
              },
            },
          },
        },
      },
      {
        $project: {
          __v: 0,
          updatedAt: 0,
          users: 0,
          place_of_birth: 0,
          ethnicity: 0,
          nationality: 0,
          name_en: 0,
          name: 0,
        },
      },
      {
        $sort: { _id: -1 },
      },
      this.facetAggregate({ skip, limit }),
    ]);
    let [getData, count] = await this.facetData(data, [
      {
        path: "schools",
        select: "name name_en profile_image address",
        model: "schools",
        populate: [
          { path: "address.villages", select: "name name_en" },
          { path: "address.communes", select: "name name_en" },
          { path: "address.districts", select: "name name_en" },
          { path: "address.city_provinces", select: "name name_en" },
        ],
      },
      { path: "apply_majors", select: "name name_en", model: "skills" },
    ]);
    let json = CommonUtil.JSONParse(getData);
    return [CommonUtil.sortStudentName(json), count];
  }
  async getDataFromDateRange(req: any) {
    const [skip, limit] = this.skipLimit(req);
    const { start_date, end_date } = req.query;

    const [startDate, endDate] = CommonUtil.parseStartDateEndDate(
      start_date,
      end_date
    );

    startDate.setDate(startDate.getDate());
    endDate.setDate(endDate.getDate() + 1);

    const data = await this.model.aggregate([
      {
        $match: {
          $and: [
            { course_start: { $gte: startDate } },
            { course_end: { $lte: endDate } },
          ],
        },
      },

      { $sort: { sort_condition: 1, _id: -1 } },
      {
        $facet: {
          result: [
            { $skip: skip },
            ...(limit > 0 ? [{ $limit: limit }] : []),
            {
              $lookup: {
                from: "students",
                let: { courseId: "$_id" },
                pipeline: [
                  {
                    $match: {
                      $expr: { $eq: ["$courses", "$$courseId"] },
                    },
                  },
                  {
                    $count: "total_count",
                  },
                ],
                as: "students",
              },
            },
            {
              $addFields: {
                total_submit_student_count: {
                  $ifNull: [{ $arrayElemAt: ["$students.total_count", 0] }, 0],
                },
              },
            },
            {
              $lookup: {
                from: "students",
                let: { courseId: "$_id" },
                pipeline: [
                  {
                    $match: {
                      $expr: { $eq: ["$courses", "$$courseId"] },
                      scholarship_status: EnumConstant.ACTIVE,
                    },
                  },
                  {
                    $count: "count",
                  },
                ],
                as: "students",
              },
            },
            {
              $addFields: {
                student_active_count: {
                  $ifNull: [{ $arrayElemAt: ["$students.count", 0] }, 0],
                },
              },
            },
            {
              $project: {
                __v: 0,
                updatedAt: 0,
                requirement: 0,
                fee: 0,
                students: 0,
                student_amount: 0,
              },
            },
          ],
          totalCount: [
            {
              $count: "count",
            },
          ],
        },
      },
    ]);
    return await this.facetData(data, [
      { path: "apply_majors", select: "name name_en code" },
      { path: "shifts", select: "name name_en code" },
      { path: "schools", select: "name name_en profile_image" },
    ]);
  }
}
