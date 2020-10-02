import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { firestore } from 'firebase';

export interface UserModel {
    nombreusuario: string;
    email: string;
    genero: string;
    fechanacimiento: firestore.Timestamp;
    pais: string;
    terminoscondiciones: boolean;
}

export enum collectionEnum {
    USERS = 'wuser',
}

@Injectable({
    providedIn: 'root'
})
export class UserService<T> {
    constructor(
        public afs: AngularFirestore,   // Inject Firestore service
    ) { }

    /**
     * Add user in wuser collection
     * @param user
     */
    setUser(user: T) {
        const response = new Subject();
        // AngularFirestoreDocument<any>
        const id = this.afs.createId();
        user['id'] = id;
        const userRef: AngularFirestoreCollection<T> = this.afs.collection(collectionEnum.USERS);
        userRef.doc(id).set(user).then(e => response.next(true)
        ).catch(e => response.error(e));
        return response.asObservable();
    }

    getUsers(): Observable<T[]> {
        return this.afs.collection<T>(collectionEnum.USERS).valueChanges();
    }


}
