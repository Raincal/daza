import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';

import { TagComponent }   from './tag.component';

@NgModule({
  imports: [
    MaterialModule
  ],
  exports: [],
  declarations: [TagComponent],
  providers: [],
})
export class TagModule { }
