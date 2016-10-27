import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/';
import { AccountComponent } from './account.component';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';

@NgModule({
  imports: [
    SharedModule
  ],
  exports: [],
  declarations: [
    AccountComponent,
    LoginComponent,
    RegisterComponent
  ]
})
export class AccountModule { }
