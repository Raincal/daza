import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AccountRoutes } from './account.routing';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(AccountRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [
    LoginComponent,
    RegisterComponent
  ]
})
export class AccountModule { }
