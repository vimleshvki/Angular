import { TestBed } from '@angular/core/testing';

import { OMSdataService } from './omsdata.service';

describe('OMSdataService', () => {
  let service: OMSdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OMSdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
