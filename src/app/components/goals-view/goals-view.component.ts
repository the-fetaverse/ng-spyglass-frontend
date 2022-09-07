import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Goal } from 'src/app/models/goal.model';
import { GoalInterface } from 'src/app/models/goal-interface';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GoalDataService } from 'src/app/services/goal-data.service';
import { GoalsEditComponent } from '../goals-edit/goals-edit.component';

@Component({
  selector: 'app-goals-view',
  templateUrl: './goals-view.component.html',
  styleUrls: ['./goals-view.component.css'],
})
export class GoalsViewComponent implements OnInit {
  // Fields
  username: string = '';
  goals: Goal[] = [];
  goal!: Goal;
  message: string = '';
  dataSource!: MatTableDataSource<GoalInterface>;
  @ViewChild(MatSort) sort!: MatSort;

  public displayedColumns: string[] = [
    'name',
    'date_target',
    'amount_target',
    'details',
    'update',
    'delete',
  ];

  // Constructor
  constructor(
    private route: ActivatedRoute,
    private goalDataService: GoalDataService,
    private dialog: MatDialog
  ) {}

  // Methods
  ngOnInit(): void {
    this.username = this.route.snapshot.params['username'];
    this.getAllGoals();
  }

  getAllGoals() {
    this.goalDataService.getAllGoals(this.username).subscribe((res) => {
      this.goals = res;
      this.dataSource = new MatTableDataSource(this.goals);
      this.dataSource.sort = this.sort;
    });
  }

  handleUpdate(id: number) {
    this.goalDataService.getGoalById(this.username, id).subscribe((res) => {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.width = '600px';
      dialogConfig.height = '500px';
      dialogConfig.data = res;

      let dialogRef = this.dialog.open(GoalsEditComponent, dialogConfig);

      dialogRef.afterClosed().subscribe((res) => {
        this.goalDataService
          .updateGoal(this.username, id, res)
          .subscribe((res) => {
            this.getAllGoals();
          });
      });
    });
  }

  handleDelete(id: number) {
    this.goalDataService.deleteGoal(this.username, id).subscribe((res) => {
      console.log(res);
      this.message = 'Goal deleted';
      this.getAllGoals();
    });
  }
}
