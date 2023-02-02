import { TestBed } from '@angular/core/testing';

import { NotSignedGuard } from './not-signed.guard';

describe('NotSignedGuard', () => {
  let guard: NotSignedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NotSignedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
