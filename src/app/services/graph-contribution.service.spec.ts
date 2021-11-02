/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GraphContributionService } from './graph-contribution.service';

describe('Service: GraphContribution', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GraphContributionService]
    });
  });

  it('should ...', inject([GraphContributionService], (service: GraphContributionService) => {
    expect(service).toBeTruthy();
  }));
});
