import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConstructorsComponent } from './constructors.component';

const routes: Routes = [{ path: '', component: ConstructorsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConstructorsRoutingModule {}
