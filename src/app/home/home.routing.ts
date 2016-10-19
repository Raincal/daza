import { Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { ArticleListComponent } from '../article/article-list';
import { CategoryComponent } from './category';
import { TagComponent } from './tag';
import { TopicComponent } from './topic';

export const HomeRoutes: Routes = [
  {
    path: '', component: HomeComponent, children: [
      { path: '', redirectTo: '/home/latest', pathMatch: 'full' },
      { path: 'home/:slug', component: ArticleListComponent },
      { path: 'home/latest', component: ArticleListComponent },
      { path: '', outlet: 'category', component: CategoryComponent },
      { path: '', outlet: 'tag', component: TagComponent },
      { path: '', outlet: 'topic', component: TopicComponent },
    ]
  },
];
