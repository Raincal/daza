import { Injectable } from '@angular/core';

@Injectable()
export class JwtService {

  getToken(): String {
    const token = JSON.parse(window.localStorage.getItem('jwtToken'));
    if (token) {
      return token.access_token;
    }
    return '';
  }

  saveToken(token) {
    window.localStorage['jwtToken'] = JSON.stringify(token.jwt_token);
    window.localStorage['user'] = JSON.stringify(token);
  }

  destroyToken() {
    window.localStorage.removeItem('jwtToken');
    window.localStorage.removeItem('user');
  }

}
