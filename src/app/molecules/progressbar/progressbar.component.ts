import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.scss']
})
export class ProgressbarComponent implements OnInit {

  @Input() activeTest;
  @Input() testLength;

  constructor() { }

  ngOnInit() {
    console.log(this.activeTest, this.testLength)
  }

}
