import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { DriverComponent } from './driver.component';

import { ModalModule } from '@modal/modal.module';

const route: Route[] = [{ path: '', component: DriverComponent }];

@NgModule({
  imports: [CommonModule, ModalModule, RouterModule.forChild(route)],
  declarations: [DriverComponent],
})
export class DriverModule { }