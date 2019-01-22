import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './pages/map/map.component';
import { StudyAbroadRoutingModule } from './studyAbroad.routing';

@NgModule({
  declarations: [MapComponent],
  imports: [
    CommonModule,
    StudyAbroadRoutingModule
  ]
})
export class StudyAbroadModule { }
