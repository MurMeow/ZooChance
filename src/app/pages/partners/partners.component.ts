import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent implements OnInit {

  section = "partners";
  partnersList = [
    {
      link: "https://zooshans.by/",
      text: "ЗООшанс"
    },
    {
      link: "https://pitomec.guru/",
      text: "Питомец Гуру"
    },
    {
      link: "https://vk.com/feed?q=%23питомцы_MF&section=search",
      text: "Mark Formelle"
    },
    {
      link: "https://zooshans.by/",
      text: "ЗООшанс"
    },
    {
      link: "https://pitomec.guru/",
      text: "Питомец Гуру"
    },
    {
      link: "https://vk.com/feed?q=%23питомцы_MF&section=search",
      text: "Mark Formelle"
    },
    {
      link: "https://zooshans.by/",
      text: "ЗООшанс"
    },
    {
      link: "https://pitomec.guru/",
      text: "Питомец Гуру"
    },
    {
      link: "https://vk.com/feed?q=%23питомцы_MF&section=search",
      text: "Mark Formelle"
    }
  ]

  constructor() { }

  ngOnInit() {

  }

}
