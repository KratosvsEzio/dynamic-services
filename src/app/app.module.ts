import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  {
    path: 'asset',
    loadChildren: () =>
      import('./feature/asset/asset.module').then((m) => m.AssetModule),
  },
  {
    path: 'driver',
    loadChildren: () =>
      import('./feature/driver/driver.module').then((m) => m.DriverModule),
  },
  {
    path: 'vehicle',
    loadChildren: () =>
      import('./feature/vehicle/vehicle.module').then((m) => m.VehicleModule),
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
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
