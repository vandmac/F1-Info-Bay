import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RacesRoutingModule } from './races-routing.module';
import { RacesComponent } from './races.component';

@NgModule({
  declarations: [RacesComponent],
  imports: [CommonModule, RacesRoutingModule],
})
export class RacesModule {}
