export default class EnumConstant {

    public static readonly ACTIVE = 1;
    public static readonly INACTIVE = 0;
    public static readonly REQUESTING = 3;
    public static readonly DRAFT= 2;
    public static readonly waiting = 4;
    public static readonly RESUME_STUDY = 5;
    public static readonly FINISHED_STUDY= 8;
    public static readonly QUIT = 9;
    public static readonly REJECTED = -3;
    public static readonly DISABLED = -2;
    public static readonly ARCHIVE = -8;
    public static readonly DELETE = -9;
    public static readonly QUIT_BFORE_COURSE = 10;
    public static readonly QUIT_DURING_COURSE = 11;
    
    public static readonly Gender = {
        MALE: "male",
        FEMALE: "female",
    }
    
    public static readonly ReadPermission = {
        PUBLIC: 1,
        PRIVATE: -1
    }

    public static readonly AttendanceType = {
        PRESENT: 1,
        ABSENT: 2,
        PERMISSION: 3,
    }

    public static readonly TimelineType = {
        SCHOLARSHIP: 1,
        VERIFY: 2,
        IDPOOR: 3,
        APPROVALINFO: 4,
    }


    public static readonly BucketName = {
        STUDENT: "file_student_images",
        STAFF_PROFILE: "file_staffs_images",
        SCHOOL_DATA: "file_schools",
    }
    
    public static readonly TypeProject = {
        scholarship: 1,
        SMS: 2,
    }
}

export const Role = {
    all: "all",
    root: {
        _id: 1,
        name: "root",
    },
    nsaf: {
        _id: 2,
        name: "nsaf",
    },
    admin: {
        _id: 3,
        name: "admin",
    },
    verifier: {
        _id: 4,
        name: "verifier",
    },
    tvet: {
        _id: 5,
        name: "tvet",
    },
    viewer: {
        _id: 7,
        name: "viewer",
    },
    officer: {
        _id: 8,
        name: "officer",
    },
    school: {
        _id: 11,
        name: "school",
    },
    teacher: {
        _id: 12,
        name: "teacher",
    },
    student: {
        _id: 21,
        name: "student",
    },
    read_report: {
        _id: 31,
        name: "read_report",
    },
}