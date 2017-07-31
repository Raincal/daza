import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ApiService } from './api.service';
import { JwtService } from './jwt.service';

export function isLoggedIn() {
  return !!localStorage.getItem('jwtToken');
}

@Injectable()
export class AccountService {
  private loggedIn = false;

  constructor(
    private apiService: ApiService,
    private jwtService: JwtService
  ) { }

  login(params): Observable<any> {
    return this.apiService.post('account/login', params)
      .map(res => {
        if (res.data) {
          this.loggedIn = true;
          this.jwtService.saveToken(res.data);
        }

        return res.data;
      });
  }

  register(params): Observable<any> {
    return this.apiService.post('account/register', params)
      .map(res => {
        if (res.data) {
          this.loggedIn = true;
          this.jwtService.saveToken(res.data);
        }

        return res.data;
      });
  }

  logout() {
    this.loggedIn = false;
    this.jwtService.destroyToken();
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

}
