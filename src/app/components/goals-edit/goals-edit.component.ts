import { Component, OnInit, Inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Goal } from 'src/app/models/goal.model';
import { GoalDataService } from 'src/app/services/goal-data.service';

@Component({
  selector: 'app-goals-edit',
  templateUrl: './goals-edit.component.html',
  styleUrls: ['./goals-edit.component.css'],
})
export class GoalsEditComponent implements OnInit {
  form: FormGroup | any;
  minDate = new Date();
  // id: number = this.modalData.goal_id;

  constructor(
    private goalDataService: GoalDataService,
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
      starting_date: ['', [Validators.required]],
      target_date: ['', Validators.required],
      amount_current: ['', Validators.required],
      amount_target: ['', Validators.required],
    });
    this.form.patchValue({
      name: this.modalData.name,
      description: this.modalData.description,
      starting_date: this.modalData.date_created,
      target_date: this.modalData.date_target,
      amount_current: this.modalData.amount_current,
      amount_target: this.modalData.amount_target,
    });
  }

  onSubmit() {
    this.dialogRef.close(this.form.value);
  }
}
