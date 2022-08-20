import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LastRaceRoutingModule } from './last-race-routing.module';
import { LastRaceComponent } from './last-race.component';
import { MaterialModule } from '../../material/material.module';

@NgModule({
  declarations: [
    LastRaceComponent
  ],
  imports: [
    CommonModule,
    LastRaceRoutingModule,
    MaterialModule
  ]
})
export class LastRaceModule { }
