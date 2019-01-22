import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './pages/map/map.component';
import { InternshipRoutingModule } from './internship.routing';

@NgModule({
  declarations: [MapComponent],
  imports: [
    CommonModule,
    InternshipRoutingModule
  ]
})
export class InternshipModule { }
