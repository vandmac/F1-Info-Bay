import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { LastRace } from './last-race';
import {map, shareReplay } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class LastRaceService {
  constructor(private http: HttpClient) {}
// public lastResults: any;
  public getLastRace() {

    return this.http
      .get<LastRaceService[]>('https://ergast.com/api/f1/current/last/results.json')
      .pipe(map(response=>response[0]),shareReplay());
  }
}
