import { Routes } from '@angular/router';

import { TopicDetailComponent } from './topic-detail';

export const TopicRoutes: Routes = [
  { path: 'topics/:id/tab', component: TopicDetailComponent }
];
