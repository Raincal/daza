import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { Ng2PaginationModule } from 'ng2-pagination';
import { ToastModule } from 'ng2-toastr/ng2-toastr';

import { SpinnerComponent } from './spinner';
import { SpinnerService } from './spinner';

import { TimeagoPipe } from './timeago.pipe';
import { CommonmarkPipe } from './commonmark.pipe';
import { PicturePipe } from './picture.pipe';

let options: any = {
  animate: 'flyRight'
};

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
    Ng2PaginationModule,
    ToastModule.forRoot(options),
    MaterialModule.forRoot(),
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
    ToastModule,
    SpinnerComponent,
    TimeagoPipe,
    CommonmarkPipe,
    PicturePipe
  ],
})

export class SharedModule { }
