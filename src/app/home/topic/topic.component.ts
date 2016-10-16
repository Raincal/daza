import { Component, OnInit } from '@angular/core';
import { Topics } from './topic';

@Component({
  selector: 'dz-topic',
  templateUrl: 'topic.component.html',
  styleUrls: ['topic.component.scss']
})
export class TopicComponent implements OnInit {
  topics = Topics;
  constructor() { }

  ngOnInit() { }
}
