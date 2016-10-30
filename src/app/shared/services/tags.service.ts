import { Injectable } from '@angular/core';
import { URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { ApiService } from './api.service';

@Injectable()
export class TagsService {
  tags: Observable<any> = null;

  constructor(
    private apiService: ApiService
  ) { }

  lists(page): Observable<any> {
    let params: URLSearchParams = new URLSearchParams();
    params.set('page', page);

    if (!this.tags) {
      this.tags = this.apiService.get('tags', params)
        .map(data => data)
        .publishReplay(1)
        .refCount();
    }

    return this.tags;
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
