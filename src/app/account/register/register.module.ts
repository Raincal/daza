import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent }   from './register.component';

const routes: Routes = [
  {path: '', component: RegisterComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [],
  declarations: [RegisterComponent],
  providers: [],
})
export class RegisterModule { }
