import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MessageService],
})
export class LoginComponent implements OnInit {
  // Fields
  email: string = 'test@email.com';
  password: string = 'test';
  invalidEmail: boolean = false;
  invalidPassword: boolean = false;
  emailErrorMessage: string = 'Invalid email';
  passwordErrorMessage: string = 'Invalid password';

  // Constructor
  constructor(private messageService: MessageService) {}

  // Methods
  ngOnInit(): void {}

  // Handles the submission  and validation of login data
  handleLogin() {
    if (this.email === 'test@email.com') {
      this.invalidEmail = false;
    } else {
      this.invalidEmail = true;
    }

    if (this.password === 'test') {
      this.invalidPassword = false;
    } else {
      this.invalidPassword = true;
    }
  }
}
