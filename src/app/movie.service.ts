import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../environments/environment';
import { Movie, ResponseList } from './movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiUrl = environment.apiUrl;
  private apiKey = environment.apiKey;

  constructor(
    private http: HttpClient
  ) { }

  getMovies(): Observable<Movie[]> {
    const params = new HttpParams()
      .set('api_key', this.apiKey);

    return this.http.get(`${this.apiUrl}/movie/top_rated`, { params })
      .pipe(
        map((resp: ResponseList) => resp.results)
      );
  }

  getMovie(id: number): Observable<Movie> {
    const params = new HttpParams()
      .set('api_key', this.apiKey);

    return this.http.get<Movie>(`${this.apiUrl}/movie/${id}`, { params });
  }
}
