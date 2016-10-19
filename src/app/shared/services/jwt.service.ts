import { Injectable } from '@angular/core';

@Injectable()
export class JwtService {

  getToken(): String {
    let token = JSON.parse(window.localStorage.getItem('jwtToken'));
    if (token) {
      return token.access_token;
    }
    return '';
  }

  saveToken(token: String) {
    window.localStorage['jwtToken'] = JSON.stringify(token);
  }

  destroyToken() {
    window.localStorage.removeItem('jwtToken');
  }

}
