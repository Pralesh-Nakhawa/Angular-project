import { Component, OnInit } from '@angular/core';
import {FormControl, Validators,} from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  fullname = new FormControl('', [Validators.required]);
  address = new FormControl('', [Validators.required]);
  mobile = new FormControl('', [Validators.required]);
  confirm = new FormControl('', [Validators.required]);
  getErrorMessageEmail() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  
  getErrorMessagePassword() {
   
      return this.password.hasError('password') ? 'You must enter a value': '';
  }
  getErrorMessageFullname() {
   
    return this.fullname.hasError('fullname') ? 'You must enter a value': '';
}
getErrorMessageAddress() {
   
  return this.address.hasError('address') ? 'You must enter a value': '';
}
getErrorMessageMobile() {
   
  return this.mobile.hasError('mobile') ? 'You must enter a value': '';
}
getErrorMessageConfirm() {
   
  return this.confirm.hasError('confirm') ? 'You must enter a value': '';
}
  constructor() { }

  ngOnInit(): void {
  }

}
