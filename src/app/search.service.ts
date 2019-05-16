import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private searchEmitter = new EventEmitter<string>();
  private query: string

  constructor(
    private router: Router
  ) { }

   search(query: string): void {
     if (!query) {
       return;
     }

     this.query = query;
     this.searchEmitter.next(query);
     this.router.navigateByUrl(`/search`);
  }

  getSearchQuery(): string {
    return this.query;
  }

  getSearchEmitter(): EventEmitter<string> {
    return this.searchEmitter;
  }
}
