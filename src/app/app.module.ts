import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-rooting.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared';
import { LayoutModule } from './layout/layout.module';

import {
  JwtService,
  ApiService,
  ArticlesService,
  TagsService,
  TopicsService,
  AccountService,
  CategoriesService
} from './shared';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    LayoutModule
  ],
  providers: [
    JwtService,
    ApiService,
    ArticlesService,
    TagsService,
    TopicsService,
    AccountService,
    CategoriesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
