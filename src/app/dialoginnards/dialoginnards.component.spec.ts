import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialoginnardsComponent } from './dialoginnards.component';

describe('DialoginnardsComponent', () => {
  let component: DialoginnardsComponent;
  let fixture: ComponentFixture<DialoginnardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialoginnardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialoginnardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
