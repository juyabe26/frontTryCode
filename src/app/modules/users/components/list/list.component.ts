import { Component, OnInit } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { UserState } from '../../services/users.state';



@Component({
  selector: 'wkr-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public columns$: Subject<{ id: string, description: string }[]> = new BehaviorSubject([]);
  public data$: Subject<any[]> = new BehaviorSubject([]);

  constructor(
    public usersState: UserState,
  ) { }

  ngOnInit(): void {
    this.usersState.getUsers();

    // this.columns$.next(
    //   [
    //     { id: 'id', description: 'Identificación' },
    //     { id: 'nombre', description: 'Nombre' },
    //   ]
    // );
    // this.data$.next(
    //   [
    //     {
    //       id: 1,
    //       nombre: 'Yamid'
    //     }
    //   ]
    // )
  }

}
