import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConstructorsF1Component } from './constructorsF1.component';

const routes: Routes = [{ path: '', component: ConstructorsF1Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConstructorsF1RoutingModule {}
