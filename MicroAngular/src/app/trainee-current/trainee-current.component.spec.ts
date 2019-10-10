import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraineeCurrentComponent } from './trainee-current.component';

describe('TraineeCurrentComponent', () => {
  let component: TraineeCurrentComponent;
  let fixture: ComponentFixture<TraineeCurrentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraineeCurrentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraineeCurrentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
