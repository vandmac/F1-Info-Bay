import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LastRaceService } from '../../services/last-race/last-race.service';
import { MatTableDataSource } from "@angular/material/table";
import { LastRace, Race, } from '../../services/last-race/last-race';

@Component({
  selector: 'app-last-race',
  templateUrl: './last-race.component.html',
  styleUrls: ['./last-race.component.scss'],
})
  
export class LastRaceComponent implements OnInit {

  constructor (private lastRaceService: LastRaceService) {
    this.lastRace$ = this.lastRaceService.getLastRace();
  }
  displayedColumns: string[] = ['position', 'Driver'];
  public lastRace$: Observable<Race>;
  
  ngOnInit(): void {
  }
}


 



// {{ lastRace.MRData.RaceTable.Races[0].Results[i].Driver.familyName }}
//                 {{ lastRace.MRData.RaceTable.Races[0].Results[i].Driver.givenName }}
//                 {{ lastRace.MRData.RaceTable.Races[0].Results[i].Constructor.name }}
//                 {{ lastRace.MRData.RaceTable.Races[0].Results[i].grid}}
