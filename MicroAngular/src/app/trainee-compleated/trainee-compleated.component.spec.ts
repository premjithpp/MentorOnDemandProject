import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraineeCompleatedComponent } from './trainee-compleated.component';

describe('TraineeCompleatedComponent', () => {
  let component: TraineeCompleatedComponent;
  let fixture: ComponentFixture<TraineeCompleatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraineeCompleatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraineeCompleatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
