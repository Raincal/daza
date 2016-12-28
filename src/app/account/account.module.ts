import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';

@NgModule({
  imports: [
    SharedModule
  ],
  exports: [],
  declarations: [
    LoginComponent,
    RegisterComponent
  ]
})
export class AccountModule { }
