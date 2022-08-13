import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LastRaceRoutingModule } from './last-race-routing.module';
import { LastRaceComponent } from './last-race.component';

@NgModule({
  declarations: [
    LastRaceComponent
  ],
  imports: [
    CommonModule,
    LastRaceRoutingModule
  ]
})
export class LastRaceModule { }
