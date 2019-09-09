import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  @Input() slides;
  @Input() section;


  constructor() { }

  prev = 0;
  active = 1;
  next = 2;

  ngOnInit() {
  }

  arrowLeftHandler = () => {

    this.prev = this.prev === 0 ? this.slides.length-1 : this.prev - 1;
    this.active = this.active === 0 ? this.slides.length-1 : this.active - 1;
    this.next = this.next === 0 ? this.slides.length-1 : this.next - 1;
    console.log(this.prev, this.active, this.next)
  }

  arrowRightHandler = () => {
    console.log(this.prev, this.active, this.next)
    this.prev = this.prev === this.slides.length-1 ? 0 : this.prev + 1;
    this.active = this.active === this.slides.length-1 ? 0 : this.active + 1;
    this.next = this.next === this.slides.length-1 ? 0 : this.next + 1;
  }

}
