import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LastRace } from './last-race';
import { shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LastRaceService {
  constructor(private http: HttpClient) {}
public lastResults: any;
  public getLastRace() {

    return this.http
      .get<LastRace>('https://ergast.com/api/f1/current/last/results.json')
      .pipe(shareReplay());
  }
}
