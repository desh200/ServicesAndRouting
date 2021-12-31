import { Component, VERSION } from '@angular/core';
//import { FormGroup, /*FormControl*/, Validators } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PasswordValidator } from './passwordvalidator';
import { LoginService } from './login.service';

@Component({
  selector: 'login',
  templateUrl: 'login.component.html',
})
export class LoginComponent {
  /* form = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });*/

  form: FormGroup;
  constructor(fb: FormBuilder, private _loginService: LoginService) {
    this.form = fb.group({
      username: ['', Validators.required],
      password: [
        '',
        Validators.compose([
          Validators.required,
          PasswordValidator.cannotContainSpace,
        ]),
      ],
    });
  }

  login() {
    var result = this._loginService.login(
      this.form.controls['username'].value,
      this.form.controls['password'].value
    );
    if (!result) {
      this.form.controls['password'].setErrors({ invalidLogin: true });
    }
    console.log(this.form.value);
  }
}
