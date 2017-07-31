import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
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
    const params: HttpParams = new HttpParams()
      .set('page', page);

    if (!this.categories) {
      this.categories = this.apiService.get('categories', params)
        .publishReplay(1)
        .refCount();
    }

    return this.categories;
  }

  show(id): Observable<any> {
    return this.apiService.get(`categories/${id}`);
  }

  update(id): Observable<any> {
    return this.apiService.put(`categories/${id}`);
  }

  destroy(id): Observable<any> {
    return this.apiService.delete(`categories/${id}`);
  }

}
