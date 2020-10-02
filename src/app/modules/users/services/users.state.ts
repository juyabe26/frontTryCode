import { Injectable } from '@angular/core';
import { distinctUntilChanged, map, tap } from 'rxjs/operators';
import { Store } from '../../../core/helpers/store';
import { UserModel, UserService } from './users.service';

export interface UserEstadoModel {
    dataUser: any[];
    headersData: { id: string, description: string }[];
}
const estadoDefault: UserEstadoModel = {
    dataUser: null,
    headersData: null,
};
@Injectable({
    providedIn: 'root'
})
export class UserState extends Store<UserEstadoModel> {

    readonly dataUser$ = this.state$.pipe(map(el => el.dataUser), distinctUntilChanged());
    readonly headersData$ = this.state$.pipe(map(el => el.headersData), distinctUntilChanged());

    constructor(
        private userService: UserService<UserModel>,
    ) { super(estadoDefault); }

    /** ======================= data user ================== */
    set dataUser(dataUser: any) { this.setState({ ...this.state, dataUser }); }
    get dataUser(): any { return this.state.dataUser; }

    addUser(user) { return this.userService.setUser(user); }

    getUsers() {
        this.userService.getUsers()
            .pipe(this.assignHeaderDataFromData()).subscribe(data => this.dataUser = data);
    }


    /** ======================= data header table ================== */

    set headersData(headersData: any) { this.setState({ ...this.state, headersData }); }
    get headersData(): any { return this.state.headersData; }

    private assignHeaderDataFromData() {
        return tap((el: UserModel[]) => {
            if (el) {
                const headers = {};
                el.forEach(e => {
                    const field = Object.keys(e);
                    field.forEach(e => headers[e] = { id: e, description: e });
                });
                const final = [];
                Object.keys(headers).forEach(f => final.push({ id: f, description: f }));
                this.headersData = final;
            }
        });
    }

}