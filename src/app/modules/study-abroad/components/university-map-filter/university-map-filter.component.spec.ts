import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityMapFilterComponent } from './university-map-filter.component';

describe('UniversityMapFilterComponent', () => {
  let component: UniversityMapFilterComponent;
  let fixture: ComponentFixture<UniversityMapFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniversityMapFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversityMapFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
