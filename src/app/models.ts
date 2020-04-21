export interface Student {
    studentId: string;
    studentName: string;
    major: string;
}

export interface Course {
    deptCode: string;
    courseNum: string;
    title: string;
    creditHours: string;
}

export interface Enrollment {
    studentId: string;
    deptCode: string;
    courseNum: string;
}
