import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { ArticleService } from '../../services/article.service';
import { SpinnerService } from '../../shared/spinner/spinner.service';

@Component({
  selector: 'dz-article',
  providers: [ArticleService],
  templateUrl: 'article.component.html',
  styleUrls: ['article.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ArticleComponent implements OnInit {
  param: string;
  articles = [];
  asyncArticles: Observable<Object[]>;
  p: number = 1;
  total: number;

  constructor(
    public spinner: SpinnerService,
    private articleService: ArticleService,
    private route: ActivatedRoute,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    route.params.subscribe(params => {
      this.param = params['slug'];
      this.getPage(1);
      // 路由变化时更新文章
      this.changeDetectorRef.markForCheck();
    });
  }

  ngOnInit() {
    this.getPage(1);
  }

  getPage(page: number) {
    this.spinner.start();
    return this.asyncArticles = this.articleService.getArticles(this.param, page)
      .map(res => {
        this.articles = res.data;
        this.total = res.pagination.total;
        this.p = res.pagination.current_page;
        this.spinner.stop();
        window.scrollTo(0, 0);
        return res.data;
      });
  }
}
