import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';

import { NavModule } from '../shared/nav';
import { HomeRouting } from './home.routing';

@NgModule({
  imports: [
    HomeRouting,
    NavModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
