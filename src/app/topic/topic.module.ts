import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared';
import { TopicDetailComponent } from './topic-detail';
import { TopicDetailLatestComponent } from './topic-detail-latest/topic-detail-latest.component';
import { TopicSubscriberComponent } from './topic-subscriber/topic-subscriber.component';
import { TopicRoutes } from './topic.routing';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(TopicRoutes)
  ],
  exports: [RouterModule],
  declarations: [
    TopicDetailComponent,
    TopicDetailLatestComponent,
    TopicSubscriberComponent
  ]
})
export class TopicModule { }
