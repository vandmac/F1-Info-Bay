import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConstructorsF1RoutingModule } from './constructorsF1-routing.module';
import { ConstructorsF1Component } from './constructorsF1.component';
import { MaterialModule } from '../../material/material.module';

@NgModule({
  declarations: [ConstructorsF1Component],
  imports: [CommonModule, ConstructorsF1RoutingModule, MaterialModule],
})
export class ConstructorsF1Module {}
