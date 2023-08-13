import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmissionRoutingModule } from './admission-routing.module';
import { AdmissionComponent } from './admission.component';
import { AdmissionFormComponent } from './admission-form/admission-form.component';


@NgModule({
  declarations: [
    AdmissionComponent,
    AdmissionFormComponent
  ],
  imports: [
    CommonModule,
    AdmissionRoutingModule
  ]
})
export class AdmissionModule { }
