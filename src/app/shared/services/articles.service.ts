import { Injectable } from '@angular/core';
import { URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ApiService } from './api.service';

@Injectable()
export class ArticlesService {
  constructor(
    private apiService: ApiService
  ) { }

  lists(slug, page): Observable<any> {
    let params: URLSearchParams = new URLSearchParams();
    params.set('category_id', slug);
    params.set('category_slug', slug);
    params.set('page', page);

    return this.apiService.get('articles', params)
      .map(data => data);
  }

  store(params) {
    return this.apiService.post('articles', params)
      .map(data => data);
  }

  show(id) {
    return this.apiService.get(`articles/${id}`)
      .map(data => data);
  }

  update(id, params) {
    return this.apiService.put(`articles/${id}`, params)
      .map(data => data);
  }

  destroy(id) {
    return this.apiService.delete(`articles/${id}`)
      .map(data => data);
  }

  articleVote(id, type) {
    return this.apiService.post(`articles/${id}/votes`, { type })
      .map(data => data);
  }

  articleComment(id, params) {
    return this.apiService.post(`articles/${id}/comments`, params)
      .map(data => data);
  }

  articleCommentList(id, page) {
    let params: URLSearchParams = new URLSearchParams();
    params.set('page', page);

    return this.apiService.get(`articles/${id}/comments`, params)
      .map(data => data);
  }

}
