import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
    let newGoal = new Goal(
      NaN,
      this.form.value.name,
      this.form.value.description,
      this.username,
      new Date(this.form.value.starting_date).toISOString(),
      new Date(this.form.value.target_date).toISOString(),
      this.form.value.amount_current,
      this.form.value.amount_target,
      false
    );
    console.log(newGoal);

    this.goalDataService
      .saveGoal('dmjohnspor@gmail.com', newGoal)
      .subscribe((res) => {
        console.log(res);
        this.router.navigate(['/user', this.username, 'goals']);
      });
  }

  ngOnInit(): void {}
}
