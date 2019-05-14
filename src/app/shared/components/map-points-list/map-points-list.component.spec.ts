import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapPointsListComponent } from './map-points-list.component';

describe('MapPointsListComponent', () => {
  let component: MapPointsListComponent;
  let fixture: ComponentFixture<MapPointsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapPointsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapPointsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
