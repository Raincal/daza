import { Injectable } from '@angular/core';
import { URLSearchParams } from '@angular/http';
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
    let params: URLSearchParams = new URLSearchParams();
    params.set('page', page);

    if (!this.topics) {
      this.topics = this.apiService.get('topics', params)
        .map(data => data)
        .publishReplay(1)
        .refCount();
    }

    return this.topics;
  }

  store(params) {
    return this.apiService.post('topics', params)
      .map(data => data);
  }

  show(id) {
    return this.apiService.get(`topics/${id}`)
      .map(data => data);
  }

  update(id, params) {
    return this.apiService.put(`topics/${id}`, params)
      .map(data => data);
  }

  destroy(id) {
    return this.apiService.delete(`topics/${id}`)
      .map(data => data);
  }

  subscribe(id) {
    return this.apiService.post(`topics/${id}/subscribe`)
      .map(data => data);
  }

  articles(id, page, perPage) {
    let params: URLSearchParams = new URLSearchParams();
    params.set('page', page);
    params.set('per_page', perPage);

    return this.apiService.get(`topics/${id}/articles`, params)
      .map(data => data);
  }

  subscribers(id, page) {
    let params: URLSearchParams = new URLSearchParams();
    params.set('page', page);

    return this.apiService.get(`topics/${id}/subscribers`, params)
      .map(data => data);
  }

}
