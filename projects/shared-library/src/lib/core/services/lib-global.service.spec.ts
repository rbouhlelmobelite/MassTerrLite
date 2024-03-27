import { TestBed } from '@angular/core/testing';

import { LibGlobalService } from './lib-global.service';

describe('LibGlobalService', () => {
  let service: LibGlobalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibGlobalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
