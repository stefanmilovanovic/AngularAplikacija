import { TestBed } from '@angular/core/testing';

import { PostaResolverService } from './posta-resolver.service';

describe('PostaResolverService', () => {
  let service: PostaResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostaResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
