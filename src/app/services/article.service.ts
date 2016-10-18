import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { URLSearchParams } from '@angular/http';

import { Observable } from 'rxjs';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class ArticleService {
  BaseUrl: string = 'http://api.daza.io/articles?';

  constructor(private http: Http) { }

  getArticles(id, page) {
    let params = new URLSearchParams();
    params.set('category_id', id);
    params.set('category_slug', id);
    params.set('page', page);

    return this.http
      .get(this.BaseUrl, { search: params })
      .map(res => res.json())
      .catch(error => Observable.throw(error));
  }

}
