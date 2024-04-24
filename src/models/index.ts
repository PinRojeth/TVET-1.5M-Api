import mongoose from 'mongoose';
import { connect } from './database_connection';
import { IRoles, modelRoles } from './roles'
import { IFile_datas, modelFileData } from './file_datas'
import { ICountries,  modelCountry} from './countries'; 
import { ICity_provinces, modelCityProvince } from './city_provinces'; 
import { IDistricts, modelDistrict  } from './districts'; 
import { IVillages, modelVillage  } from './villages'; 
import { ICommunes, modelCommune } from './communes';
import { IUser_tokens, modelUserToken} from "./user_token"
import { IUsers, modelUser } from "./users"
import { IStaffs, modelStaff } from './staffs'
import { IAddress } from './addresses'
import { ISchools, modelSchool } from './schools';
import { IStudents, modelStudent} from './students'
import { IApply_majors, modelApplyMajor} from './apply_majors';
import { IRequest_timelines, modelRequestTimeline } from './request_timelines';
import { ICourses, modelCourse } from './courses';
import { ILanding_page_cms, modelLandingCms } from './landing_page_cms'; 
import { IScholarship_payments, modelScholarshipPayment } from './scholarship_payments'
import { ISectors, modelSector } from './sectors';
import { IShifts, modelShift } from './shifts';
import { IAttendance_lists, modelAttendanceList} from './attendance_lists';
import { IAttendance_students, modelAttendanceStudent } from './attendance_students';
import { IAttendance_submits, modelAttendanceSubmit } from './attendance_submits';
import { ISystem_configs, modelSystemConfig } from './system_configs';
import { IUser_departments, modelUserDepartment } from './user_departments';
import { IType_leave_scholarships, modelTypeLeave } from './type_leave_scholarship';
import { IType_projects, modelTypeProject } from './type_projects'
import { modelTypeScholarshipDoc, IType_scholarship_documents } from './type_scholarship_documents'
import { ILink_class_courses, modelLinkClassCourse} from './link_class_courses'
import { IClass_enrolments, modelClassEnrolment} from './class_enrolments'
import { IType_poverty_status, modelTypePoverty} from './type_poverty_status'
import { ISMS_Attendance_lists, modelStudentAttendanceList } from './sms_attendance_lists'
import { ISMS_attendance_items, modelSmsAttendanceItem } from './sms_attendance_items'
import { ISubjects, modelSubject } from './subjects'


const ObjectId = mongoose.Types.ObjectId;

export {
    IType_poverty_status, ISMS_Attendance_lists, ISMS_attendance_items, ISubjects,IType_scholarship_documents,
    IClass_enrolments, ISystem_configs, IUser_departments, IType_leave_scholarships, ILink_class_courses,
    IShifts, ISectors, IAttendance_lists, IAttendance_students, IAttendance_submits, 
    ISchools, IStudents, IApply_majors, IRequest_timelines, ICourses, ILanding_page_cms,
    IUser_tokens, IUsers, IStaffs,IAddress,
    IRoles, IFile_datas, ICity_provinces, ICountries, IDistricts, IVillages, ICommunes,
    connect,ObjectId, IScholarship_payments, IType_projects,
}

export default {
    typeScholarshipDocument: modelTypeScholarshipDoc,
    subject: modelSubject,
    smsAttendanceItem: modelSmsAttendanceItem,
    smsAttendanceList: modelStudentAttendanceList,
    typePovertyStatus: modelTypePoverty,
    classEnrolment: modelClassEnrolment,
    linkClassCourse: modelLinkClassCourse,
    typeProject: modelTypeProject,
    typeLeaveScholarship: modelTypeLeave,
    userDepartment: modelUserDepartment,
    systemConfig: modelSystemConfig, 
    attendanceSubmit: modelAttendanceSubmit,
    attendanceList: modelAttendanceList,
    attendanceStudent: modelAttendanceStudent,
    shift: modelShift,
    sector: modelSector,
    scholarshipPayment: modelScholarshipPayment,
    landingPageCms: modelLandingCms,
    course: modelCourse,
    requestTimeline: modelRequestTimeline,
    student: modelStudent,
    applyMajor: modelApplyMajor,
    school: modelSchool,
    staff: modelStaff,
    user: modelUser,
    userToken: modelUserToken,
    fileData: modelFileData,
    role: modelRoles,
    cityProvince :modelCityProvince,
    country: modelCountry,
    village: modelVillage,
    commune: modelCommune,
    district: modelDistrict,
}

type sessionCallback = (session: mongoose.ClientSession) => ReturnType<any>;
export async function createSession(callBack: sessionCallback) {
    let session = await mongoose.startSession({defaultTransactionOptions: {readPreference: "primary"}});
    await session.startTransaction();
    try {
        let data = await callBack(session);
        await session.commitTransaction();
        session.endSession();
        return data;
    } catch (error) {
        await session.abortTransaction();
        session.endSession();
        throw error;
    }
}