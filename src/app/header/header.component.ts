import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';

import { SearchService } from '../search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  currentUrl: string;
  links: Array<object> = [
    { title: 'Popular', value: '/popular' },
    { title: 'Top Rated', value: '/top_rated' },
    { title: 'Now Playing', value: '/now_playing' },
    { title: 'Upcoming', value: '/upcoming' },
  ];
  search: string;

  constructor(
    private router: Router,
    private location: Location,
    private searchService: SearchService
  ) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd ) {
        this.currentUrl = event.url;
      }
    });
  }

  ngOnInit() {}

  handleSearch(): void {
    this.searchService.search(this.search);
  }
}
