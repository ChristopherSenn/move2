import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { AngularMapComponent } from './components/angular-map/angular-map.component';

@NgModule({
  declarations: [AngularMapComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    AngularMapComponent
  ]
})
export class SharedModule { }
