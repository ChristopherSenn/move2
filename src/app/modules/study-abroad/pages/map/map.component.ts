import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UniversityService, UniversityDetailOnMap } from '@app/core';

@Component({
  selector: 'app-map', 
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  //Tells the angular-map-component to load all the University Markers
  private markerCategory: string = 'University';
  private universityDetailOnMap: UniversityDetailOnMap;
  private universityDetailOnMapIsVisible = false;

  constructor(private universityService: UniversityService) { }

  ngOnInit() {
  }

  private markerClickedHandler(id: number) {
    this.universityDetailOnMapIsVisible = true;
    this.universityService.getUniversityDetailOnMap(id).subscribe(details => this.universityDetailOnMap = details);
  }

  private toggleUniversityDetailModalHandler() {
    this.universityDetailOnMapIsVisible = false;
  }

}
