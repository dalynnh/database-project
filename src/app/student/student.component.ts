import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Student } from '../models';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  @Output()
  save: EventEmitter<Student> = new EventEmitter();

  studentForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  this.studentForm = this.fb.group({
    studentId: [],
    studentName: [],
    major: []
  });
  }

  saveStudent() {
    this.save.emit(this.studentForm.value);
  }

}
