import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursedialogComponent } from './coursedialog.component';

describe('CoursedialogComponent', () => {
  let component: CoursedialogComponent;
  let fixture: ComponentFixture<CoursedialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursedialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursedialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
