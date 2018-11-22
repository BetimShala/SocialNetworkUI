import { TestBed } from '@angular/core/testing';

import { FriendShipService } from './friendship.service';

describe('FriendShipService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FriendShipService = TestBed.get(FriendShipService);
    expect(service).toBeTruthy();
  });
});
