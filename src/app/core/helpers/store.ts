import { Observable, BehaviorSubject } from 'rxjs';

export class Store<T> {
    state$: Observable<T>;
    private stateSub$: BehaviorSubject<T>;

    protected constructor(initialState: T) {
        this.stateSub$ = new BehaviorSubject(initialState);
        this.state$ = this.stateSub$.asObservable();
    }

    get state(): T {
        return this.stateSub$.getValue();
    }

    setState(nextState: T): void {
        this.stateSub$.next(nextState);
    }
}
