import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AccountComponent } from './account.component';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';

@NgModule({
  imports: [
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
