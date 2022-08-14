import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErgastService {

  constructor(private http: HttpClient) { }
  
  getLastRaceResults() {
    const url="http://ergast.com/api/f1/current/last/results.json?callback=JSON_CALLBACK"
    return this.http.jsonp(url,'callback');
  }

}
