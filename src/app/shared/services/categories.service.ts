import { Injectable } from '@angular/core';
import { URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { ApiService } from './api.service';

@Injectable()
export class CategoriesService {
  categories: Observable<any> = null;

  constructor(
    private apiService: ApiService
  ) { }

  lists(page): Observable<any> {
    let params: URLSearchParams = new URLSearchParams();
    params.set('page', page);

    if (!this.categories) {
      this.categories = this.apiService.get('categories', params)
        .map(data => data)
        .publishReplay(1)
        .refCount();
    }

    return this.categories;
  }

  show(id): Observable<any> {
    return this.apiService.get(`categories/${id}`)
      .map(data => data);
  }

  update(id): Observable<any> {
    return this.apiService.put(`categories/${id}`)
      .map(data => data);
  }

  destroy(id): Observable<any> {
    return this.apiService.delete(`categories/${id}`)
      .map(data => data);
  }

}
