import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  constructor() { 
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '07734e9624mshf4719163d394ffbp1ff759jsn70e951261df0',
        'X-RapidAPI-Host': 'f1-news.p.rapidapi.com'
      }
    };
    
    // fetch('https://f1-news.p.rapidapi.com/news', options)
    //   .then(response => response.json())
    //   .then(response => getNews())
    //   .catch(err => console.error(err));
    
    //   getNews() {
    //   }
    
  }
  
  


  ngOnInit(): void {
  };

  
}
