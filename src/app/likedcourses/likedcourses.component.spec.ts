import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LikedcoursesComponent } from './likedcourses.component';

describe('LikedcoursesComponent', () => {
  let component: LikedcoursesComponent;
  let fixture: ComponentFixture<LikedcoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LikedcoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LikedcoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
