import { Routes, RouterModule } from '@angular/router';

import { AccountComponent } from './account.component';
import { LoginComponent } from './login/login.component';

const ACCOUNT_ROUTES: Routes = [
  { path: '', component: AccountComponent, children: [
    { path: '', redirectTo: 'login' },
    { path: 'login', component: LoginComponent },
    { path: 'register', loadChildren: 'app/account/register/register.module#RegisterModule' },
  ] },
];

export const AccountRouting = RouterModule.forChild(ACCOUNT_ROUTES);
