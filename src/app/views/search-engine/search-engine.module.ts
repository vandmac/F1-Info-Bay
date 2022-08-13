import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchEngineRoutingModule } from './search-engine-routing.module';
import { SearchEngineComponent } from './search-engine.component';

@NgModule({
  declarations: [SearchEngineComponent],
  imports: [CommonModule, SearchEngineRoutingModule],
})
export class SearchEngineModule {}
