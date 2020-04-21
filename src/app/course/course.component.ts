import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Course } from '../models';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  @Output()
  save: EventEmitter<Course> = new EventEmitter();

  courseForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  this.courseForm = this.fb.group({
    deptCode: [],
    courseNum: [],
    title: [],
    creditHours: []
  });
  }

  saveCourse() {
    this.save.emit(this.courseForm.value);
  }

}
