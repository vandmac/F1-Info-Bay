import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, shareReplay } from 'rxjs/operators';
import { LastRace } from './last-race';
import { GlobalsService } from 'src/app/shared/globals.service';


@Injectable({
  providedIn: 'root',
})
export class LastRaceService {
  constructor(private http: HttpClient) {}
  public getLastRace() {
    return this.http
      .get<LastRace>(GlobalsService.urlAPI+'/current/last/results.json')
      .pipe(map(response=>response.MRData.RaceTable.Races[0]),shareReplay());
  }
}
