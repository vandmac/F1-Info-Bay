import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LastRaceService } from '../../services/last-race/last-race.service';
// import { LastRace } from '../../services/last-race/last-race.service';
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-last-race',
  templateUrl: './last-race.component.html',
  styleUrls: ['./last-race.component.scss'],
})
export class LastRaceComponent implements OnInit {
  displayedColumns: string[] = ['position', 'givenName','familyName', 'constructor', 'grid'];
  public lastRace$: Observable<LastRaceService>;
  // public dataSource = new MatTableDataSource<LastRaceService>([]);


  constructor(private lastRaceService: LastRaceService) {
    this.lastRace$ = this.lastRaceService.getLastRace();
  }

  ngOnInit(): void {}
}

// {{ lastRace.MRData.RaceTable.Races[0].Results[i].Driver.familyName }}
//                 {{ lastRace.MRData.RaceTable.Races[0].Results[i].Driver.givenName }}
//                 {{ lastRace.MRData.RaceTable.Races[0].Results[i].Constructor.name }}
//                 {{ lastRace.MRData.RaceTable.Races[0].Results[i].grid}}
