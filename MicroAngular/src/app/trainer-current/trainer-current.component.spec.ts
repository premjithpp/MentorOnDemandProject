import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerCurrentComponent } from './trainer-current.component';

describe('TrainerCurrentComponent', () => {
  let component: TrainerCurrentComponent;
  let fixture: ComponentFixture<TrainerCurrentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainerCurrentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainerCurrentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
