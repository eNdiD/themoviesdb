import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

import { Movie, Actor, Trailer } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.less']
})
export class MovieDetailComponent implements OnInit {
  @Input() movie: Movie;
  bgSrc: string;
  cast: Actor[];
  trailer: Trailer;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.getMovie();
  }

  getMovie(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.movieService.getMovie(id)
      .subscribe(movie => {
        this.movie = movie;
        this.bgSrc = `url("${movie.backdrop_path}")`;
        this.cast = movie.credits.cast.slice(0, 10);
        this.trailer = movie.videos.results.find(video =>
          video.type.toLowerCase() === 'trailer' && video.site.toLowerCase() === 'youtube'
        );
        this.trailer.src = this.sanitizer.bypassSecurityTrustResourceUrl(`http://www.youtube.com/embed/${this.trailer.key}`);
      });
  }
}
