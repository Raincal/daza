import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

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
          this.authSuccess(res.data);
        }

        return res.data;
      })
      .catch(error => Observable.throw(error));
  }

  register(params) {
    return this.http
      .post('http://api.daza.io/account/register', params)
      .map(res => res.json())
      .map(res => {
        if (res.data) {
          this.authSuccess(res.data);
        }

        return res.data;
      })
      .catch(error => Observable.throw(error));
  }

  authSuccess(user) {
    this.loggedIn = true;
    localStorage.setItem('auth.id', user.id);
    localStorage.setItem('auth.user', JSON.stringify(user));
    localStorage.setItem('auth.jwt_token', JSON.stringify(user.jwt_token));
    localStorage.setItem('auth.configs', JSON.stringify(user.configs));
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
