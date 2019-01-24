import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityDetailModalComponent } from './university-detail-modal.component';

describe('UniversityDetailModalComponent', () => {
  let component: UniversityDetailModalComponent;
  let fixture: ComponentFixture<UniversityDetailModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniversityDetailModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversityDetailModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
