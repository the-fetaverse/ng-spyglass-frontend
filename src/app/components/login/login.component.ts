import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

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
  constructor(private router: Router, private authService: AuthService) {}

  // Methods
  ngOnInit(): void {}

  // Handles the submission  and validation of login data
  handleLogin() {
    this.authService.executeBasicAuth(this.username, this.password).subscribe({
      next: (data) => {
        console.log(data);
        this.invalidLogin = false;
        this.router.navigate(['user', this.username, 'goals']);
      },
      error: (error) => {
        console.error(error);
        this.invalidLogin = true;
      },
      complete: () => console.info('complete'),
    });

    // if (this.authService.authenticateEmail(this.email)) {
    //   this.invalidEmail = false;
    // } else {
    //   this.invalidEmail = true;
    // }

    // if (this.authService.authenticatePassword(this.password)) {
    //   this.invalidPassword = false;
    // } else {
    //   this.invalidPassword = true;
    // }

    // if (this.invalidEmail === false && this.invalidPassword === false) {
    //   this.authService.authenticateUser(this.email, this.password);
    //
    // }
  }
}
