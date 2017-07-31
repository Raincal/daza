import {
  Component,
  OnInit,
  OnDestroy,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { TagsService } from '../../shared';
import { SpinnerService } from '../../shared/spinner';

@Component({
  selector: 'tag-detail',
  templateUrl: './tag-detail.component.html',
  styleUrls: ['./tag-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TagDetailComponent implements OnInit, OnDestroy {
  private sub: any;

  asyncArticles: Observable<Object[]>;
  name: string;
  p: number;
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
      this.p = +params['page'] || 1;
      this.getPage(this.p);
      this.changeDetectorRef.markForCheck();
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getPage(page: number) {
    page === 1 ?
      this.router.navigate(['/tags/', this.name]) :
      this.router.navigate(['/tags/', this.name, { page }]);
    this.spinner.start();
    this.asyncArticles = this.tagsService.articles(this.name, page)
      .do(res => {
        this.total = res.pagination.total;
        this.p = res.pagination.current_page;
        this.spinner.stop();
        window.scrollTo(0, 0);
      })
      .map(res => res.data);
  }

}
