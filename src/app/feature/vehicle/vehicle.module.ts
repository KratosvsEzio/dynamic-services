import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';

import { ModalModule } from '@modal/modal.module';

import { VehicleComponent } from './vehicle.component';

const route: Route[] = [{ path: '', component: VehicleComponent }];

@NgModule({
  imports: [CommonModule, ModalModule, RouterModule.forChild(route)],
  declarations: [VehicleComponent],
})
export class VehicleModule {}
