import { Routes } from '@angular/router';

import { ArticleDetailComponent } from './article-detail';

export const ArticleRoutes: Routes = [
  { path: ':id', component: ArticleDetailComponent }
];
