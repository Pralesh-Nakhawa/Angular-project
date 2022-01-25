import { Component, OnInit } from '@angular/core';
import {FormControl, Validators,} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);

  getErrorMessageEmail() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  
  getErrorMessagePassword() {
   
      return this.password.hasError('password') ? 'You must enter a value': '';
  }
  constructor() { }

  ngOnInit(): void {
  }

}
