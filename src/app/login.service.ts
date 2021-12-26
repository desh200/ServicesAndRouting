import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class LoginService {
  isLoggedin = false;

  login(username, password) {
    if (username === 'json' && password === '123') {
      this.isLoggedin = true;
    } else {
      this.isLoggedin = false;
    }
  }

  logout{
    this.isLoggedin = false;
    return  this.isLoggedin;
  }
}
