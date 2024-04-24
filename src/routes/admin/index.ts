import school from './school';
import staffs from './staff'; 
import account from './account';
import apply_major from './apply_major';
import students from './student';
import report_data from './report_data';
import course from './course';
import poor_student from './poor_student';
import landingPageCms from './landing_page_cms';
import scholarship_payments from './scholarship_payments';
import shift from './shift';
import sector from './sector';
import attendance from './attendance';
import attendance_submit from './attendance_submit';
import verify_student from './verify_student';
import approval_info_student from './approval_info_student';
import system_configs from './system_config';
import user_department from './user_department';
import type from './type'
export default [
    ...user_department,
    ...type,
    ...system_configs,
    ...approval_info_student,
    ...verify_student,
    ...attendance_submit,
    ...attendance,
    ...shift,
    ...sector,
    ...scholarship_payments,
    ...landingPageCms, 
    ...poor_student,
    ...course,
    ...report_data,
    ...students,
    ...apply_major,
    ...account,
    ...staffs,
    ...school,
];