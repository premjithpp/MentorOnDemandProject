import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerCompleatedComponent } from './trainer-compleated.component';

describe('TrainerCompleatedComponent', () => {
  let component: TrainerCompleatedComponent;
  let fixture: ComponentFixture<TrainerCompleatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainerCompleatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainerCompleatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
