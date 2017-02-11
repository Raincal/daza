import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared';

import { TagDetailComponent } from './tag-detail';
import { TagRoutes } from './tag.routing';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(TagRoutes)
  ],
  exports: [RouterModule],
  declarations: [
    TagDetailComponent
  ],
  providers: [],
})
export class TagModule { }
