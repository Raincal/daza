import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { CategoryComponent } from './category';

import { NavModule } from '../shared/nav';
import { HomeRouting } from './home.routing';

@NgModule({
  imports: [
    HomeRouting,
    NavModule
  ],
  exports: [],
  declarations: [
    HomeComponent,
    CategoryComponent,
  ]
})
export class HomeModule { }
