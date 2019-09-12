import {Component, Input, OnInit} from '@angular/core';
import {animation, style} from "@angular/animations";

@Component({
  selector: 'app-projector',
  templateUrl: './projector.component.html',
  styleUrls: ['./projector.component.scss'],
})
export class ProjectorComponent implements OnInit {

  @Input() section;
  @Input() bg;
  @Input() alt;
  @Input() index;
  @Input() animation;
  @Input() sec;

  constructor() {
  }

  ngOnInit() {
  }

}

