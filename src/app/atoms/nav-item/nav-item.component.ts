import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss']
})
export class NavItemComponent implements OnInit {

  constructor() { }

  @Input("link") link;
  @Input("text") text;
  @Input() queryParams;
  @Input() last;
  @Input() first;
  @Input() even;
  @Input() odd;

  ngOnInit() {
  }

}
