import { TestBed } from '@angular/core/testing';

import { PostaService } from './posta.service';

describe('PostaService', () => {
  let service: PostaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
