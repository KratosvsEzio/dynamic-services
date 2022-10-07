import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssetComponent } from './asset.component';
import { ModalModule } from '../modal/modal.module';
import { Route, RouterModule } from '@angular/router';
import { DynamicModalService } from '../modal/dynamic-modal.service';
import { modalFactory } from '../modal/modal.factory';

const route: Route[] = [{ path: '', component: AssetComponent }];

@NgModule({
  imports: [CommonModule, ModalModule, RouterModule.forChild(route)],
  declarations: [AssetComponent],
  providers: [modalFactory, DynamicModalService],
})
export class AssetModule {}
