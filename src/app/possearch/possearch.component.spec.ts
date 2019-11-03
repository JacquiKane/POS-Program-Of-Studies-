import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { POSSearchComponent } from './possearch.component';

describe('POSSearchComponent', () => {
  let component: POSSearchComponent;
  let fixture: ComponentFixture<POSSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ POSSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(POSSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
