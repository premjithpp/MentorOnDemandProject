import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTrainersComponent } from './search-trainers.component';

describe('SearchTrainersComponent', () => {
  let component: SearchTrainersComponent;
  let fixture: ComponentFixture<SearchTrainersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchTrainersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchTrainersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
