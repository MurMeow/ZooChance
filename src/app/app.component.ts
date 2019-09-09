import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public title;

  constructor(){
    setTimeout(()=>{
      this.title = {
        text:'lord-ring'
      }
    },2000)
  }
}
