import { Component, OnInit } from '@angular/core';

import { MovieService } from '../movie.service';
import { Movie } from '../movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.less']
})
export class MoviesComponent implements OnInit {
  movies: Movie[];
  page: number;
  total: number;
  fetching: boolean;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.getMovies();
  }

  getMovies(page: number = 1): void {
    this.fetching = true;
    this.movieService.getMovies(page)
      .subscribe(resp => {
        this.movies = resp.results;
        this.page = resp.page;
        this.total = resp.total_pages;
        this.fetching = false;
      });
  }
}
