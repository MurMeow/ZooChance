import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-temporary',
  templateUrl: './temporary.component.html',
  styleUrls: ['./temporary.component.scss']
})
export class TemporaryComponent implements OnInit {

  public routeData = '';
  public message = '';

  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe(data => this.fetchRouteData(data))
   }

  fetchRouteData = (data) =>{
    this.routeData = data.date;
    this.message = data.message
  }

  ngOnInit() {
  }

}
