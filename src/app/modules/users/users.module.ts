/** ============================ modulos =========================== */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DynamicFormsModule } from '../../core/elements/dynamic-forms.module';
import { MaterialModule } from '../../shared/material.module';
import { SharedModule } from '../../shared/shared.module';
import { UsersRoutingModule } from './users-routing.module';

/** ============================ componentes =========================== */
import { FormComponent } from './components/form/form.component';
import { InfoComponent } from './components/info/info.component';
import { ListComponent } from './components/list/list.component';
import { PlanetComponent } from './components/planet/planet.component';
import { InfoPersonaComponent } from './components/info-persona/info-persona.component';


@NgModule({
  declarations: [
    InfoComponent,
    FormComponent,
    ListComponent,
    PlanetComponent,
    InfoPersonaComponent,

  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule,
    MaterialModule,
    FlexLayoutModule,
    DynamicFormsModule,
  ]
})
export class UsersModule { }
