import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';

import { TopicComponent }   from './topic.component';

@NgModule({
  imports: [
    MaterialModule
  ],
  exports: [],
  declarations: [TopicComponent],
  providers: [],
})
export class TopicModule { }
