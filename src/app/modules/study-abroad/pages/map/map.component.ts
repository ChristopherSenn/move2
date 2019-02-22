import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UniversityService, UniversityDetailOnMap, UniversityFilters, UniversityFilterPair } from '@app/core';

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

  private universityFilterPairs = [];
  private universityFilters: UniversityFilters[] = [];
  private universitiesToDisplay: number[] = [];
  private displayableUniversities = [];
  private filterIsActive = false;

  constructor(private universityService: UniversityService) { }

  ngOnInit() {
    this.universityService.getFilters('university_languages').subscribe(sad => this.universityFilterPairs[0] = sad);
    this.universityService.getFilters('university_activities').subscribe(sad => this.universityFilterPairs[1] = sad);
    this.universityService.getFilters('university_faculties').subscribe(sad => this.universityFilterPairs[2] = sad);
  }

  private markerClickedHandler(id: number) {
    this.universityDetailOnMapIsVisible = true;
    this.universityService.getUniversityDetailOnMap(id).subscribe(details => this.universityDetailOnMap = details);
  }

  private toggleUniversityDetailModalHandler() {
    this.universityDetailOnMapIsVisible = false;
  }

  private onFilterChanged(universityFilters: UniversityFilters[]) {
    this.universityFilters = universityFilters;

    let trues: number[][] = [];
    for (let cats = 0; cats < universityFilters.length; cats++) {
      trues[cats] = [];
      for (let i = 0; i < universityFilters[cats].content.length; i++) {
        if(universityFilters[cats].content[i].isActive){
          trues[cats].push(universityFilters[cats].content[i].id);
          console.log(universityFilters[cats].content[i].id);
        }
      }
    }
    let results: number [][] = [];
    for (let cats = 0; cats < universityFilters.length; cats++) {
      results[cats] = [];
      for (let i = 0; i < trues[cats].length; i++) {
        for (let j = 0; j < this.universityFilterPairs[cats].length; j++) {
          if(trues[cats][i] == this.universityFilterPairs[cats][j].filter_id) {
            results[cats].push(this.universityFilterPairs[cats][j].universityId);
          }
        }
      }
    }

    for (let cats = 0; cats < results.length; cats++) {
      results[cats] = results[cats].filter((el, i, a) => i === a.indexOf(el))
    }
    
    this.displayableUniversities = [];
    for (let cats = 0; cats < results.length; cats++) {
      this.displayableUniversities = this.displayableUniversities.concat(results[cats]);
    }
    
    this.displayableUniversities = this.displayableUniversities.filter((el, i, a) => i === a.indexOf(el));

    this.filterIsActive = false;
    for (let cats = 0; cats < trues.length; cats++) {
      if (trues[cats].length != 0) {
        this.filterIsActive = true;
        break;
      }
    }
    
  }

}
