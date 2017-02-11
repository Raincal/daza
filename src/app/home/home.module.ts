import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared';

import { CategoriesResolve } from './category/category-resolve.services';

import { HomeComponent } from './home.component';
import { CategoryComponent } from './category';
import { ArticleListComponent } from '../article/article-list';
import { TagComponent } from './tag';
import { TopicComponent } from './topic';
import { HomeRoutes } from './home.routing';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(HomeRoutes)
  ],
  declarations: [
    HomeComponent,
    CategoryComponent,
    ArticleListComponent,
    TagComponent,
    TopicComponent
  ],
  providers: [
    CategoriesResolve
  ]
})
export class HomeModule { }
