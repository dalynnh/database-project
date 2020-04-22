import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student, Course, Enrollment } from '../models';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  baseUrl = 'https://database-project-ws.herokuapp.com';

  constructor(private http: HttpClient) { }

  saveStudent(student: Student) {
    return this.http.post(this.baseUrl + '/student', student);
  }

  saveCourse(course: Course) {
    return this.http.post(this.baseUrl + '/course', course);
  }

  saveEnrollment(enrollment: Enrollment) {
    return this.http.post(this.baseUrl + '/enrollment', enrollment);
  }

  getStudents() {
    return this.http.get(this.baseUrl + '/student');
  }

  getCourseByDepartment(dept: string) {
    return this.http.get(this.baseUrl + '/course/dept/' + dept);
  }

  getCourseByStudent(studentId: string) {
    return this.http.get(this.baseUrl + '/course/student/' + studentId);
  }

}
