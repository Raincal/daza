import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

export function isLoggedIn() {
  return !!localStorage.getItem('auth.jwt_token');
}

@Injectable()
export class UserService {
  private loggedIn = false;

  BaseUrl: string = 'http://api.daza.io/account/login';

  constructor(private http: Http) { }

  login(params) {
    return this.http
      .post(this.BaseUrl, params)
      .map(res => res.json())
      .map(res => {
        if (res.data) {
          this.loggedIn = true;
          localStorage.setItem('auth.id', res.data.id);
          localStorage.setItem('auth.user', JSON.stringify(res.data));
          localStorage.setItem('auth.jwt_token', JSON.stringify(res.data.jwt_token));
          localStorage.setItem('auth.configs', JSON.stringify(res.data.configs));
        }

        return res.data;
      })
      .catch(error => Observable.throw(error));
  }

  logout() {
    this.loggedIn = false;
    localStorage.removeItem('auth.id');
    localStorage.removeItem('auth.user');
    localStorage.removeItem('auth.jwt_token');
    localStorage.removeItem('auth.configs');
  }

  isLoggedIn() {
    return this.loggedIn;
  }

}
