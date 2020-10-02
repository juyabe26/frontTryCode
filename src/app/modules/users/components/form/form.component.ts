import { Component, OnInit, ViewChild } from '@angular/core';
import { DynamicFormComponent } from 'src/app/core/elements/components';
import { FieldConfig } from 'src/app/core/elements/field.interface';
import { PersonaService } from './../../services/persona.service';
import { regConfig } from './form.extras';
import { AuthService } from 'src/app/shared/services/auth.service';
import { PersonaModel } from '../../models/persona.model';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'wkr-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @ViewChild(DynamicFormComponent) dynamicForm: DynamicFormComponent;
  regConfig: FieldConfig[] = regConfig;

  constructor(
    public personaService: PersonaService,
    public authService: AuthService,
  ) { }

  ngOnInit(): void {
    // this.getPersona();
    this.getPlanetas();
  }

  // private getPersona() {
  //   this.personaService.getPersona(this.authService?.userData?.uid).subscribe(r => {
  //     if(r){
  //       this.dynamicForm.form.patchValue(r);
  //     }
  //   });
  // }

  submit($event: PersonaModel) {

    const body: PersonaModel = {
      ...$event,
      uid: $event.uid || this.authService?.userData?.uid,
      direccion: $event.direccion,
      idGenero: $event.idGenero,
      identificacion: +$event.identificacion,
      telefono: +$event.telefono,
      fechaNacimiento: $event.fechaNacimiento,
      primerApellido: $event.primerApellido,
      primerNombre: $event.primerNombre,
      segundoApellido: $event.segundoApellido,
      segundoNombre: $event.segundoNombre,
    }
    this.personaService.savePersonas(body)
      .subscribe(response => {
        alert('Persona almacenada exitosamente');
        // this.getPersona();
        this.dynamicForm.form.reset();
      }, err => console.log(err));
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
}
