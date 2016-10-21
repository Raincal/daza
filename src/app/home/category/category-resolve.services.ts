import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from "rxjs/Observable";  // 必须引入，不然AOT会报错

import { CategoriesService } from '../../shared';

@Injectable()
export class CategoriesResolve implements Resolve<any> {
  constructor(
    private categoriesService: CategoriesService
  ) { }

  resolve() {
    return this.categoriesService.lists(1)
      .map(categories => {
        return categories.data;
      });
  }
};
