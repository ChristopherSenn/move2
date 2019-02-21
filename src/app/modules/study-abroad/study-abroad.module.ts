import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './pages/map/map.component';
import { StudyAbroadRoutingModule } from './studyAbroad.routing';

import { SharedModule } from '@app/shared';
import { UniversityDetailModalComponent } from './modals/university-detail-modal/university-detail-modal.component';
import { UniversityMapFilterComponent } from './components/university-map-filter/university-map-filter.component';
import { UniversityMapFilterCategoryComponent } from './components/university-map-filter/university-map-filter-category/university-map-filter-category.component';
//import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [MapComponent, UniversityDetailModalComponent, UniversityMapFilterComponent, UniversityMapFilterCategoryComponent],
  imports: [
    CommonModule,
    StudyAbroadRoutingModule,
    SharedModule,
    /*AgmCoreModule.forRoot({
      apiKey: 'pk.eyJ1IjoiY2hzNTQyMSIsImEiOiJjamlmbnRxaW0wNXEwM3ByMm0yaGE5MnQ3In0.HK9VqcBSfLpSs6LfcWENRw'
    })*/
  ]
})
export class StudyAbroadModule { }
