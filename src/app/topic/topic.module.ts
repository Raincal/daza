import { NgModule } from '@angular/core';

import { SharedModule } from '../shared';
import { TopicDetailComponent } from './topic-detail';
import { TopicDetailLatestComponent } from './topic-detail-latest/topic-detail-latest.component';
import { TopicSubscriberComponent } from './topic-subscriber/topic-subscriber.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    TopicDetailComponent,
    TopicDetailLatestComponent,
    TopicSubscriberComponent
  ]
})
export class TopicModule { }
