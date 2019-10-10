import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerLandingComponent } from './trainer-landing.component';

describe('TrainerLandingComponent', () => {
  let component: TrainerLandingComponent;
  let fixture: ComponentFixture<TrainerLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainerLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainerLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
