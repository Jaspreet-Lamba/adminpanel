import { TestBed, inject } from '@angular/core/testing';

import { KnowledgebasedataService } from './knowledgebasedata.service';

describe('KnowledgebasedataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KnowledgebasedataService]
    });
  });

  it('should ...', inject([KnowledgebasedataService], (service: KnowledgebasedataService) => {
    expect(service).toBeTruthy();
  }));
});
