import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Enrollment } from '../models';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-enrollment',
  templateUrl: './enrollment.component.html',
  styleUrls: ['./enrollment.component.scss']
})
export class EnrollmentComponent implements OnInit {

  @Output()
  save: EventEmitter<Enrollment> = new EventEmitter();

  enrollmentForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  this.enrollmentForm = this.fb.group({
    studentId: [],
    deptCode: [],
    courseNum: []
  });
  }

  saveEnrollment() {
    this.save.emit(this.enrollmentForm.value);
  }

}
