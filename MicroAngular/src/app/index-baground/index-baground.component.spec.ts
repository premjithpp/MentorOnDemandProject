import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexBagroundComponent } from './index-baground.component';

describe('IndexBagroundComponent', () => {
  let component: IndexBagroundComponent;
  let fixture: ComponentFixture<IndexBagroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexBagroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexBagroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
