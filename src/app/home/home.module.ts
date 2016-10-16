import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { CategoryComponent } from './category';
import { RouterModule } from '@angular/router';
import { NavModule } from '../shared/nav';

@NgModule({
  imports: [
    NavModule,
    RouterModule
  ],
  exports: [],
  declarations: [
    HomeComponent,
    CategoryComponent,
  ]
})
export class HomeModule { }
