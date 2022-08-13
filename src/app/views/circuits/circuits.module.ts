import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CircuitsRoutingModule } from './circuits-routing.module';
import { CircuitsComponent } from './circuits.component';

@NgModule({
  declarations: [CircuitsComponent],
  imports: [CommonModule, CircuitsRoutingModule],
})
export class CircuitsModule {}
