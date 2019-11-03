import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeptcourseComponent } from './deptcourse.component';

describe('DeptcourseComponent', () => {
  let component: DeptcourseComponent;
  let fixture: ComponentFixture<DeptcourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeptcourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeptcourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
