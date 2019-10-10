import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraineeLandingComponent } from './trainee-landing.component';

describe('TraineeLandingComponent', () => {
  let component: TraineeLandingComponent;
  let fixture: ComponentFixture<TraineeLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraineeLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraineeLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
