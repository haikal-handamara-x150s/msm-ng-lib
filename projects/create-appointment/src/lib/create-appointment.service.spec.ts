import { TestBed } from '@angular/core/testing';

import { CreateAppointmentService } from './create-appointment.service';

describe('CreateAppointmentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateAppointmentService = TestBed.get(CreateAppointmentService);
    expect(service).toBeTruthy();
  });
});
