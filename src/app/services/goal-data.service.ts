import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Goal } from '../models/goal.model';
import { Observable } from 'rxjs';
import { API_URL } from '../app.constants';

@Injectable({
  providedIn: 'root',
})
export class GoalDataService {
  constructor(private http: HttpClient) {}

  getAllGoals(username: string): Observable<Goal[]> {
    return this.http.get<Goal[]>(`${API_URL}/users/${username}/goals`);
  }

  getGoalById(username: string, id: number): Observable<Goal> {
    return this.http.get<Goal>(`${API_URL}/users/${username}/goals/${id}`);
  }

  saveGoal(username: string, goal: Goal): Observable<Goal> {
    return this.http.post<Goal>(`${API_URL}/users/${username}/goals`, goal);
  }

  updateGoal(username: string, id: number, goal: Goal): Observable<Goal> {
    return this.http.put<Goal>(
      `${API_URL}/users/${username}/goals/${id}`,
      goal
    );
  }

  deleteGoal(username: string, id: number): Observable<Goal> {
    return this.http.delete<Goal>(`${API_URL}/users/${username}/goals/${id}`);
  }
}
