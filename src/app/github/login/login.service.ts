import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {
  isLoggedIn = false;
  login(username, password) {
    if (username == 'jason' && password == '123') {
      this.isLoggedIn = true;
      return this.isLoggedIn;
    } else {
      this.isLoggedIn = false;
      return this.isLoggedIn;
    }
  }
}
