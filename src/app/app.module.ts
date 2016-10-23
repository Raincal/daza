import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-rooting.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared';
import { LayoutModule } from './layout/layout.module';
import { HomeModule } from './home';
import { AccountModule } from './account';
import { ArticleModule } from './article';
import { TagModule } from './tag';

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
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    SharedModule,
    LayoutModule,
    HomeModule,
    AccountModule,
    ArticleModule,
    TagModule
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
export class AppModule { }
