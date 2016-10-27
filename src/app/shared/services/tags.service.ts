import { Injectable } from '@angular/core';
import { URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ApiService } from './api.service';

@Injectable()
export class TagsService {
  constructor(
    private apiService: ApiService
  ) { }

  lists(page): Observable<any> {
    let params: URLSearchParams = new URLSearchParams();
    params.set('page', page);

    return this.apiService.get('tags', params)
      .map(data => data);
  }

  show(name) {
    return this.apiService.get(`tags/${name}`)
      .map(data => data);
  }

  update(id) {
    return this.apiService.put(`tags/${id}`)
      .map(data => data);
  }

  destroy(id) {
    return this.apiService.delete(`tags/${id}`)
      .map(data => data);
  }

  articles(tagName, page) {
    let params: URLSearchParams = new URLSearchParams();
    params.set('page', page);

    return this.apiService.get(`tags/${tagName}/articles`, params)
      .map(data => data);
  }

}
