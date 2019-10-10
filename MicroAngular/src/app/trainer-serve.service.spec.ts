import { TestBed } from '@angular/core/testing';

import { TrainerServeService } from './trainer-serve.service';

describe('TrainerServeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrainerServeService = TestBed.get(TrainerServeService);
    expect(service).toBeTruthy();
  });
});
