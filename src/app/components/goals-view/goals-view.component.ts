import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Goal } from 'src/app/models/goal.model';
import { GoalInterface } from 'src/app/models/goal-interface';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { GoalDataService } from 'src/app/services/goal-data.service';

@Component({
  selector: 'app-goals-view',
  templateUrl: './goals-view.component.html',
  styleUrls: ['./goals-view.component.css'],
})
export class GoalsViewComponent implements OnInit {
  // Fields
  username: string = '';
  goals: Goal[] = [];
  dataSource!: MatTableDataSource<GoalInterface>;
  @ViewChild(MatSort) sort!: MatSort;

  public displayedColumns: string[] = [
    'name',
    'date_target',
    'amount_target',
    'details',
    'edit',
    'delete',
  ];

  // Constructor
  constructor(
    private route: ActivatedRoute,
    private goalService: GoalDataService
  ) {
    this.goalService.getAllGoals('dmjohnspor@gmail.com').subscribe((res) => {
      console.log(res);
      this.goals = res;
      this.dataSource = new MatTableDataSource(this.goals);
      this.dataSource.sort = this.sort;
    });
  }

  // Methods
  ngOnInit(): void {
    this.username = this.route.snapshot.params['email'];
  }
}
