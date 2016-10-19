import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticlesService } from '../../shared';

@Component({
  selector: 'article-detail',
  templateUrl: 'article-detail.components.html',
  styleUrls: ['article-detail.components.scss']
})
export class ArticleDetailComponent implements OnInit {
  article;

  constructor(
    private route: ActivatedRoute,
    private articlesService: ArticlesService
  ) {
    route.params.subscribe(params => {
      let id = +params['id'];
      this.articlesService.show(id)
        .subscribe(res => {
          this.article = res.data;
          console.log(res.data);
        },
        error => {
          console.log(error);
        });
    });
  }

  ngOnInit() { }
}
