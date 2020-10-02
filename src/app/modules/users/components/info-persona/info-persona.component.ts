import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { PersonaModel } from '../../models/persona.model';
import { PersonaService } from '../../services/persona.service';

@Component({
  selector: 'wkr-info-persona',
  templateUrl: './info-persona.component.html',
  styleUrls: ['./info-persona.component.scss']
})
export class InfoPersonaComponent implements OnInit {

  persona$ = new Subject<PersonaModel>()
  constructor(
    private routerAct: ActivatedRoute,
    private personaService: PersonaService
  ) { }

  ngOnInit(): void {
    this.routerAct.params.subscribe(param => {
      if (param.uid) {
        this.personaService.getPersonaById(param.uid).subscribe((persona: PersonaModel) => {
          console.log('..............');
          
          console.log(persona)
          if (persona) {
            this.persona$.next(persona)
          }
        })
      }

    })
  }

}
