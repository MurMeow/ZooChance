import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-projector',
  templateUrl: './projector.component.html',
  styleUrls: ['./projector.component.scss']
})
export class ProjectorComponent implements OnInit {

  @Input() section;
  @Input() bg;
  @Input() alt;
  @Input() index;

  constructor() { }

  ngOnInit() {
  }

}
