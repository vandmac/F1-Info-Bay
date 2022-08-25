import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () =>
      import('./views/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'news',
    loadChildren: () =>
      import('./views/news/news.module').then((m) => m.NewsModule),
  },
  {
    path: 'last-race',
    loadChildren: () =>
      import('./views/last-race/last-race.module').then(
        (m) => m.LastRaceModule
      ),
  },
  {
    path: 'constructors',
    loadChildren: () =>
      import('./views/constructors/constructors.module').then((m) => m.ConstructorsModule),
  },
  {
    path: 'drivers',
    loadChildren: () =>
      import('./views/drivers/drivers.module').then((m) => m.DriversModule),
  },
  {
    path: 'races',
    loadChildren: () =>
      import('./views/races/races.module').then((m) => m.RacesModule),
  },
  {
    path: 'circuits',
    loadChildren: () =>
      import('./views/circuits/circuits.module').then((m) => m.CircuitsModule),
  },
  {
    path: 'statistics',
    loadChildren: () =>
      import('./views/statistics/statistics.module').then(
        (m) => m.StatisticsModule
      ),
  },
  {
    path: 'search-engine',
    loadChildren: () =>
      import('./views/search-engine/search-engine.module').then(
        (m) => m.SearchEngineModule
      ),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./views/about/about.module').then((m) => m.AboutModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
