import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalComponent } from '@modal/modal.component';

import { modalFactory } from '@modal/modal.factory';
import { DynamicModalService } from '@modal/dynamic-modal.service';

@NgModule({
  imports: [CommonModule],
  exports: [ModalComponent],
  declarations: [ModalComponent],
  providers: [modalFactory, DynamicModalService],
})
export class ModalModule {}
