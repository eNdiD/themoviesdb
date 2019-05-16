import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {NavigationEnd, Router} from '@angular/router';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../environments/environment';
import { Movie, ResponseList } from './movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiUrl: string = environment.apiUrl;
  private imgUrl: string = environment.imgUrl;
  private apiKey: string = environment.apiKey;
  currentUrl: string;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd ) {
        this.currentUrl = event.url;
      }
    });
  }

  getMovies(page: number = 1): Observable<ResponseList> {
    const params = new HttpParams()
      .set('page', '' +  page)
      .set('api_key', this.apiKey);

    return this.http.get<ResponseList>(`${this.apiUrl}/movie${this.currentUrl}`, { params });
  }

  getMovie(id: number): Observable<Movie> {
    const params = new HttpParams()
      .set('append_to_response', 'videos,credits')
      .set('api_key', this.apiKey);

    return this.http.get<Movie>(`${this.apiUrl}/movie/${id}`, { params })
      .pipe(
        map((movie: Movie) => ({
          ...movie,
          poster_path: this.getPosterSrc(movie),
          backdrop_path: this.getBackdropSrc(movie)
        }))
      );
  }

  getPosterSrc(movie: Movie): string {
    return `${this.imgUrl}/w500${movie.poster_path}`;
  }

  getBackdropSrc(movie: Movie): string {
    return `${this.imgUrl}/original${movie.backdrop_path}`;
  }
}
