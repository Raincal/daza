import { Component, OnInit } from '@angular/core';

import { CategoriesService } from '../../shared';

@Component({
  selector: 'dz-category',
  templateUrl: 'category.component.html',
  styleUrls: ['category.component.scss']
})
export class CategoryComponent implements OnInit {
  categories: Array<Object>;

  constructor(
    private categoriesService: CategoriesService
  ) { }

  ngOnInit() {
    this.categoriesService.lists(1)
      .subscribe(categories => {
        this.categories = categories.data;
      },
      error => console.log(error));
  }

}
