import models from "../models";
import Address from './address'
import FileData from './file_data'; 
import Staffs from './staff'; 
import UserToken from './user_token'
import User from './user'
import School from './school';
import ApplyMajor from './apply_major';
import Student from './student'
import RequestTimeline from './request_timeline';
import Role from './role'
import ReportData from './report_data'
import Course from './course'
import LandingPageCms from './landing_page_cms'
import ScholarshipPayment from './scholarship_payment'; 
import PoorStudent from './poor_student'; 
import VerifyStudent from './verify_student'; 
import ApprovalStudent from './approval_info_student'; 
import Sector from './sector';
import Shift from './shift';
// import ShiftTime from './shift_time'
import AttendanceList from './attendance_list';
import AttendanceStudent from './attendance_students';
import AttSubmit from './attendance_submit';
import SystemConfig from './system_config';
import UserDepartment from './user_department';
import LinkClassCourse from './link_class_course';
import TypeLeaveScholarship from './type/type_leave_scholarship'
import TypeScholarshipDocument from './type/type_scholarship_document'

export default {
    typeScholarshipDocument: new TypeScholarshipDocument(models.typeScholarshipDocument),
    typeLeaveScholarship: new TypeLeaveScholarship(models.typeLeaveScholarship),
    linkClassCourse: new LinkClassCourse(models.linkClassCourse),
    userDepartment: new UserDepartment(models.userDepartment),
    systemConfig: new SystemConfig(models.systemConfig),
    approvalInfoStudent: new ApprovalStudent(models.student),
    attendanceSubmit: new AttSubmit(models.attendanceSubmit),
    attendanceStudent: new AttendanceStudent(models.attendanceStudent),
    attendanceList: new AttendanceList(models.attendanceList),
    // shiftTime: new ShiftTime(models.shiftTime),
    sector: new Sector(models.sector),
    shift: new Shift(models.shift),
    poorStudent: new PoorStudent(models.student),
    verifyStudent: new VerifyStudent(models.student),
    scholarshipPayment: new ScholarshipPayment(models.scholarshipPayment),
    landingPageCms: new LandingPageCms(models.landingPageCms),
    course: new Course(models.course),
    reportData: new ReportData(),
    role: new Role(models.role),
    requestTimeline: new RequestTimeline(models.requestTimeline),
    student: new Student(models.student),
    applyMajor: new ApplyMajor(models.applyMajor),
    school: new School(models.school),
    staff: new Staffs(models.staff),
    userToken: new UserToken(models.userToken),
    user: new User(models.user),
    address: new Address(models.cityProvince),
    fileData: new FileData(models.fileData),
}