import { TestBed } from '@angular/core/testing';

import { SparepartsService } from './spareparts.service';

describe('SparepartsService', () => {
  let service: SparepartsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SparepartsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
