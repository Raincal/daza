import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutRoutes } from './layout';
import { HomeRoutes } from './home';
import { AccountRoutes } from './account';
import { ArticleRoutes } from './article';

const routes: Routes = [
  ...LayoutRoutes,
  ...HomeRoutes,
  ...AccountRoutes,
  ...ArticleRoutes,
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
