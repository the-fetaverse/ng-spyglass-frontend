import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { GoalDataService } from 'src/app/services/goal-data.service';
import { UserDataService } from 'src/app/services/user-data.service';
import { Goal } from 'src/app/models/goal.model';

@Component({
  selector: 'app-goals-create',
  templateUrl: './goals-create.component.html',
  styleUrls: ['./goals-create.component.css'],
})
export class GoalsCreateComponent implements OnInit {
  form: FormGroup | any;
  range: FormGroup | any;
  minDate = new Date();
  username: string | any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private goalDataService: GoalDataService,
    private userDataService: UserDataService
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
    this.range = new FormGroup({
      start: new FormControl<Date | null>(null),
      end: new FormControl<Date | null>(null),
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
      new Date(this.range.value.start).toISOString(),
      new Date(this.range.value.end).toISOString(),
      this.form.value.amount_current,
      this.form.value.amount_target,
      false
    );
    console.log(newGoal);

    this.goalDataService.saveGoal(this.username, newGoal).subscribe((res) => {
      console.log(res);
      this.router.navigate(['/user', this.username, 'goals']);
    });
  }

  ngOnInit(): void {
    this.username = this.userDataService.getUsernameFromSessiomStorage();
  }
}
