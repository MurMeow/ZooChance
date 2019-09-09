import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  groupPhoto = [
    {
      bg: '../../../assets/images/cats/_xiNrpLAB6c.jpg',
      heading: 'Нюша',
      price: 180,
      link: 'https://vk.com/feed?q=%23%D0%BF%D0%B8%D1%82%D0%BE%D0%BC%D1%86%D1%8B_MF&section=search&w=wall-43091703_214842'
    },
    {
      bg: '../../../assets/images/cats/6YIW2PQT2Fk.jpg',
      heading: 'Азура',
      price: 170,
      link: 'https://vk.com/feed?q=%23%D0%BF%D0%B8%D1%82%D0%BE%D0%BC%D1%86%D1%8B_MF&section=search&w=wall-43091703_73421'
    },
    {
      bg: '../../../assets/images/cats/7yLHrbGDDpE.jpg',
      heading: 'Чип&Ляля',
      price: 150,
      link: 'https://vk.com/feed?q=%23%D0%BF%D0%B8%D1%82%D0%BE%D0%BC%D1%86%D1%8B_MF&section=search&w=wall-43091703_119813'
    },
    {
      bg: '../../../assets/images/cats/9R1v30M7P0k.jpg',
      heading: 'Зеленкин',
      price: 200,
      link: 'https://vk.com/feed?q=%23%D0%BF%D0%B8%D1%82%D0%BE%D0%BC%D1%86%D1%8B_MF&section=search&w=wall-43091703_136356'
    },
    {
      bg: '../../../assets/images/cats/aU6NQSJdaOo.jpg',
      heading: 'Томми',
      price: 100,
      link: 'https://vk.com/feed?q=%23%D0%BF%D0%B8%D1%82%D0%BE%D0%BC%D1%86%D1%8B_MF&section=search&w=wall-43091703_73787'
    },
    {
      bg: '../../../assets/images/cats/-BK_YTu6iq4.jpg',
      heading: 'Мира',
      price: 230,
      link: 'https://vk.com/feed?q=%23%D0%BF%D0%B8%D1%82%D0%BE%D0%BC%D1%86%D1%8B_MF&section=search&w=wall-43091703_209597'
    },
    {
      bg: '../../../assets/images/cats/_xiNrpLAB6c.jpg',
      heading: 'Нюша',
      price: 180,
      link: 'https://vk.com/feed?q=%23%D0%BF%D0%B8%D1%82%D0%BE%D0%BC%D1%86%D1%8B_MF&section=search&w=wall-43091703_214842'
    },
    {
      bg: '../../../assets/images/cats/6YIW2PQT2Fk.jpg',
      heading: 'Азура',
      price: 170,
      link: 'https://vk.com/feed?q=%23%D0%BF%D0%B8%D1%82%D0%BE%D0%BC%D1%86%D1%8B_MF&section=search&w=wall-43091703_73421'
    },
    {
      bg: '../../../assets/images/cats/7yLHrbGDDpE.jpg',
      heading: 'Чип&Ляля',
      price: 150,
      link: 'https://vk.com/feed?q=%23%D0%BF%D0%B8%D1%82%D0%BE%D0%BC%D1%86%D1%8B_MF&section=search&w=wall-43091703_119813'
    },
    {
      bg: '../../../assets/images/cats/9R1v30M7P0k.jpg',
      heading: 'Зеленкин',
      price: 200,
      link: 'https://vk.com/feed?q=%23%D0%BF%D0%B8%D1%82%D0%BE%D0%BC%D1%86%D1%8B_MF&section=search&w=wall-43091703_136356'
    },
    {
      bg: '../../../assets/images/cats/aU6NQSJdaOo.jpg',
      heading: 'Томми',
      price: 100,
      link: 'https://vk.com/feed?q=%23%D0%BF%D0%B8%D1%82%D0%BE%D0%BC%D1%86%D1%8B_MF&section=search&w=wall-43091703_73787'
    },
    {
      bg: '../../../assets/images/cats/-BK_YTu6iq4.jpg',
      heading: 'Мира',
      price: 230,
      link: 'https://vk.com/feed?q=%23%D0%BF%D0%B8%D1%82%D0%BE%D0%BC%D1%86%D1%8B_MF&section=search&w=wall-43091703_209597'
    },
    {
      bg: '../../../assets/images/cats/_xiNrpLAB6c.jpg',
      heading: 'Нюша',
      price: 180,
      link: 'https://vk.com/feed?q=%23%D0%BF%D0%B8%D1%82%D0%BE%D0%BC%D1%86%D1%8B_MF&section=search&w=wall-43091703_214842'
    },
    {
      bg: '../../../assets/images/cats/6YIW2PQT2Fk.jpg',
      heading: 'Азура',
      price: 170,
      link: 'https://vk.com/feed?q=%23%D0%BF%D0%B8%D1%82%D0%BE%D0%BC%D1%86%D1%8B_MF&section=search&w=wall-43091703_73421'
    },
    {
      bg: '../../../assets/images/cats/7yLHrbGDDpE.jpg',
      heading: 'Чип&Ляля',
      price: 150,
      link: 'https://vk.com/feed?q=%23%D0%BF%D0%B8%D1%82%D0%BE%D0%BC%D1%86%D1%8B_MF&section=search&w=wall-43091703_119813'
    },
    {
      bg: '../../../assets/images/cats/9R1v30M7P0k.jpg',
      heading: 'Зеленкин',
      price: 200,
      link: 'https://vk.com/feed?q=%23%D0%BF%D0%B8%D1%82%D0%BE%D0%BC%D1%86%D1%8B_MF&section=search&w=wall-43091703_136356'
    },
    {
      bg: '../../../assets/images/cats/aU6NQSJdaOo.jpg',
      heading: 'Томми',
      price: 100,
      link: 'https://vk.com/feed?q=%23%D0%BF%D0%B8%D1%82%D0%BE%D0%BC%D1%86%D1%8B_MF&section=search&w=wall-43091703_73787'
    },
    {
      bg: '../../../assets/images/cats/-BK_YTu6iq4.jpg',
      heading: 'Мира',
      price: 230,
      link: 'https://vk.com/feed?q=%23%D0%BF%D0%B8%D1%82%D0%BE%D0%BC%D1%86%D1%8B_MF&section=search&w=wall-43091703_209597'
    },
    {
      bg: '../../../assets/images/cats/9R1v30M7P0k.jpg',
      heading: 'Зеленкин',
      price: 200,
      link: 'https://vk.com/feed?q=%23%D0%BF%D0%B8%D1%82%D0%BE%D0%BC%D1%86%D1%8B_MF&section=search&w=wall-43091703_136356'
    },
    {
      bg: '../../../assets/images/cats/aU6NQSJdaOo.jpg',
      heading: 'Томми',
      price: 100,
      link: 'https://vk.com/feed?q=%23%D0%BF%D0%B8%D1%82%D0%BE%D0%BC%D1%86%D1%8B_MF&section=search&w=wall-43091703_73787'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
