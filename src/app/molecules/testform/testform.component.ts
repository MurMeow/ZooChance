
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-testform',
  templateUrl: './testform.component.html',
  styleUrls: ['./testform.component.scss']
})
export class TestformComponent implements OnInit {

  @Input() test;
  @Input() checkHandler;

  constructor() { }

  ngOnInit() {
  }

}
