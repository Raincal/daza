import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class ArticleService {
  BaseUrl: string = 'http://api.daza.io/articles?';

  constructor(private http: Http) { }

  getArticles(id) {
    return this.http
      .get(`${this.BaseUrl}category_id=${id}&category_slug=${id}`)
      .map(res => res.json())
      .catch(error => Observable.throw(error));
  }

}
