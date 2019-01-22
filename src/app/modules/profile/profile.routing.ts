import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './pages/user/user.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/profile/user',
    pathMatch: 'full'
  },
  {
    path: '',
    children: [
      {
        path: 'user',
        component: UserComponent
      }
    ]
  },
  //Fallback: In case the suburl does not exist, the user will be redirected to /profile/user
  {
    path: '**',
    redirectTo: '/profile/user',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }