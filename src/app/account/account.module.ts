import { NgModule } from '@angular/core';
import { AccountComponent } from './account.component';
import { AccountRouting } from './account.routing';

import { NavModule } from '../shared/nav';

@NgModule({
  imports: [
    NavModule,
    AccountRouting,
  ],
  declarations: [
    AccountComponent,
  ]
})
export class AccountModule { }
