import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityMapFilterCategoryComponent } from './university-map-filter-category.component';

describe('UniversityMapFilterCategoryComponent', () => {
  let component: UniversityMapFilterCategoryComponent;
  let fixture: ComponentFixture<UniversityMapFilterCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniversityMapFilterCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversityMapFilterCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
