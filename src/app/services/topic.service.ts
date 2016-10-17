import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class TopicService {
  BaseUrl: string = 'http://api.daza.io/topics?';

  constructor(private http: Http) { }

  getTopics(page = 1) {
    return this.http
      .get(`${this.BaseUrl}page=${page}`)
      .map(res => res.json())
      .catch(error => Observable.throw(error));
  }

}
