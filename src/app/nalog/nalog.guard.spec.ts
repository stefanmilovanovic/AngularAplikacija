import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { nalogGuard } from './nalog.guard';

describe('nalogGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => nalogGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
