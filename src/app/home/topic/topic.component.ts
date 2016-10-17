import { Component, OnInit } from '@angular/core';
import { Topics } from './topic';

import { TopicService } from '../../services/topic.service';

@Component({
  selector: 'dz-topic',
  providers: [TopicService],
  templateUrl: 'topic.component.html',
  styleUrls: ['topic.component.scss']
})
export class TopicComponent implements OnInit {
  topics;
  pagination;

  constructor(private topicService: TopicService) {
    this.topicService.getTopics()
      .subscribe(data => {
        this.topics = data.data;
        this.pagination = data.pagination;
      },
      error => console.log(error));
  }

  ngOnInit() { }
}
