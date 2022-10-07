import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import { modalFactory } from './modal.factory';
import { DynamicModalService } from './dynamic-modal.service';

@NgModule({
  imports: [CommonModule],
  exports: [ModalComponent],
  declarations: [ModalComponent],
  providers: [modalFactory, DynamicModalService],
})
export class ModalModule {}
