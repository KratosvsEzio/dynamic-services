import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'asset',
    loadChildren: () =>
      import('./features/asset/asset.module').then((m) => m.AssetModule),
  },
  {
    path: 'driver',
    loadChildren: () =>
      import('./features/driver/driver.module').then((m) => m.DriverModule),
  },
  {
    path: 'vehicle',
    loadChildren: () =>
      import('./features/vehicle/vehicle.module').then((m) => m.VehicleModule),
  },
  {
    path: '',
    redirectTo: 'asset',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'asset',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
