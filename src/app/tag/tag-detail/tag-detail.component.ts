import {
  Component,
  OnInit,
  OnDestroy,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { TagsService } from '../../shared';
import { SpinnerService } from '../../shared/spinner';

@Component({
  selector: 'tag-detail',
  templateUrl: 'tag-detail.component.html',
  styleUrls: ['tag-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TagDetailComponent implements OnInit, OnDestroy {
  private sub: any;

  articles: Array<Object> = [];
  asyncArticles: Observable<Object[]>;
  name: string;
  p: number = 1;
  total: number;

  constructor(
    private tagsService: TagsService,
    private spinner: SpinnerService,
    private route: ActivatedRoute,
    private router: Router,
    private changeDetectorRef: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.name = params['name'];
      this.p = +params['page'] || this.p;
      this.getPage(this.p, this.name);
      this.changeDetectorRef.markForCheck();
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getPage(page: number, name: string) {
    this.router.navigate(['/tags/', this.name, { page: page }]);
    this.spinner.start();
    this.asyncArticles = this.tagsService.articles(name, page)
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
