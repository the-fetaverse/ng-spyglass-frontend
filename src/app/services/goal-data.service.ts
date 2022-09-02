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
}
