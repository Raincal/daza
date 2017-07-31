import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { ApiService } from './api.service';

@Injectable()
export class TopicsService {
  topics: Observable<any> = null;

  constructor(
    private apiService: ApiService
  ) { }

  lists(page): Observable<any> {
    const params: HttpParams = new HttpParams()
      .set('page', page);

    if (!this.topics) {
      this.topics = this.apiService.get('topics', params)
        .publishReplay(1)
        .refCount();
    }

    return this.topics;
  }

  store(params) {
    return this.apiService.post('topics', params);
  }

  show(id) {
    return this.apiService.get(`topics/${id}`)
      .publishReplay(1)
      .refCount();
  }

  update(id, params) {
    return this.apiService.put(`topics/${id}`, params);
  }

  destroy(id) {
    return this.apiService.delete(`topics/${id}`);
  }

  subscribe(id) {
    return this.apiService.post(`topics/${id}/subscribe`);
  }

  articles(id, page, perPage) {
    const params: HttpParams = new HttpParams()
      .set('page', page)
      .set('per_page', perPage);

    return this.apiService.get(`topics/${id}/articles`, params);
  }

  subscribers(id, page) {
    const params: HttpParams = new HttpParams()
      .set('page', page);

    return this.apiService.get(`topics/${id}/subscribers`, params);
  }

}
