import { Routes } from '@angular/router';

import { TopicDetailComponent } from './topic-detail';

export const TopicRoutes: Routes = [
  { path: ':id/tab', component: TopicDetailComponent }
];
