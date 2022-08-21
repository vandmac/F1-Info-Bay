import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
public news$:any;

  constructor(private newsService: NewsService){
    this.news$.newsService.getNews();
     
  }
  


  ngOnInit(): void {}

}

// export class LastRaceComponent implements OnInit {
//   public lastRace$;
  
//   constructor(private lastRaceService: LastRaceService) {
//     this.lastRace$ = this.lastRaceService.getLastRace();
//   }