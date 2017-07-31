import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
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
    const params: HttpParams = new HttpParams()
      .set('page', page);

    if (!this.tags) {
      this.tags = this.apiService.get('tags', params)
        .publishReplay(1)
        .refCount();
    }

    return this.tags;
  }

  show(name) {
    return this.apiService.get(`tags/${name}`);
  }

  update(id) {
    return this.apiService.put(`tags/${id}`);
  }

  destroy(id) {
    return this.apiService.delete(`tags/${id}`);
  }

  articles(tagName, page) {
    const params: HttpParams = new HttpParams()
      .set('page', page);

    return this.apiService.get(`tags/${tagName}/articles`, params);
  }

}
