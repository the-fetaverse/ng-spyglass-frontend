import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

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
}
