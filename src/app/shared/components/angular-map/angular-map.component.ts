import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MarkerOnMap, UniversityService } from '@app/core';

@Component({
  selector: 'app-angular-map',
  templateUrl: './angular-map.component.html',
  styleUrls: ['./angular-map.component.scss']
})
export class AngularMapComponent implements OnInit {
  @Input() markerCategory: string;

  @Output() markerClicked: EventEmitter<number> = new EventEmitter();

  markers: MarkerOnMap[]; 

  mapCenterLat: number = 51.678418;
  mapCenterLng: number = 7.809007;
  
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
