import { TestBed } from '@angular/core/testing';

import { LinktospringService } from './linktospring.service';

describe('LinktospringService', () => {
  let service: LinktospringService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LinktospringService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
