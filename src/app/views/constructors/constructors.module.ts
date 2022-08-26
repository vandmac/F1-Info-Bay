import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConstructorsRoutingModule } from './constructors-routing.module';
import { ConstructorsComponent } from './constructors.component';

@NgModule({
  declarations: [ConstructorsComponent],
  imports: [CommonModule, ConstructorsRoutingModule],
})
export class ConstructorsModule {}
