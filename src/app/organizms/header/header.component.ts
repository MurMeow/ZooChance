import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Event, NavigationStart } from '@angular/router';

interface INavItem{
  link: string,
  text: string,
  queryParams?: object;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isOpen:boolean = false;
  buttonText:string = "open";
  isDark = false;

  navList:INavItem[]= [
    {
      link: "./home",
      text: "Главная"
    },
    {
      link: "./catalog",
      text: "Наши питомцы",
    },
    {
      link: "./blog",
      text: "Новая жизнь"
    },
    {
      link: "./partners",
      text: "Партнеры"
    },
    {
      link: "./contacts",
      text: "Контакты"
    },
    // {
    //   link: "./products",
    //   text: "productsMajor",
    //   queryParams: {price: 150}
    // },
    // {
    //   link: "./products",
    //   text: "products",
    // },
    {
      link: "./test",
      text: "Тест",
    },
  ];

  
  constructor(private route: ActivatedRoute,
    private router: Router) { 
      console.log(route);
      this.route.params.subscribe(params => console.log(params));
      this.router.events.subscribe((event: Event)=>{

        if (event instanceof NavigationStart){

          if (event.url.indexOf('product') >= 0 ){
            this.isDark = true;
            return
          }
          this.isDark = false;
        }
      })
    }
    

  ngOnInit() {
  }

  isOpenHandler = () => {
    console.log(this.isOpen)
    this.isOpen = !this.isOpen;
    this.buttonText = this.isOpen ? "close" : "open";
  }

}
