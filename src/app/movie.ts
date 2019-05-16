import { SafeResourceUrl } from '@angular/platform-browser';

export class Movie {
  id: number;
  title: string;
  overview: string;
  'release_date': string;
  'poster_path': string;
  'backdrop_path': string;
  videos: MovieVideos;
  credits: MovieCredits;
}

export class MovieVideos {
  results: Trailer[];
}

export class MovieCredits {
  cast: Actor[];
}

export class Actor {
  id: number;
  name: string;
  character: string;
}

export class Trailer {
  id: string;
  key: string;
  name: string;
  site: string;
  size: number;
  type: string;
  src: SafeResourceUrl;
}

export class ResponseList {
  page: number;
  'total_pages': number;
  'total_results': number;
  results: Movie[];
}
