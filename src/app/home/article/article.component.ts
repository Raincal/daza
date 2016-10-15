import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../../article.service';
import { Articles } from './articles';

@Component({
  selector: 'dz-article',
  templateUrl: 'article.component.html',
  styleUrls: ['article.component.scss']
})
export class ArticleComponent implements OnInit {
  param: string;
  articles = Articles;
  pagination;

  constructor(
    private articleService: ArticleService,
    private route: ActivatedRoute
  ) {
    route.params.subscribe(params => {
      this.param = params['slug'];
      // this.articleService.getArticles(this.param)
      //   .subscribe(data => {
      //     this.articles = data.data;
      //     this.pagination = data.pagination;
      //   },
      //   error => console.log(error));
      console.log(this.articles);
    });
  }

  ngOnInit() {
  }
}
