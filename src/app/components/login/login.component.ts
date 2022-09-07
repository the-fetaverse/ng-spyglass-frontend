import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserDataService } from 'src/app/services/user-data.service';
import * as bcrypt from 'bcryptjs';
import {
  MatSnackBar,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  // Fields
  username: string = '';
  password: string = '';
  invalidLogin: boolean = true;
  emailErrorMessage: string = 'Invalid email';
  passwordErrorMessage: string = 'Invalid password';

  // Constructor
  constructor(
    private router: Router,
    private authService: AuthService,
    private userDataService: UserDataService,
    private _snackBar: MatSnackBar
  ) {}

  // Methods
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  ngOnInit(): void {}

  // Handles the submission  and validation of login data
  handleLogin() {
    this.userDataService.getUserByUsername(this.username).subscribe((res) => {
      this.authService
        .executeBasicAuth(this.username, this.password)
        .subscribe({
          next: (data) => {
            console.log(data);
            this.invalidLogin = false;
            this.router.navigate(['user', res.username, 'goals']);
          },
          error: (error) => {
            console.error(error);
            this.invalidLogin = true;
            this.openSnackBar('Invalid Credentials', 'close');
          },
          complete: () => console.info('complete'),
        });
    });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
      verticalPosition: this.verticalPosition,
    });
  }

  compareEncryptedPassword(hash: string): boolean {
    return bcrypt.compareSync(this.password, hash);
  }
}
