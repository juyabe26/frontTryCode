import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { TableDynamicComponent } from './ui/table-dynamic/table-dynamic.component';
import { MaterialModule } from './material.module';


@NgModule({
  declarations: [
    TableDynamicComponent,

  ],
  imports: [
    CommonModule,
    SharedRoutingModule,

    /** ======================= material ====================== */
    MaterialModule,
  ],
  exports: [
    TableDynamicComponent,
  ]
})
export class SharedModule { }
