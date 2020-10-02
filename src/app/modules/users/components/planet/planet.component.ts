import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, pipe } from 'rxjs';
import { tap } from 'rxjs/operators';
import { DynamicFormComponent } from 'src/app/core/elements/components';
import { FieldConfig } from 'src/app/core/elements/field.interface';
import { appRoutes } from 'src/app/routes';
import { PersonaModel } from '../../models/persona.model';
import { PersonaService } from '../../services/persona.service';
import { regConfigPlaneta } from './planet.extras';
@Component({
  selector: 'wkr-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.scss']
})
export class PlanetComponent implements OnInit {
  @ViewChild(DynamicFormComponent) dynamicForm: DynamicFormComponent;
  regConfig: FieldConfig[] = regConfigPlaneta;
  personas$ = new BehaviorSubject<PersonaModel[]>([]);
  columnasTabla$ = new BehaviorSubject<any[]>(
    [
      { id: 'primerNombre', description: 'Primer nombre' },
      { id: 'segundoNombre', description: 'Segundo nombre' },
      { id: 'primerApellido', description: 'Primer apellido' },
      { id: 'segundoApellido', description: 'Segundo nombre' },
      { id: 'identificacion', description: 'Identificación' },
      { id: 'contador', description: 'Contador' },
      { id: 'button', description: 'Ver' },
    ]
  );
  get routeInfoUser() { return '/' + appRoutes.INFO_USER; };


  constructor(
    private personaService: PersonaService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getPlanetas()
  }

  submit($event: PersonaModel) {
    if ($event && $event.idPlaneta) {
      this.getPersonasByPlaneta($event.idPlaneta);
    }
  }

  getPersonasByPlaneta(idPlaneta: number) {
    this.personaService.getPersonasByIdPlaneta(idPlaneta)
      .pipe(tap(r => {
        this.personas$.next(r || []);
      }))
      .subscribe();
  }

  getPlanetas() {
    this.personaService.getPlanets()
      .pipe(
        tap(r => this.refrescarConfiguracionForm(r))
      ).subscribe();
  }


  private refrescarConfiguracionForm(r: { id: any; codigo: any; descripcion: any; }[]) {
    this.regConfig.forEach(item => {
      if (item.name === 'idPlaneta') {
        item.options.splice(0);
        r.forEach((re: any) => item.options.push(re));
      }
    });

  }


  onVer(persona: PersonaModel) {
    console.log('persona', persona);
    this.router.navigate([this.routeInfoUser + '/' + persona.id]);
  }
}
