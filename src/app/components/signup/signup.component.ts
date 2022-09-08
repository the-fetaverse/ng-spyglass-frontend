import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDataService } from 'src/app/services/user-data.service';
import * as bcrypt from 'bcryptjs';
import {
  MatSnackBar,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { User } from 'src/app/models/user-model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  email: string = '';
  password_1: string = '';
  password_2: string = '';
  user: User | any;
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(
    private router: Router,
    private userDataService: UserDataService,
    private _snackBar: MatSnackBar
  ) {}

  handleSignup() {
    if (this.password_1 === this.password_2 && this.validateEmail(this.email)) {
      this.user = new User(this.email, this.password_1);
      this.userDataService
        .registerUser(this.user)
        .subscribe((data) => console.log(data));
      this.openSnackBar('User Registered Successfully', 'close');
      this.router.navigate(['login']);
    }

    if (this.password_1 != this.password_2) {
      this.password_1 = '';
      this.password_2 = '';
      this.openSnackBar("Passwords don't match", 'close');
    }

    if (!this.validateEmail(this.email)) {
      this.openSnackBar('Invalid email', 'close');
    }
  }

  validateEmail(email: string) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  handleCancel() {
    this.router.navigate(['login']);
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
      verticalPosition: this.verticalPosition,
    });
  }

  ngOnInit(): void {}
}
