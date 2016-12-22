import {
  Component,
  OnInit,
  OnDestroy,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { SpinnerService } from '../../shared/spinner/spinner.service';
import { ArticlesService } from '../../shared';
import { fadeIn } from '../../animations/fade-in';

@Component({
  selector: 'article-list',
  templateUrl: './article-list.components.html',
  styleUrls: ['./article-list.components.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    fadeIn
  ]
})
export class ArticleListComponent implements OnInit, OnDestroy {
  private sub: any;

  isloading: boolean = false;
  slug: string;
  articles = [];
  asyncArticles: Observable<Object[]>;
  p: number;
  total: number;

  constructor(
    public spinner: SpinnerService,
    private articlesService: ArticlesService,
    private route: ActivatedRoute,
    private router: Router,
    private changeDetectorRef: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.slug = params['slug'];
      this.p = +params['page'] || 1;
      this.getPage(this.p, this.slug);
      // 路由变化时更新文章
      this.changeDetectorRef.markForCheck();
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getPage(page: number, slug: string) {
    page === 1 ?
      this.router.navigate(['/home/', this.slug]) :
      this.router.navigate(['/home/', this.slug, { page }]);
    this.spinner.start();
    this.isloading = true;
    this.asyncArticles = this.articlesService.lists(slug, page)
      .do(res => {
        this.articles = res.data;
        this.total = res.pagination.total;
        this.p = res.pagination.current_page;
        this.spinner.stop();
        this.isloading = false;
        window.scrollTo(0, 0);
      })
      .map(res => res.data);
  }
}
