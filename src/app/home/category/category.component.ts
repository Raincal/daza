import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'dz-category',
  templateUrl: 'category.component.html',
  styleUrls: ['category.component.scss']
})
export class CategoryComponent implements OnInit {
  categories: Array<Object>;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.data.forEach((data: { categories }) => {
      this.categories = data.categories;
    });
  }

}
