import { NgModule } from '@angular/core';
import { AccountComponent } from './account.component';
import { AccountRouting } from './account.routing';

import { NavModule } from '../shared/nav';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    NavModule,
    AccountRouting
  ],
  declarations: [
    AccountComponent,
    LoginComponent,
  ]
})
export class AccountModule { }
