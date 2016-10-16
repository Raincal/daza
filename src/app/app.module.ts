import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AppRoutingModule } from './app-rooting.module';
import { HomeModule } from './home/home.module';

import { AppComponent } from './app.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { TagComponent } from './home/tag/tag.component';
import { TopicComponent } from './home/topic/topic.component';

import { ArticleService } from './article.service';
import { SpinnerService } from './shared/spinner/spinner.service';

@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    TagComponent,
    TopicComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    HomeModule,
    MaterialModule.forRoot()
  ],
  providers: [ArticleService, SpinnerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
