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

}
