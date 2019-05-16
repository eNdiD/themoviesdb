export class Movie {
  id: number;
  title: string;
  'release_date': string;
}

export class ResponseList {
  page: number;
  'total_pages': number;
  'total_results': number;
  results: Movie[];
}
