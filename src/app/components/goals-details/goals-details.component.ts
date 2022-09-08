import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Goal } from 'src/app/models/goal.model';

@Component({
  selector: 'app-goals-details',
  templateUrl: './goals-details.component.html',
  styleUrls: ['./goals-details.component.css'],
})
export class GoalsDetailsComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<GoalsDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public goal: Goal
  ) {}
  current: number = this.goal.amount_current;
  target: number = this.goal.amount_target;
  percent: number = (this.current / this.target) * 100;
  subtitile: string = `$${this.current} / $${this.target}`;
  daysRemaining: number | any;

  getRemainingDays() {
    let start = new Date(this.goal.date_created).getTime();
    let finish = new Date(this.goal.date_target).getTime();
    let difference = finish - start;
    return Math.ceil(difference / (1000 * 3600 * 24));
  }
  ngOnInit(): void {
    this.daysRemaining = this.getRemainingDays();
    console.log(new Date(this.goal.date_created).getMonth());
    console.log(new Date(this.goal.date_created).getMonth() + 1);
  }
}
