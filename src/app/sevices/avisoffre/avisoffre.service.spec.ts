import { TestBed } from '@angular/core/testing';

import { AvisoffreService } from './avisoffre.service';

describe('AvisoffreService', () => {
  let service: AvisoffreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AvisoffreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
