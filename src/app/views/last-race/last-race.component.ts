import { Component, OnInit } from '@angular/core';
import { LastRaceService } from '../../services/last-race/last-race.service';
import { MatTableDataSource } from '@angular/material/table';

// export interface PeriodicElement {
//   familyName: string;
//   givenName: string;
//   constructor: string;
//   grid: number;
// }

// const ELEMENT_DATA: LastRaceComponent = getLastRace();

@Component({
  selector: 'app-last-race',
  templateUrl: './last-race.component.html',
  styleUrls: ['./last-race.component.scss'],
})
export class LastRaceComponent implements OnInit {
    public lastRace$;

  constructor(private lastRaceService: LastRaceService) {
    this.lastRace$ = this.lastRaceService.getLastRace();
    
  }

  ngOnInit(): void {}
}
