import { Routes, RouterModule } from '@angular/router';

import { AccountComponent } from './account.component';

const ACCOUNT_ROUTES: Routes = [
  { path: '', component: AccountComponent, children: [
    { path: '', redirectTo: 'login' },
    { path: 'login', loadChildren: 'app/account/login/login.module#LoginModule' },
    { path: 'register', loadChildren: 'app/account/register/register.module#RegisterModule' },
  ] },
];

export const AccountRouting = RouterModule.forChild(ACCOUNT_ROUTES);
