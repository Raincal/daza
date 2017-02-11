import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutRoutes } from './layout';

const routes: Routes = [
  ...LayoutRoutes,
  { path: '', loadChildren: 'app/home/home.module#HomeModule' },
  { path: 'articles', loadChildren: 'app/article/article.module#ArticleModule' },
  { path: 'tags', loadChildren: 'app/tag/tag.module#TagModule' },
  { path: 'topics', loadChildren: 'app/topic/topic.module#TopicModule' },
  { path: 'account', loadChildren: 'app/account/account.module#AccountModule' },
  { path: '**', redirectTo: '/home/latest', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
