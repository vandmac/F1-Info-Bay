import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConstructorsRoutingModule } from './constructors-routing.module';
import { ConstructorsComponent } from './constructors.component';
import { MaterialModule } from '../../material/material.module';

@NgModule({
  declarations: [ConstructorsComponent],
  imports: [CommonModule, ConstructorsRoutingModule, MaterialModule],
})
export class ConstructorsModule {}
