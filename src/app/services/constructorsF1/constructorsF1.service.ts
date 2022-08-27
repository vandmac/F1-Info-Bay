import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, shareReplay } from 'rxjs/operators';
import { ConstructorsF1 } from './constructorsF1';
import { GlobalsService } from 'src/app/shared/globals.service';

@Injectable({
  providedIn: 'root',
})
export class ConstructorsF1Service {
  constructor(private http: HttpClient) {}
  public getConstructorsF1() {
    return this.http
      .get<ConstructorsF1>(GlobalsService.urlAPI+'/constructors.json?limit=220')
      .pipe(
        map(response => response.MRData.ConstructorTable.Constructors),
        shareReplay()
      );
  }
}
