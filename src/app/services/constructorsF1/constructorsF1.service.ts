import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, shareReplay } from 'rxjs/operators';
import { ConstructorsF1} from './constructorsF1';

@Injectable({
  providedIn: 'root',
})
export class ConstructorsF1Service {
  constructor(private http: HttpClient) {}
  public getConstructorsF1() {
    return this.http
      .get<ConstructorsF1>('https://ergast.com/api/f1/constructors.json')
      .pipe(
        map(response => response.MRData.ConstructorTable.Constructors),
        shareReplay()
      );
  }
}
