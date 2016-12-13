import {
  Component,
  OnInit,
  Input
} from '@angular/core';

@Component({
  selector: 'topic-subscriber',
  templateUrl: './topic-subscriber.component.html',
  styleUrls: ['./topic-subscriber.component.scss']
})
export class TopicSubscriberComponent implements OnInit {
  @Input() subscribers: Object[];

  constructor(
  ) { }

  ngOnInit() {
  }

}
