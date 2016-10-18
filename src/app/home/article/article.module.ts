import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { CommonModule } from '@angular/common';

import { ArticleComponent }   from './article.component';

import { ArticleService } from '../../services/article.service';

import { Ng2PaginationModule } from 'ng2-pagination';

import { TimeagoPipe } from '../../timeago.pipe';

const routes: Routes = [
  {path: '', component: ArticleComponent}
];

@NgModule({
  imports: [
    Ng2PaginationModule,
    MaterialModule,
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    ArticleComponent
  ],
  declarations: [
    ArticleComponent,
    TimeagoPipe
  ],
  providers: [ArticleService],
})
export class ArticleModule { }
