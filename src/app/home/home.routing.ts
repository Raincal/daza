import { Routes } from '@angular/router';

import { ArticleComponent } from './article/article.component';
import { TagComponent } from './tag/tag.component';
import { TopicComponent } from './topic/topic.component';
import { HomeComponent } from './home.component';

export const HomeRoutes: Routes = [
  {
    path: '', component: HomeComponent, children: [
      { path: '', redirectTo: '/home/latest', pathMatch: 'full' },
      { path: 'home/:slug', component: ArticleComponent },
      { path: 'home/latest', component: ArticleComponent },
      { path: '', outlet: 'tag', component: TagComponent },
      { path: '', outlet: 'topic', component: TopicComponent },
    ]
  },
];
