import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { MdButtonModule } from '@angular/material/button';
import { MdToolbarModule } from '@angular/material/toolbar';
import { MdCardModule } from '@angular/material/card';
import { MdListModule } from '@angular/material/list';
import { MdTabsModule } from '@angular/material/tabs';
import { MdMenuModule } from '@angular/material/menu';
import { MdIconModule } from '@angular/material/icon';
import { MdInputModule } from '@angular/material/input';
import { MdGridListModule } from '@angular/material/grid-list';
import { MdProgressSpinnerModule } from '@angular/material/progress-spinner';

import { Ng2PaginationModule } from 'ng2-pagination';
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
    Ng2PaginationModule,
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
    Ng2PaginationModule,
    ToastyModule,
    SpinnerComponent,
    TimeagoPipe,
    CommonmarkPipe,
    PicturePipe
  ],
})

export class SharedModule { }
