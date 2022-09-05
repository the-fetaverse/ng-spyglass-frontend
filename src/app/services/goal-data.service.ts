import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Goal } from '../models/goal.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GoalDataService {
  url: string = 'http://localhost:8080/users/';

  constructor(private http: HttpClient) {}

  getAllGoals(username: string): Observable<Goal[]> {
    return this.http.get<Goal[]>(`${this.url}${username}/goals`);
  }

  getGoalById(username: string, id: number): Observable<Goal> {
    return this.http.get<Goal>(`${this.url}${username}/goals/${id}`);
  }

  saveGoal(username: string, goal: Goal): Observable<Goal> {
    return this.http.post<Goal>(`${this.url}${username}/goals`, goal);
  }

  updateGoal(username: string, id: number, goal: Goal): Observable<Goal> {
    return this.http.put<Goal>(`${this.url}${username}/goals/${id}`, goal);
  }

  deleteGoal(username: string, id: number): Observable<Goal> {
    return this.http.delete<Goal>(`${this.url}${username}/goals/${id}`);
  }
}
