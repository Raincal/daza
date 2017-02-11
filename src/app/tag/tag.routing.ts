import { Routes } from '@angular/router';

import { TagDetailComponent } from './tag-detail';

export const TagRoutes: Routes = [
  { path: ':name', component: TagDetailComponent }
];
