import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, shareReplay } from 'rxjs/operators';
import { Constructors } from './constructors';

@Injectable({
  providedIn: 'root',
})
export class ConstructorsService {
  constructor(private http: HttpClient) {}
  public getConstructorsTable() {
    return this.http
      .get<Constructors>('https://ergast.com/api/f1/constructors.json')
      .pipe(
        map((response) => response.MRData.constructorTable.constructors),
        shareReplay()
      );
  }
}
