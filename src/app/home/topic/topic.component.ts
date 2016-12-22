import {
  Component,
  OnInit
} from '@angular/core';
import { TopicsService } from '../../shared';
import { fadeIn } from '../../animations/fade-in';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss'],
  animations: [
    fadeIn
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
      error => console.error(error));
  }
}
