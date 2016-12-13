import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../shared/shared.module';
import { HeaderComponent } from './index';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
  ],
  declarations: [
    HeaderComponent,
],
  exports: [
    HeaderComponent,
  ],
})

export class LayoutModule { }
