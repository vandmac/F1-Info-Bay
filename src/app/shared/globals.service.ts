import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GlobalsService {
  static urlAPI: string = 'https://ergast.com/api/f1';

  constructor() {}
}
