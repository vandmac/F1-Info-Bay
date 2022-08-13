import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  public getposts() {
    return this.httpClient.get(this.url, this.options);
  }
}
