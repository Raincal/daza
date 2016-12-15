import {
  Component,
  OnInit,
  OnDestroy,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { TopicsService } from '../../shared';
import { SpinnerService } from '../../shared/spinner';
@Component({
  selector: 'topic-detail-latest',
  templateUrl: './topic-detail-latest.component.html',
  styleUrls: ['./topic-detail-latest.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopicDetailLatestComponent implements OnInit, OnDestroy {

  private sub: any;

  asyncArticles: Observable<Object[]>;
  id: string;
  p: number;
  total: number;

  constructor(
    private topicsService: TopicsService,
    private spinner: SpinnerService,
    private route: ActivatedRoute,
    private router: Router,
    private changeDetectorRef: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      this.p = +params['page'] || 1;
      this.getPage(this.p, this.id);
      this.changeDetectorRef.markForCheck();
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getPage(page: number, id: string) {
    page === 1 ?
      this.router.navigate(['/topics/', this.id, 'tab']) :
      this.router.navigate(['/topics/', this.id, 'tab', { page }]);
    this.spinner.start();
    this.asyncArticles = this.topicsService.articles(id , page, 15)
      .do(res => {
        this.total = res.pagination.total;
        this.p = res.pagination.current_page;
        this.spinner.stop();
        window.scrollTo(0, 0);
      })
      .map(res => res.data);
  }

}