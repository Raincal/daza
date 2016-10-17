import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NavModule } from '../shared/nav';

import { AccountComponent } from './account.component';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';

@NgModule({
  imports: [
    NavModule,
    RouterModule
  ],
  exports: [
    AccountComponent,
    LoginComponent,
    RegisterComponent
  ],
  declarations: [
    AccountComponent,
    LoginComponent,
    RegisterComponent
  ]
})
export class AccountModule { }
