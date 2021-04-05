import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable()
export class LoaderService {
  private _loading = true;
  private loading$ = new BehaviorSubject(this._loading);

  getLoading(): Observable<boolean> {
    return this.loading$.asObservable();
  }

  setLoading(state: boolean): void {
    this._loading = state;
    this.loading$.next(this._loading);
  }
}
