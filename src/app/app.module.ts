import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateAppointmentModule } from '@msm-lib/create-appointment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CreateAppointmentModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
