import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.less']
})
export class PagerComponent implements OnInit {
  @Input() page: number;
  @Input() total: number;
  @Input() fetching: boolean;
  @Output() changePage = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  handleClick(page: number): void {
    this.changePage.next(page);
  }
}
