import { TestBed, inject } from '@angular/core/testing';

import { ProjectServiceService } from './project-service.service';

describe('ProjectServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProjectServiceService]
    });
  });

  it('should ...', inject([ProjectServiceService], (service: ProjectServiceService) => {
    expect(service).toBeTruthy();
  }));
});
