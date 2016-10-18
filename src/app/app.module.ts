import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-rooting.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared';
import { LayoutModule } from './layout/layout.module';
import { HomeModule } from './home';
import { AccountModule } from './account';

import { Ng2PaginationModule } from 'ng2-pagination';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    Ng2PaginationModule,
    AppRoutingModule,
    SharedModule,
    LayoutModule,
    HomeModule,
    AccountModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
