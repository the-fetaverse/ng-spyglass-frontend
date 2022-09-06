import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  executeBasicAuth(username: string, password: string) {
    let basicAuthHeaderString =
      'Basic ' + window.btoa(username + ':' + password);

    let headers = new HttpHeaders({ Authorization: basicAuthHeaderString });

    return this.http
      .get<AuthenticationBean>(`http://localhost:8080/basicauth`, { headers })
      .pipe(
        map((data) => {
          sessionStorage.setItem('authenticatedUser', username);
          return data;
        })
      );
  }

  authenticateEmail(email: string): boolean {
    if (email === 'dmjohnspor@gmail.com') {
      return true;
    } else {
      return false;
    }
  }

  authenticatePassword(password: string): boolean {
    if (password === 'test') {
      return true;
    } else {
      return false;
    }
  }

  authenticateUser(email: string, password: string): void {
    if (email === 'dmjohnspor@gmail.com' && password === 'test') {
      sessionStorage.setItem('authenticatedUser', email);
    }
  }

  isUserLoggedIn(): boolean {
    let user = sessionStorage.getItem('authenticatedUser');
    return !(user === null);
  }

  logout(): void {
    sessionStorage.removeItem('authenticatedUser');
  }
}

export class AuthenticationBean {
  constructor(public message: string) {}
}
