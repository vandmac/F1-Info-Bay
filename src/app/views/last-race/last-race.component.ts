import { Component, OnInit } from '@angular/core';
import { LastRaceService } from '../../services/last-race/last-race.service';


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
