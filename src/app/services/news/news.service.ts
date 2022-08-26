import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { shareReplay } from 'rxjs';
import {News} from './news';

@Injectable({
  providedIn: 'root',
})
  
export class NewsService {
  private options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '07734e9624mshf4719163d394ffbp1ff759jsn70e951261df0',
      'X-RapidAPI-Host': 'f1-news.p.rapidapi.com',
    },
  };
  private url = 'https://f1-news.p.rapidapi.com/news';

  constructor(private httpClient: HttpClient) {}

  // public getNews() {
  //   return this.httpClient.get<News>(this.url, this.options).pipe(shareReplay());
  // }
}

// public getLastRace() {
//   return this.http
//     .get<LastRace>('https://ergast.com/api/f1/current/last/results.json')
//     .pipe(shareReplay());