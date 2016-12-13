import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutRoutes } from './layout';
import { HomeRoutes } from './home';
import { AccountRoutes } from './account';
import { ArticleRoutes } from './article';
import { TagRoutes } from './tag';
import { TopicRoutes } from './topic';

const routes: Routes = [
  ...LayoutRoutes,
  ...HomeRoutes,
  ...AccountRoutes,
  ...ArticleRoutes,
  ...TagRoutes,
  ...TopicRoutes,
  { path: '**', redirectTo: '/home/latest', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
