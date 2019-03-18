import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Car} from './car';
import {catchError, tap} from 'rxjs/operators';
import {TreeNode} from 'primeng/api';
import {SprintBacklog} from './sprint-backlog';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class PrimeNgDataService {

  constructor(private http: HttpClient) {
  }

  /** GET cars from the table */
  getCarsSmall(): Observable<Car[]> {
    return this.http.get<Car[]>('assets/json/cars-small.json', httpOptions)
      .pipe(
        tap(() => this.log(`fetched cars`)),
        catchError(this.handleError('getCarsSmall', []))
      );
  }

  /** GET cars from the table */
  getSprintBacklog(): Observable<SprintBacklog[]> {
    return this.http.get<SprintBacklog[]>('assets/json/sprint-backlog.json', httpOptions)
      .pipe(
        tap(() => this.log(`fetched sprint backlog`)),
        catchError(this.handleError('getSprintBacklog', []))
      );
  }

  /** GET cars from the table */
  getFeatures(): Observable<TreeNode[]> {
    return this.http.get<TreeNode[]>('assets/json/features.json', httpOptions)
      .pipe(
        tap(() => this.log(`fetched features`)),
        catchError(this.handleError('getFeatures', []))
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log('PrimeNgDataService: ' + message);
  }
}
