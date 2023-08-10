import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutMainComponent } from './layout-main.component';
import { ContentComponent } from '../content/content.component';

const routes: Routes = [
  {
    path: 'home',
    component: LayoutMainComponent,
    children: [{ path: '', component: ContentComponent }],
  },
  {
    path: 'admissions',
    component: LayoutMainComponent,
    loadChildren: () =>
      import('../../admission/admission.module').then((m) => m.AdmissionModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutMainRoutingModule {}
