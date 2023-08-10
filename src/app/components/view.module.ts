import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layout/header/header.component';
import { ContentComponent } from './layout/content/content.component';
import { LayoutMainComponent } from './layout/layout-main/layout-main.component';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ViewModule {}
