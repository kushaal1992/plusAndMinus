import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmissionComponent } from './admission.component';
import { AdmissionFormComponent } from './admission-form/admission-form.component';

const routes: Routes = [
  {
    path: '',
    component: AdmissionComponent,
    children: [
      {
        path: 'form',
        component: AdmissionFormComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdmissionRoutingModule {}
