import { Component, OnInit } from '@angular/core';

import { MovieService } from '../movie.service';
import { SearchService } from '../search.service';
import { Movie } from '../movie';

@Component({
  selector: 'app-movies-search',
  templateUrl: './movies-search.component.html',
  styleUrls: ['./movies-search.component.less']
})
export class MoviesSearchComponent implements OnInit {
  movies: Movie[];
  page: number;
  total: number;
  fetching: boolean;
  query: string;

  constructor(
    private movieService: MovieService,
    private searchService: SearchService
  ) { }

  ngOnInit() {
    this.query = this.searchService.getSearchQuery();
    this.getMovies();

    this.searchService.getSearchEmitter().subscribe(query => {
      this.query = query;
      this.getMovies();
    });
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   console.log(changes);
  //
  //   this.getMovies();
  // }

  getMovies(page: number = 1): void {
    this.fetching = true;
    this.movieService.searchMovies(this.query, page)
      .subscribe(resp => {
        this.movies = resp.results;
        this.page = resp.page;
        this.total = resp.total_pages;
        this.fetching = false;
      });
  }
}
