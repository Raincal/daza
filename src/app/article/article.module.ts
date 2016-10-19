import { NgModule } from '@angular/core';

import { SharedModule } from '../shared';

import { ArticleDetailComponent } from './article-detail';
import { ArticleCommentsComponent } from './article-detail';

@NgModule({
  imports: [
    SharedModule
  ],
  exports: [],
  declarations: [
    ArticleDetailComponent,
    ArticleCommentsComponent
  ],
  providers: [],
})
export class ArticleModule { }
