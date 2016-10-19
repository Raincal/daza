import { NgModule } from '@angular/core';

import { SharedModule } from '../shared';

import { HomeComponent } from './home.component';
import { CategoryComponent } from './category';
import { ArticleListComponent } from '../article/article-list';
import { TagComponent } from './tag';
import { TopicComponent } from './topic';

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [
    HomeComponent,
    CategoryComponent,
    ArticleListComponent,
    TagComponent,
    TopicComponent,
  ]
})
export class HomeModule { }
