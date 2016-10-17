import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-rooting.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared';
import { HomeModule } from './home';
import { AccountModule } from './account';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    SharedModule,
    HomeModule,
    AccountModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
