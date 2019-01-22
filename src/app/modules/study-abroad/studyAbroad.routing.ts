import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapComponent } from './pages/map/map.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/studyAbroad/map',
    pathMatch: 'full'
  },
  {
    path: '',
    children: [
      {
        path: 'map',
        component: MapComponent
      }
    ]
  },
  //Fallback: In case the suburl does not exist, the user will be redirected to /studyAbroad/map
  {
    path: '**',
    redirectTo: '/studyAbroad/map',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudyAbroadRoutingModule { }