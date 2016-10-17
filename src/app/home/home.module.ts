import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { CategoryComponent } from './category';
import { TagComponent } from './tag';
import { TopicComponent } from './topic';
import { RouterModule } from '@angular/router';
import { NavModule } from '../shared/nav';
import { ArticleModule } from './article';

@NgModule({
  imports: [
    RouterModule,
    NavModule,
    ArticleModule
  ],
  exports: [
    HomeComponent,
    // ArticleComponent,
    // TagComponent,
    // TopicComponent
  ],
  declarations: [
    HomeComponent,
    CategoryComponent,
    TagComponent,
    TopicComponent
  ]
})
export class HomeModule { }
