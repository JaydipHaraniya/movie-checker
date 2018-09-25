import { TestBed, inject } from '@angular/core/testing';

import { SearchBoxService } from './search-box.service';

describe('SearchBoxService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchBoxService]
    });
  });

  it('should be created', inject([SearchBoxService], (service: SearchBoxService) => {
    expect(service).toBeTruthy();
  }));
});
