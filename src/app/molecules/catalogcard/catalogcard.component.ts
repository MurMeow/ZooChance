import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-catalogcard',
  templateUrl: './catalogcard.component.html',
  styleUrls: ['./catalogcard.component.scss']
})
export class CatalogcardComponent implements OnInit {

  @Input() bg;
  @Input() heading;
  @Input() price;
  @Input() link;
  @Input() section;


  constructor() { }

  ngOnInit() {
  }

}
