import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Goal } from 'src/app/models/goal.model';
import * as dayjs from 'dayjs';

@Component({
  selector: 'app-goals-edit',
  templateUrl: './goals-edit.component.html',
  styleUrls: ['./goals-edit.component.css'],
})
export class GoalsEditComponent implements OnInit {
  form: FormGroup | any;
  minDate = new Date();

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<GoalsEditComponent>,
    @Inject(MAT_DIALOG_DATA) public modalData: Goal
  ) {
    this.initializeForm();
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      date_created: ['', [Validators.required]],
      date_target: ['', Validators.required],
      amount_current: ['', Validators.required],
      amount_target: ['', Validators.required],
    });
    this.form.patchValue({
      name: this.modalData.name,
      description: this.modalData.description,
      date_created: new Date(this.modalData.date_created),
      date_target: new Date(this.modalData.date_target),
      amount_current: this.modalData.amount_current,
      amount_target: this.modalData.amount_target,
    });
  }

  onSubmit() {
    console.log(this.form.value.date_target);
    this.dialogRef.close(this.form.value);
  }

  onClose() {
    this.dialogRef.close();
  }
}
