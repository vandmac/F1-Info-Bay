import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, shareReplay } from 'rxjs/operators';
import { LastRace } from './last-race';

@Injectable({
  providedIn: 'root',
})
export class LastRaceService {
  constructor(private http: HttpClient) {}
  public getLastRace() {
    return this.http
      .get<LastRace>('https://ergast.com/api/f1/current/last/results.json')
      .pipe(
        map((response) => response.MRData.RaceTable.Races[0]),
        shareReplay()
      );
  }
}
