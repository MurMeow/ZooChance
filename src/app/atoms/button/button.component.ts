import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  constructor() { }

  @Input() text;
  @Input() section;
  @Input() clickHandler;
  @Input() props;

  ngOnInit() {

  }

  clickHandlerWithProps = ()=>{
    this.clickHandler(this.props)
  }

}
