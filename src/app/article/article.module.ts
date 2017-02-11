import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared';

import { ArticleDetailComponent } from './article-detail';
import { ArticleCommentsComponent } from './article-detail';
import { ArticleRoutes } from './article.routing';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(ArticleRoutes)
  ],
  exports: [RouterModule],
  declarations: [
    ArticleDetailComponent,
    ArticleCommentsComponent
  ],
  providers: [],
})
export class ArticleModule { }
