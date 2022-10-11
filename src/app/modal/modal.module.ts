import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ModalComponent } from './modal.component';

import { DynamicModalService } from './dynamic-modal.service';
import { modalFactory } from './modal.factory';

@NgModule({
  imports: [CommonModule],
  exports: [ModalComponent],
  declarations: [ModalComponent],
  providers: [modalFactory, DynamicModalService],
})
export class ModalModule { }
