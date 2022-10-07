import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DriverComponent } from './driver.component';
import { ModalModule } from '../modal/modal.module';
import { Route, RouterModule } from '@angular/router';

const route: Route[] = [{ path: '', component: DriverComponent }];

@NgModule({
  imports: [CommonModule, ModalModule, RouterModule.forChild(route)],
  declarations: [DriverComponent],
})
export class DriverModule {}
