import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeptPOSComponent } from './dept-pos.component';

describe('DeptPOSComponent', () => {
  let component: DeptPOSComponent;
  let fixture: ComponentFixture<DeptPOSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeptPOSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeptPOSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
