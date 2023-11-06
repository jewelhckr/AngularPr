import { TestBed } from '@angular/core/testing';

import { NewStateService } from './new-state.service';

describe('NewStateService', () => {
  let service: NewStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
