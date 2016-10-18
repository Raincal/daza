import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { CategoryComponent } from './category';
import { TagComponent } from './tag';
import { TopicComponent } from './topic';
import { RouterModule } from '@angular/router';
import { ArticleModule } from './article';
import { MaterialModule } from '@angular/material';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [
    RouterModule,
    ArticleModule,
    MaterialModule,
    CommonModule
  ],
  exports: [
    HomeComponent,
  ],
  declarations: [
    HomeComponent,
    CategoryComponent,
    TagComponent,
    TopicComponent
  ]
})
export class HomeModule { }
