import { TestBed } from '@angular/core/testing';

import { ErgastService } from './ergast.service';

describe('ErgastService', () => {
  let service: ErgastService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ErgastService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
