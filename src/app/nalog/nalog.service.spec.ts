import { TestBed } from '@angular/core/testing';

import { NalogService } from './nalog.service';

describe('NalogService', () => {
  let service: NalogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NalogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
