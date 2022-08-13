import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LastRaceComponent } from './last-race.component';

const routes: Routes = [{ path: '', component: LastRaceComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LastRaceRoutingModule {}
