import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPaymentreportComponent } from './admin-paymentreport.component';

describe('AdminPaymentreportComponent', () => {
  let component: AdminPaymentreportComponent;
  let fixture: ComponentFixture<AdminPaymentreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPaymentreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPaymentreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
