import { TestBed } from '@angular/core/testing';

import { OpenApiIntegrationService } from './open-api-integration.service';

describe('OpenApiIntegrationService', () => {
  let service: OpenApiIntegrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpenApiIntegrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
