import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GOALS } from 'src/app/mockData/goals';
import { Goal } from 'src/app/models/goal.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';

@Component({
  selector: 'app-goals-view',
  templateUrl: './goals-view.component.html',
  styleUrls: ['./goals-view.component.css'],
})
export class GoalsViewComponent implements OnInit, AfterViewInit {
  // Fields
  user_name: string = '';
  goals: Goal[];
  dataSource: any;
  @ViewChild(MatSort) sort?: MatSort;

  public displayedColumns: string[] = [
    'name',
    'date_target',
    'amount_target',
    'details',
    'edit',
    'delete',
  ];

  // Constructor
  constructor(private route: ActivatedRoute) {
    this.goals = GOALS;
    this.dataSource = new MatTableDataSource(this.goals);
  }

  // Methods
  ngOnInit(): void {
    this.user_name = this.route.snapshot.params['email'];
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }
}
