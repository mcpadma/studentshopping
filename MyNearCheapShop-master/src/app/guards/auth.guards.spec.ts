import { TestBed, inject } from '@angular/core/testing';

import { Auth.GuardsService } from './auth.guards.service';

describe('Auth.GuardsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Auth.GuardsService]
    });
  });

  it('should be created', inject([Auth.GuardsService], (service: Auth.GuardsService) => {
    expect(service).toBeTruthy();
  }));
});
