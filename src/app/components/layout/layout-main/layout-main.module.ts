import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from '../content/content.component';
import { HeaderComponent } from '../header/header.component';
import { LayoutMainComponent } from './layout-main.component';



@NgModule({
  declarations: [HeaderComponent, ContentComponent, LayoutMainComponent],
  imports: [
    CommonModule
  ],
  exports: [LayoutMainComponent]
})
export class LayoutMainModule { }
