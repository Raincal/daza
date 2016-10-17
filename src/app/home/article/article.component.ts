import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ArticleService } from '../../services/article.service';
import { SpinnerService } from '../../shared/spinner/spinner.service';

@Component({
  selector: 'dz-article',
  providers: [ArticleService],
  templateUrl: 'article.component.html',
  styleUrls: ['article.component.scss']
})

export class ArticleComponent implements OnInit {
  param: string;
  articles;
  pagination;

  constructor(
    public spinner: SpinnerService,
    private articleService: ArticleService,
    private route: ActivatedRoute
  ) {
    route.params.subscribe(params => {
      this.spinner.start();
      this.param = params['slug'];
      this.articleService.getArticles(this.param)
        .subscribe(data => {
          this.articles = data.data;
          this.pagination = data.pagination;
          this.spinner.stop();
        },
        error => console.log(error));
    });
  }

  ngOnInit() {
  }
}
