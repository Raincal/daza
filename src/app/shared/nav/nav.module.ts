import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { RouterModule }   from '@angular/router';

import { NavComponent }   from './nav.component';

@NgModule({
  imports: [
    RouterModule,
    MaterialModule,
    CommonModule
  ],
  exports: [
    NavComponent,
    CommonModule
  ],
  declarations: [NavComponent],
  providers: [],
})
export class NavModule { }
