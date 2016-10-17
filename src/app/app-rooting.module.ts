import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

import { AccountRoutes } from './account';
import { HomeRoutes } from './home';

const routes: Routes = [

  {
    path: '', component: HomeComponent, children: [
      ...HomeRoutes,
    ]
  },
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
