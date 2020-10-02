import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Injectable, APP_BOOTSTRAP_LISTENER } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../environments/environment';
import { PersonaModel } from './../models/persona.model';

@Injectable({
    providedIn: 'root'
})
export class PersonaService {
    public url = environment.url;
    constructor(
        private http: HttpClient,
    ) { }


    getPersonaByUid(uid: number) {
        return this.http.get<PersonaModel>(`${this.url}personas?uid=${uid}`);
    }

    getPersonaById(uid: number) {
        return this.http.get<PersonaModel>(`${this.url}personas?id=${uid}`);
    }

    getPersonasByIdPlaneta(idPlaneta: number) {
        return this.http.get<PersonaModel[]>(`${this.url}personas/personas-planeta?idPlaneta=${idPlaneta}`);
    }

    savePersonas(persona: PersonaModel) {
        let request: Observable<PersonaModel>;
        if (persona.id) {
            request = this.http.post<PersonaModel>(`${this.url}personas`, persona);
        } else {
            request = this.http.put<PersonaModel>(`${this.url}personas`, persona);
        }
        return request;
    }

    getPlanets() {
        return this.http.get<{ id, codigo, descripcion }[]>(`${this.url}personas/planetas`);
    }


}

