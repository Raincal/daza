import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
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
    const params: HttpParams = new HttpParams()
    .set('category_id', slug)
    .set('category_slug', slug)
    .set('page', page);

    return this.apiService.get('articles', params);
  }

  store(params) {
    return this.apiService.post('articles', params);
  }

  show(id) {
    return this.apiService.get(`articles/${id}`);
  }

  update(id, params) {
    return this.apiService.put(`articles/${id}`, params);
  }

  destroy(id) {
    return this.apiService.delete(`articles/${id}`);
  }

  articleVote(id, type) {
    return this.apiService.post(`articles/${id}/votes`, { type });
  }

  articleComment(id, params) {
    return this.apiService.post(`articles/${id}/comments`, params);
  }

  articleCommentList(id, page) {
    const params: HttpParams = new HttpParams()
      .set('page', page);

    return this.apiService.get(`articles/${id}/comments`, params);
  }

}
