import { Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const AccountRoutes: Routes = [
  { path: 'account/login', component: LoginComponent },
  { path: 'account/register', component: RegisterComponent }
];
