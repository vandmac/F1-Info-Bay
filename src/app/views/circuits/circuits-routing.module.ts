import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CircuitsComponent } from './circuits.component';

const routes: Routes = [{ path: '', component: CircuitsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CircuitsRoutingModule {}
