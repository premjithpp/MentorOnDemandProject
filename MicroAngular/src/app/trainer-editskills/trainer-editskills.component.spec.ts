import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerEditskillsComponent } from './trainer-editskills.component';

describe('TrainerEditskillsComponent', () => {
  let component: TrainerEditskillsComponent;
  let fixture: ComponentFixture<TrainerEditskillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainerEditskillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainerEditskillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
