import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTrainigreportComponent } from './admin-trainigreport.component';

describe('AdminTrainigreportComponent', () => {
  let component: AdminTrainigreportComponent;
  let fixture: ComponentFixture<AdminTrainigreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTrainigreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTrainigreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
