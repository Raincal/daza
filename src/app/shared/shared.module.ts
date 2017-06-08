import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import {
  MdButtonModule,
  MdToolbarModule,
  MdCardModule,
  MdListModule,
  MdTabsModule,
  MdMenuModule,
  MdIconModule,
  MdInputModule,
  MdGridListModule,
  MdProgressSpinnerModule
} from '@angular/material';

import { NgxPaginationModule } from 'ngx-pagination';
import { ToastyModule } from 'ng2-toasty';

import { SpinnerComponent, SpinnerService } from './spinner';

import { TimeagoPipe, CommonmarkPipe, PicturePipe } from './pipes';

@NgModule({
  declarations: [
    SpinnerComponent,
    TimeagoPipe,
    CommonmarkPipe,
    PicturePipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule,
    NgxPaginationModule,
    ToastyModule,
    MdButtonModule,
    MdToolbarModule,
    MdCardModule,
    MdListModule,
    MdTabsModule,
    MdMenuModule,
    MdIconModule,
    MdInputModule,
    MdGridListModule,
    MdProgressSpinnerModule
  ],
  providers: [
    SpinnerService
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule,
    MdButtonModule,
    MdToolbarModule,
    MdCardModule,
    MdListModule,
    MdTabsModule,
    MdMenuModule,
    MdIconModule,
    MdInputModule,
    MdGridListModule,
    MdProgressSpinnerModule,
    NgxPaginationModule,
    ToastyModule,
    SpinnerComponent,
    TimeagoPipe,
    CommonmarkPipe,
    PicturePipe
  ],
})

export class SharedModule { }
