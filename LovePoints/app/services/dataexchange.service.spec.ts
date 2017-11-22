import { TestBed, inject } from '@angular/core/testing';

import { DataexchangeService } from './dataexchange.service';

describe('DataexchangeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataexchangeService]
    });
  });

  it('should ...', inject([DataexchangeService], (service: DataexchangeService) => {
    expect(service).toBeTruthy();
  }));
});
