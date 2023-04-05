import { NgModule } from '@angular/core';
import { CreateAppointmentComponent } from './create-appointment.component';
import { CreateAppointmentService } from './create-appointment.service';

@NgModule({
  declarations: [CreateAppointmentComponent],
  imports: [
  ],
  providers: [
    CreateAppointmentService,
  ],
  exports: [
    CreateAppointmentComponent,
  ],
})
export class CreateAppointmentModule { }
