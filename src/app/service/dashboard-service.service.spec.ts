import { TestBed, inject } from '@angular/core/testing';

import { DashboardServiceService } from './dashboard-service.service';

describe('DashboardServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DashboardServiceService]
    });
  });

  it('should ...', inject([DashboardServiceService], (service: DashboardServiceService) => {
    expect(service).toBeTruthy();
  }));
});
