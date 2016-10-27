import { NgModule } from '@angular/core';

import { SharedModule } from '../shared';

import { TagDetailComponent } from './tag-detail';

@NgModule({
  imports: [
    SharedModule
  ],
  exports: [],
  declarations: [
    TagDetailComponent
  ],
  providers: [],
})
export class TagModule { }
