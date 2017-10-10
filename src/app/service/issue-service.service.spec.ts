import { TestBed, inject } from '@angular/core/testing';

import { IssueServiceService } from './issue-service.service';

describe('IssueServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IssueServiceService]
    });
  });

  it('should ...', inject([IssueServiceService], (service: IssueServiceService) => {
    expect(service).toBeTruthy();
  }));
});
