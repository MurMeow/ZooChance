import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-arrow',
  templateUrl: './arrow.component.html',
  styleUrls: ['./arrow.component.scss']
})
export class ArrowComponent implements OnInit {

  @Input() modificator;
  @Input() section;
  @Input() clickHandler;

  constructor() { }

  ngOnInit() {
  }

}
