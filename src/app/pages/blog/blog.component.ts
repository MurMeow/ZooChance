import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

    rundomNumber = (min,max)=>{
        let n = (Math.floor(min + Math.random() * (max + 1 - min)))+"";
        console.log(n);
        return n+"s";
    }

  groupPhoto = [
    {
      bg: '../../../assets/images/cats/_xiNrpLAB6c.jpg',
      heading: 'Нюша',
      ns: this.rundomNumber(1,10),
      link: 'https://vk.com/feed?q=%23%D0%BF%D0%B8%D1%82%D0%BE%D0%BC%D1%86%D1%8B_MF&section=search&w=wall-43091703_214842'
    },
    {
      bg: '../../../assets/images/cats/6YIW2PQT2Fk.jpg',
      heading: 'Азура',
      ns: this.rundomNumber(5,20),
      link: 'https://vk.com/feed?q=%23%D0%BF%D0%B8%D1%82%D0%BE%D0%BC%D1%86%D1%8B_MF&section=search&w=wall-43091703_73421'
    },
    {
      bg: '../../../assets/images/cats/7yLHrbGDDpE.jpg',
      heading: 'Чип&Ляля',
      ns: this.rundomNumber(1,10),
      link: 'https://vk.com/feed?q=%23%D0%BF%D0%B8%D1%82%D0%BE%D0%BC%D1%86%D1%8B_MF&section=search&w=wall-43091703_119813'
    },
    {
      bg: '../../../assets/images/cats/9R1v30M7P0k.jpg',
      heading: 'Зеленкин',
      ns: this.rundomNumber(5,20),
      link: 'https://vk.com/feed?q=%23%D0%BF%D0%B8%D1%82%D0%BE%D0%BC%D1%86%D1%8B_MF&section=search&w=wall-43091703_136356'
    },
    {
      bg: '../../../assets/images/cats/aU6NQSJdaOo.jpg',
      heading: 'Томми',
      ns: this.rundomNumber(1,10),
      link: 'https://vk.com/feed?q=%23%D0%BF%D0%B8%D1%82%D0%BE%D0%BC%D1%86%D1%8B_MF&section=search&w=wall-43091703_73787'
    },
    {
      bg: '../../../assets/images/cats/-BK_YTu6iq4.jpg',
      heading: 'Мира',
      ns: this.rundomNumber(5,20),
      link: 'https://vk.com/feed?q=%23%D0%BF%D0%B8%D1%82%D0%BE%D0%BC%D1%86%D1%8B_MF&section=search&w=wall-43091703_209597'
    },
    {
      bg: '../../../assets/images/cats/_xiNrpLAB6c.jpg',
      heading: 'Нюша',
      ns: this.rundomNumber(1,10),
      link: 'https://vk.com/feed?q=%23%D0%BF%D0%B8%D1%82%D0%BE%D0%BC%D1%86%D1%8B_MF&section=search&w=wall-43091703_214842'
    },
    {
      bg: '../../../assets/images/cats/6YIW2PQT2Fk.jpg',
      heading: 'Азура',
      ns: this.rundomNumber(5,20),
      link: 'https://vk.com/feed?q=%23%D0%BF%D0%B8%D1%82%D0%BE%D0%BC%D1%86%D1%8B_MF&section=search&w=wall-43091703_73421'
    },
    {
      bg: '../../../assets/images/cats/7yLHrbGDDpE.jpg',
      heading: 'Чип&Ляля',
      ns: this.rundomNumber(1,10),
      link: 'https://vk.com/feed?q=%23%D0%BF%D0%B8%D1%82%D0%BE%D0%BC%D1%86%D1%8B_MF&section=search&w=wall-43091703_119813'
    },
    {
      bg: '../../../assets/images/cats/9R1v30M7P0k.jpg',
      heading: 'Зеленкин',
      ns: this.rundomNumber(5,20),
      link: 'https://vk.com/feed?q=%23%D0%BF%D0%B8%D1%82%D0%BE%D0%BC%D1%86%D1%8B_MF&section=search&w=wall-43091703_136356'
    },
    {
      bg: '../../../assets/images/cats/aU6NQSJdaOo.jpg',
      heading: 'Томми',
      ns: this.rundomNumber(1,10),
      link: 'https://vk.com/feed?q=%23%D0%BF%D0%B8%D1%82%D0%BE%D0%BC%D1%86%D1%8B_MF&section=search&w=wall-43091703_73787'
    },
    {
      bg: '../../../assets/images/cats/-BK_YTu6iq4.jpg',
      heading: 'Мира',
      ns: this.rundomNumber(5,20),
      link: 'https://vk.com/feed?q=%23%D0%BF%D0%B8%D1%82%D0%BE%D0%BC%D1%86%D1%8B_MF&section=search&w=wall-43091703_209597'
    }
  ]

  constructor() {

  }

  ngOnInit() {
  }



}
