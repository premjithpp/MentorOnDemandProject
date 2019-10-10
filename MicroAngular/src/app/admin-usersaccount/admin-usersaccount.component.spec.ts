import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUsersaccountComponent } from './admin-usersaccount.component';

describe('AdminUsersaccountComponent', () => {
  let component: AdminUsersaccountComponent;
  let fixture: ComponentFixture<AdminUsersaccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminUsersaccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUsersaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
