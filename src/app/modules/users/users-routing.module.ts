import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfoComponent } from './components/info/info.component';
import { FormComponent } from './components/form/form.component';
import { PlanetComponent } from './components/planet/planet.component';
import { InfoPersonaComponent } from './components/info-persona/info-persona.component';

const routes: Routes = [
  { path: 'info', component: InfoComponent, },
  { path: 'form', component: FormComponent, },
  { path: 'planet', component: PlanetComponent, },
  { path: 'info-persona/:uid', component: InfoPersonaComponent, },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
