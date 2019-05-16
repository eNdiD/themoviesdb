import { Component, OnInit, Input } from '@angular/core';

import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.less']
})
export class MovieCardComponent implements OnInit {
  @Input() movie: Movie;
  cardStyles: {[p: string]: string};

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.cardStyles = {
      'background-image': `url("${this.movieService.getPosterSrc(this.movie)}")`
    };
  }
}
