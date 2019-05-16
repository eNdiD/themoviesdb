import { Component, OnInit, Input } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  @Input() title: string;
  currentUrl: string;
  links: Array<object> = [
    { title: 'Popular', value: '/popular' },
    { title: 'Top Rated', value: '/top_rated' },
    { title: 'Now Playing', value: '/now_playing' },
    { title: 'Upcoming', value: '/upcoming' },
  ];

  constructor(private router: Router) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd ) {
        this.currentUrl = event.url;
      }
    });
  }

  ngOnInit() {}
}
