import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { TopicsService } from '../../shared';
import { SpinnerService } from '../../shared/spinner';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'topic-detail',
  templateUrl: './topic-detail.component.html',
  styleUrls: ['./topic-detail.component.scss']
})
export class TopicDetailComponent implements OnInit, OnDestroy {
  private sub;

  topic;
  subscribers;

  constructor(
    private topicsService: TopicsService,
    private spinner: SpinnerService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      this.getTopic(id);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getTopic(id) {
    Observable.forkJoin(
      this.topicsService.show(id),
      this.topicsService.subscribers(id, 1)
    ).subscribe(res => {
      this.topic = res[0].data;
      this.subscribers = res[1].data;
    },
    error => console.error(error)
    );
  }

}
