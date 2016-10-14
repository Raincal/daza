import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';

const HOME_ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent }
];

export const HomeRouting = RouterModule.forChild(HOME_ROUTES);
