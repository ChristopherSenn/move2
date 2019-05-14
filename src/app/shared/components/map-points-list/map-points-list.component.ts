import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MarkerOnMap, UniversityService } from '@app/core';

@Component({
  selector: 'app-map-points-list',
  templateUrl: './map-points-list.component.html',
  styleUrls: ['./map-points-list.component.scss']
})
export class MapPointsListComponent implements OnInit {
  @Input() markerCategory: string;
  @Input() displayableUniversities: number[];
  @Input() filterIsActive: boolean;

  @Output() markerClicked: EventEmitter<number> = new EventEmitter();

  markers: MarkerOnMap[] = []; 

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
