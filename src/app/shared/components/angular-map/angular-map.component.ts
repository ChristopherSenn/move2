import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MarkerOnMap, UniversityService } from '@app/core';
import {MarkerTypeId, IMapOptions, IMarkerIconInfo } from 'angular-maps';

// I guess I need a lib for those
import { faUniversity } from '@fortawesome/pro-solid-svg-icons';

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

  // General map Options; Put customStyles here when supported
  _options: IMapOptions = {
    navigationBarMode: 2, // In case showDashboard ever gets removed
    showDashboard: false, // Disables navigation bar
    mapTypeId: 2 // Will be overwritten by customStyles
  };
  
  // Imo the best / only way to make angular-maps kinda work hand in hand with angular-fontawesome
  private iconInfo: IMarkerIconInfo = {
    markerType: MarkerTypeId.FontMarker,
    fontName: 'FontAwesome',
    fontSize: 19,
    color: 'red',
    markerOffsetRatio: { x: 0.5, y: 1 },
    text: String.fromCharCode(parseInt(faUniversity.icon[3], 16)) 
  }

  // Colors of the Clusters
  /**
   * NEED TO BE ADJUSTED
   */
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
