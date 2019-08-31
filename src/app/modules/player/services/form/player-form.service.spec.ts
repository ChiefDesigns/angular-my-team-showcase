import { TestBed } from '@angular/core/testing';

import { PlayerFormService } from './player-form.service';

describe('PlayerFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlayerFormService = TestBed.get(PlayerFormService);
    expect(service).toBeTruthy();
  });
});
