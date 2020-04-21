import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Student, Course, Enrollment } from '../models';
import { HomeService } from './home.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  functionCase = 0;
  students: Student[];
  courses: Course[];
  deptForm: FormGroup;
  studentForm: FormGroup;

  constructor(
    private router: Router,
    private homeService: HomeService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.deptForm = this.fb.group({
      deptCode: []
    });
    this.studentForm = this.fb.group({
      studentId: []
    });
  }

  addStudent() {
    this.functionCase = 1;
  }

  saveStudent(student: Student) {
    this.homeService.saveStudent(student);
    this.functionCase = 0;
  }

  addCourse() {
    this.functionCase = 2;
  }

  saveCourse(course: Course) {
    this.homeService.saveCourse(course);
    this.functionCase = 0;
  }

  addApp() {
    this.functionCase = 3;
  }

  saveEnrollment(enrollment: Enrollment) {
    this.homeService.saveEnrollment(enrollment);
    this.functionCase = 0;
  }

  viewStudents() {
    this.homeService.getStudents().subscribe((data: Student[]) => {
      console.log(data);
      this.students = data;
    });
    this.functionCase = 4;
  }

  viewCoursesByDepartment() {
    this.functionCase = 5;
  }

  searchByDeptCode() {
    this.homeService.getCourseByDepartment(this.deptForm.value.deptCode).subscribe((data: Course[]) => {
      this.courses = data;
    });
    this.functionCase = 7;
  }

  viewCoursesByStudent() {
    this.functionCase = 6;
  }

  searchByStudentId() {
    this.homeService.getCourseByStudent(this.studentForm.value.studentId).subscribe((data: Course[]) => {
      this.courses = data;
    });
    this.functionCase = 7;
  }

  goBack() {
    this.functionCase = 0;
  }

}
