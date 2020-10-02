import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  InputComponent,
  ButtonComponent,
  SelectComponent,
  DateComponent,
  RadiobuttonComponent,
  CheckboxComponent,
  DynamicFieldDirective,
  DynamicFormComponent
} from './../elements/components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './../../shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    /** =========================== elements ====================== */
    InputComponent,
    ButtonComponent,
    SelectComponent,
    DateComponent,
    RadiobuttonComponent,
    CheckboxComponent,
    DynamicFieldDirective,
    DynamicFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    /** ========================= otras dependencias ============== */
    FlexLayoutModule,
    MaterialModule,
  ],
  exports: [
    /** =========================== elements ====================== */
    InputComponent,
    ButtonComponent,
    SelectComponent,
    DateComponent,
    RadiobuttonComponent,
    CheckboxComponent,
    DynamicFieldDirective,
    DynamicFormComponent,
  ]
})
export class DynamicFormsModule { }
