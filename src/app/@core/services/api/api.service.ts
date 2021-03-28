import {Injectable} from '@angular/core';
import {AppConfig} from '../../config/app.config';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable()
export class ApiService {
  protected apiServer = AppConfig.settings.apiServer.base + AppConfig.settings.apiServer.meta;

  constructor(private http: HttpClient) {
  }

  private static handleError(err): Observable<any> {
    console.log('Error occur while tried to make http request', err);
    return of({status: false, message: err.message});
  }

  makeGetApiCall<T>(endPoint: string, queryParams?: HttpParams): Observable<T> {
    return this.http
      .get<T>(`${this.apiServer}/${endPoint}`, {params: queryParams})
      .pipe(catchError((err => ApiService.handleError(err))));
  }
}
