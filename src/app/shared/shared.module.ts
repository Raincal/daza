import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { Ng2PaginationModule } from 'ng2-pagination';

import { SpinnerComponent } from './spinner';
import { SpinnerService } from './spinner';

import { TimeagoPipe } from './timeago.pipe';
import { CommonmarkPipe } from './commonmark.pipe';
import { PicturePipe } from './picture.pipe';

@NgModule({
  declarations: [
    SpinnerComponent,
    TimeagoPipe,
    CommonmarkPipe,
    PicturePipe
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule,
    MaterialModule.forRoot(),
    Ng2PaginationModule
  ],
  providers: [
    SpinnerService
  ],
  exports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule,
    MaterialModule,
    Ng2PaginationModule,
    SpinnerComponent,
    TimeagoPipe,
    CommonmarkPipe,
    PicturePipe
  ],
})

export class SharedModule { }
