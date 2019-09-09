import { Component, OnInit } from '@angular/core';

interface INavItem{
  link: string,
  text: string
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  navList:INavItem[] = [
    {
      link: "./partners",
      text: "Партнеры"
    },
    {
      link: "./contacts",
      text: "Контакты"
    },
    // {
    //   link: "./forum",
    //   text: "Форум"
    // },
    // {
    //   link: "./terms",
    //   text: "Условия использования"
    // }
  ];

  constructor() { }

  ngOnInit() {
  }

}
