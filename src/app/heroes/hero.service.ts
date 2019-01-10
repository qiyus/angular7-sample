import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable, of} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';

import {Hero} from './hero';


@Injectable({providedIn: 'root'})
export class HeroService {

  private heroesUrl = 'assets/json/heroes.json';

  constructor(
    private http: HttpClient) {
  }

  /** GET heroes from the server */
  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
      .pipe(
        tap(heroes => this.log(`fetched heroes`)),
        catchError(this.handleError('getHeroes', []))
      );
  }

  /** GET hero by id. Will 404 if id not found */
  getHero(id: number): Observable<Hero> {
    return this.http.get<Hero[]>(this.heroesUrl)
      .pipe(
        map(heroes => {
          let selectedHero = null;
          heroes.forEach(hero => {
            if (hero.id === id) {
              selectedHero = hero;
              return;
            }
          });
          return selectedHero;
        }),
        tap(_ => this.log(`fetched hero id=${id}`)),
        catchError(this.handleError<Hero[]>(`getHero id=${id}`))
      );
  }

  /* GET heroes whose name contains search term */
  searchHeroes(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Hero[]>(`${this.heroesUrl}`).pipe(
      map(heroes => heroes.filter(hero => hero.name.indexOf(term) >= 0)),
      tap(_ => this.log(`found heroes matching "${term}"`)),
      catchError(this.handleError<Hero[]>('searchHeroes', []))
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
    console.log('HeroService: ' + message);
  }
}
