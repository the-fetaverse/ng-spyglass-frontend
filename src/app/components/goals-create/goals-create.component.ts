import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { GoalDataService } from 'src/app/services/goal-data.service';
import { Goal } from 'src/app/models/goal.model';

@Component({
  selector: 'app-goals-create',
  templateUrl: './goals-create.component.html',
  styleUrls: ['./goals-create.component.css'],
})
export class GoalsCreateComponent implements OnInit {
  form: FormGroup | any;
  minDate = new Date();
  username = 'dmjohnspor@gmail.com';
  updatedGoal!: Goal;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private goalDataService: GoalDataService
  ) {
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
  }

  onClose() {
    this.router.navigate(['/user', this.username, 'goals']);
  }

  onSubmit() {
    console.log(this.form.value);
    this.updatedGoal.name = this.form.value.name;
    this.updatedGoal.description = this.form.value.description;
    this.updatedGoal.username = this.username;
    this.updatedGoal.date_created = this.form.value.starting_date;
    this.updatedGoal.date_target = this.form.value.target_date;

    console.log(this.updatedGoal);

    // this.goalDataService
    //   .saveGoal('dmjohnspor@gmail.com', this.form.value)
    //   .subscribe((res) => {
    //     console.log(res);
    //   });
  }

  ngOnInit(): void {}
}
