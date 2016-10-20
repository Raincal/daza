import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { SpinnerService } from '../../shared/spinner/spinner.service';
import { ArticlesService } from '../../shared';

@Component({
  selector: 'article-list',
  templateUrl: 'article-list.components.html',
  styleUrls: ['article-list.components.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('fadeIn', [
      state('in', style({ opacity: 1 })),
      transition(':enter', [
        style({ opacity: 0 }),
        animate(300)
      ]),
      transition(':leave', [
        animate(0, style({ opacity: 1 }))
      ])
    ])
  ]
})
export class ArticleListComponent implements OnInit {
  slug: string;
  articles = [];
  asyncArticles: Observable<Object[]>;
  p: number = 1;
  total: number;

  constructor(
    public spinner: SpinnerService,
    private articlesService: ArticlesService,
    private route: ActivatedRoute,
    private changeDetectorRef: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.slug = params['slug'];
      this.getPage(1);
      // 路由变化时更新文章
      this.changeDetectorRef.markForCheck();
    });
  }

  getPage(page: number) {
    this.spinner.start();
    this.asyncArticles = this.articlesService.lists(this.slug, page)
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
