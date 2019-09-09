import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  message: string = 'Сообщение';



  constructor() { }

  @Input() section;
  @Input() navList;
  @Input() isNavOpen;

  ngOnInit() {
  }

  isShowMessage = () =>{
    alert(this.message)
  }



}
