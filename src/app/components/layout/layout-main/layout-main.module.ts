import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from '../content/content.component';
import { HeaderComponent } from '../header/header.component';
import { LayoutMainComponent } from './layout-main.component';
import { AdmissionRoutingModule } from '../../admission/admission-routing.module';



@NgModule({
  declarations: [HeaderComponent, ContentComponent, LayoutMainComponent],
  imports: [
    CommonModule,
    AdmissionRoutingModule
  ],
  exports: [LayoutMainComponent]
})
export class LayoutMainModule { }
