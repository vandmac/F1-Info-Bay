import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { LastRaceService } from '../../services/last-race/last-race.service';
// import { LastRace } from 'src/app/services/last-race/last-race';

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
