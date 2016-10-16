import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { CommonModule } from '@angular/common';

import { ArticleComponent }   from './article.component';

import { TimeagoPipe } from '../../timeago.pipe';

const routes: Routes = [
  {path: '', component: ArticleComponent}
];

@NgModule({
  imports: [
    MaterialModule,
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [ArticleComponent],
  declarations: [
    ArticleComponent,
    TimeagoPipe
  ],
  providers: [],
})
export class ArticleModule { }
