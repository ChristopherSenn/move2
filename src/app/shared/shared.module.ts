import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MapModule, MapAPILoader, MarkerTypeId, IMapOptions, IBox, IMarkerIconInfo, WindowRef,   
  DocumentRef, MapServiceFactory, 
  BingMapAPILoaderConfig, BingMapAPILoader, 
  GoogleMapAPILoader,  GoogleMapAPILoaderConfig
} from 'angular-maps';

import { RouterModule } from '@angular/router';
import { AngularMapComponent } from './components/angular-map/angular-map.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { MapPointsListComponent } from './components/map-points-list/map-points-list.component';

@NgModule({
  declarations: [AngularMapComponent, MapPointsListComponent],
  imports: [
    CommonModule,
    RouterModule,
    MapModule.forRootBing(),
    FontAwesomeModule
  ],
  providers: [
    {
      provide: MapAPILoader, deps: [], useFactory: BingMapServiceProviderFactory
    }
  ],
  exports: [
    AngularMapComponent,
    MapPointsListComponent
  ]
})
export class SharedModule { }

export function BingMapServiceProviderFactory(){
  let bc: BingMapAPILoaderConfig = new BingMapAPILoaderConfig();
  bc.apiKey ="ArViBW9tiS1QQMBdt7YUh71RF9eOovaprQbyNKQ4uBeL2L9gFlbEw3Hrfgy0D-43";
  bc.branch = "experimental"; 
      // to use the experimental bing brach. There are some bug fixes for
      // clustering in that branch you will need if you want to use 
      // clustering.
  return new BingMapAPILoader(bc, new WindowRef(), new DocumentRef());
}