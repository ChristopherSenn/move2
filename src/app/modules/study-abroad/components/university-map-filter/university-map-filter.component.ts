import { Component, OnInit } from '@angular/core';
import { UniversityService, UniversityFilters, UniversityMapFilterElement } from '@app/core';

@Component({
  selector: 'app-university-map-filter',
  templateUrl: './university-map-filter.component.html',
  styleUrls: ['./university-map-filter.component.scss']
})
export class UniversityMapFilterComponent implements OnInit {
  private universityFilters: UniversityFilters[] = [];

  constructor(private universityService: UniversityService) { }

  ngOnInit() {
    this.getFilters();
    
  }

  toggleFilter(category: number, content: number) {
    this.universityFilters[category].content[content].isActive = !this.universityFilters[category].content[content].isActive;
    //console.log(category);console.log(content);
  }

  test() {
    console.log(this.universityFilters);
  }

  private getFilters() {
    this.universityFilters = [{id: 0, title: 'Languages', content: null}, {id: 1, title: 'Activities', content: null}, {id: 2, title: 'Faculties', content: null}];
    this.universityService.getUniversityFilters('university_languages_list').subscribe(filters => this.universityFilters[0].content = filters);
    this.universityService.getUniversityFilters('university_activities_list').subscribe(filters => this.universityFilters[1].content = filters);
    this.universityService.getUniversityFilters('university_faculties_list').subscribe(filters => this.universityFilters[2].content = filters);
  }
}
