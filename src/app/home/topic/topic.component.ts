import {
  Component,
  OnInit,
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/core';
import { TopicsService } from '../../shared';

@Component({
  selector: 'dz-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss'],
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
export class TopicComponent implements OnInit {
  topics;
  pagination;

  constructor(private topicsService: TopicsService) {
  }

  ngOnInit() {
    this.topicsService.lists(1)
      .subscribe(data => {
        this.topics = data.data;
        this.pagination = data.pagination;
      },
      error => console.log(error));
  }
}
