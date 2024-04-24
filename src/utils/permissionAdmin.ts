export const pAdmin = {
    account: {
        read: "a.account.read",
        write:"a.account.write"
    },
    applyMajor:{
        read : "a.applyMajor.read",
        write : "a.applyMajor.write",
        delete : "a.applyMajor.delete"
    },
    
    course:{
        read : "a.course.read",
        write : "a.course.write",
        setActive : "a.course.setActive",
        delete : "a.course.delete"
    },

    landingPageCms:{
        read : "a.landingPageCms.read",
        write : "a.landingPageCms.write",
    },

    systemConfig:{
        read : "a.systemConfig.read",
        write : "a.systemConfig.write",
    },

    staff :{
        read : "a.staff.read",
        write : "a.staff.write",
        resetPwd : "a.staff.resetPwd",
        setActive : "a.staff.setActive",
        changeRole : "a.staff.changeRole",
    },

    student: {
        request: "a.student.request",
        readRequesting : "a.student.readRequesting",
        readApproved : "a.student.readApproved",
        writeApproved : "a.student.writeApproved",
        resumeStudy : "a.student.resumeStudy",
        write : "a.student.write",
        apply : "a.student.apply",
        read: "a.student.read",
        writeUser: "a.student.writeUser",
        addPoorId : "a.student.addPoorId",
    },
    
    poorStudent :{
        writeApproved : "a.poorStudent.writeApproved",
        read: "a.poorStudent.read",
        request: "a.poorStudent.request",
    },

    verifyStudent :{
        writeApproved : "a.verifyStudent.writeApproved",
        read: "a.verifyStudent.read",
        request: "a.verifyStudent.request",
    },

    approvalInfoStudent :{
        writeApproved : "a.approvalInfoStudent.writeApproved",
        read: "a.approvalInfoStudent.read",
        request: "a.approvalInfoStudent.request",
    },

    school:{
        read : "a.school.read",
        update : "a.school.update",
        write : "a.school.write",
    },

    attendance:{
        read : "a.attendance.read",
        write : "a.attendance.write",
        delete : "a.attendance.delete",
    },

    attendanceSubmit:{
        read : "a.attendanceSubmit.read",
        write : "a.attendanceSubmit.write",
        delete : "a.attendanceSubmit.delete",
    },

    scholarshipPayment:{
        read : "a.scholarshipPayment.read",
        write : "a.scholarshipPayment.write",
        delete : "a.scholarshipPayment.delete",
    },
    
    report: {
        studentList: "a.report.studentList",
        adminDataStudentApply: "a.report.adminDataStudentApply",
        adminDataApprovedCount: "a.report.adminDataApprovedCount",
    }, 

    sector:{
        read : "a.sector.read",
        write : "a.sector.write",
        delete : "a.sector.delete"
    },
    shift:{
        read : "a.shift.read",
        write : "a.shift.write",
        delete : "a.shift.delete"
    },
    userDepartment:{
        read : "a.userDepartment.read",
        write : "a.userDepartment.write",
        delete : "a.userDepartment.delete"
    },

    adminAction: {
        update_poor_id: "a.adminAction.update_poor_id",
        change_course_date: "a.adminAction.change_course_date",
    }
}
