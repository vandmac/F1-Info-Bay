import { TestBed } from '@angular/core/testing';

import { ConstructorsF1Service } from './constructorsF1.service';

describe('ConstructorsF1Service', () => {
  let service: ConstructorsF1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConstructorsF1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
