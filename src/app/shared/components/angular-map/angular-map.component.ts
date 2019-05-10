import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MarkerOnMap, UniversityService, UniversityFilterPair } from '@app/core';
import {MapModule, MapAPILoader, MarkerTypeId, IMapOptions, IBox, IMarkerIconInfo, WindowRef, 
  DocumentRef, MapServiceFactory, 
  BingMapAPILoaderConfig, BingMapAPILoader, 
  GoogleMapAPILoader,  GoogleMapAPILoaderConfig, ILatLong
} from 'angular-maps';

@Component({
  selector: 'app-angular-map',
  templateUrl: './angular-map.component.html',
  styleUrls: ['./angular-map.component.scss']
})
export class AngularMapComponent implements OnInit {
  @Input() markerCategory: string;
  @Input() displayableUniversities: number[];
  @Input() filterIsActive: boolean;

  @Output() markerClicked: EventEmitter<number> = new EventEmitter();

  markers: MarkerOnMap[] = []; 

  mapCenterLat: number = 51.678418;
  mapCenterLng: number = 7.809007;
  

  /*_options: IMapOptions = {
    disableBirdseye: false,
    disableStreetside: false,
    navigationBarMode: 1
  };*/
  
  /*_box: IBox = {
    maxLatitude: 32,
    maxLongitude: -92,
    minLatitude: 29,
    minLongitude: -98
  };*/
  
  private iconInfo: IMarkerIconInfo = {
    markerType: MarkerTypeId.FontMarker,
    fontName: 'FontAwesome',
    fontSize: 24,
    color: 'red',
    markerOffsetRatio: { x: 0.5, y: 1 },
    text: '\uF276'
  }

  private clusterColors: Map<number, string> = new Map<number,string>([
    [10, 'rgba(20, 180, 20, 0.5)'],
    [20, 'rgba(255, 210, 40, 0.5)'],
    [Number.MAX_SAFE_INTEGER ,'rgba(255, 40, 40, 0.5)']
  ]);


  constructor(private universityService: UniversityService) { }

  ngOnInit() {
    // Uses different Service based on Category passed from map Component.
    if(this.markerCategory === 'University') {
      this.universityService.getMarkersOnMap().subscribe(markers => this.markers = markers);
    }
  }

  toggleDetails(id) {
    this.markerClicked.emit(id);
  }

}
