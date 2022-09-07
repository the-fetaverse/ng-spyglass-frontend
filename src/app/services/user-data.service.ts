import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL } from '../app.constants';
import { User } from '../models/user-model';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  constructor(private http: HttpClient) {}

  getUserByUsername(username: string): Observable<User> {
    return this.http.get<User>(`${API_URL}/users/${username}`);
  }

  getUsernameFromSessiomStorage() {
    return sessionStorage.getItem('authenticatedUser');
  }
}
