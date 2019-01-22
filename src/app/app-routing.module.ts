import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { ContentLayoutComponent } from './layouts/content-layout/content-layout.component';

import { CONTENT_ROUTES } from '@app/shared';

import { AuthGuard } from '@app/core';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: ContentLayoutComponent,
    canActivate: [AuthGuard],
    loadChildren: './modules/home/home.module#HomeModule'
  },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    loadChildren: './modules/auth/auth.module#AuthModule'
  },
  {
    path: 'internship',
    component: ContentLayoutComponent,
    canActivate: [AuthGuard],
    loadChildren: './modules/internship/internship.module#InternshipModule'
  },
  {
    path: 'studyAbroad',
    component: ContentLayoutComponent,
    canActivate: [AuthGuard],
    loadChildren: './modules/study-abroad/study-abroad.module#StudyAbroadModule'
  },
  {
    path: 'profile',
    component: ContentLayoutComponent,
    canActivate: [AuthGuard],
    loadChildren: './modules/profile/profile.module#ProfileModule'
  },
  {
    path: '**',
    redirectTo: '/home/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
