import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { POSWindowComponent } from './poswindow.component';

describe('POSWindowComponent', () => {
  let component: POSWindowComponent;
  let fixture: ComponentFixture<POSWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ POSWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(POSWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
