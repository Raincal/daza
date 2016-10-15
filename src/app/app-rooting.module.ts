import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent, children: [
      { path: '', redirectTo: '/home/latest', pathMatch: 'full' },
      { path: 'home/:slug', loadChildren: 'app/home/article/article.module#ArticleModule' },
      { path: 'home/latest', loadChildren: 'app/home/article/article.module#ArticleModule' },
    ]
  },
  { path: 'account', loadChildren: 'app/account/account.module#AccountModule' },
  { path: '**', redirectTo: '/home/latest', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
