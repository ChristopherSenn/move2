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
    //creates an array that contains all the IDs of the filters that are true (trues[category][filter] = id)
    let trues: number[][] = [];
    for (let cats = 0; cats < universityFilters.length; cats++) {
      trues[cats] = [];
      for (let i = 0; i < universityFilters[cats].content.length; i++) {
        if(universityFilters[cats].content[i].isActive){
          trues[cats].push(universityFilters[cats].content[i].id);
        }
      }
    }
    //creates an array that contains all the IDs of the universities that fulfill each filter results[filterCategory][idOfUniversities] 
    //=> contains duplicates, because each active filter can be fullfilled from multiple universities
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
    //deletes all duplicates from each category
    //=> results in for example: language can be englich OR german if both are activated
    for (let cats = 0; cats < results.length; cats++) {
      results[cats] = results[cats].filter((el, i, a) => i === a.indexOf(el))
    }
    //if in a category no filter is activated, it is removed 
    //=> new array with only the relevant categorys
    let relevantResults = [];
    for (let cats = 0; cats < results.length; cats++) {
      if (results[cats].length != 0) {
        relevantResults.push(results[cats]);
      }
    }
    //adds the results up in a single array.
    let relevantResults2: number [][] = []
    for (let cats = 0; cats < relevantResults.length; cats++) {
      relevantResults2 = relevantResults2.concat(relevantResults[cats]);
    }
    //counts how often each universityID occurs in the combined array
    // a[]: universityIDs - b[]: how often does the ID occur
    var a = [], b = [], prev;

    relevantResults2.sort();
    for ( var i = 0; i < relevantResults2.length; i++ ) {
        if ( relevantResults2[i] !== prev ) {
            a.push(relevantResults2[i]);
            b.push(1);
        } else {
            b[b.length-1]++;
        }
        prev = relevantResults2[i];
    }
    //if an ID occurs less than the count of activated Filter Categorys, it is marked
    //This results in th following: an university has to have the languages (English OR German) AND the faculty has to be (Ei OR M)
    for (let i = 0; i < b.length; i++) {
      if (b[i] != relevantResults.length) {
        a[i] = -1;
      }
    }
    //all the unmarked (relevant/filtered) universityIDs are saved in the final array that is passed to the map component
    this.displayableUniversities = [];
    for (let i = 0; i < a.length; i++) {
      if (a[i] != -1) {
        this.displayableUniversities.push(a[i]);
      } 
    }
    //determines if any filter is activated. This is neccessary because the final Array is empty if there are no filters at all AND if there are no fitting universities
    //the boolean tells the map component if it hast to apply the empty array or not
    if (this.displayableUniversities.length == 0) {
      this.filterIsActive = false;
    } else {
      this.filterIsActive = true;
    }

  }

}
