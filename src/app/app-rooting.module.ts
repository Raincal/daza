import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountRoutes } from './account';
import { HomeRoutes } from './home';
import { LayoutRoutes } from './layout';

const routes: Routes = [
  ...LayoutRoutes,
  ...HomeRoutes,
  ...AccountRoutes,
  { path: '**', redirectTo: '/home/latest', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
