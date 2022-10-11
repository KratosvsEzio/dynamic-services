import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { DynamicModalService } from '@modal/dynamic-modal.service';
import { SERVICES } from '@modal/modal.factory';
import { GatewayService } from '@service/gateway.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  public name!: string;
  private sub!: Subscription;

  constructor(
    private gatewayService: GatewayService,
    private dynamicModalService: DynamicModalService
  ) { }

  ngOnInit() {
    this.changeService();
  }

  public changeService(): void {
    this.sub = this.dynamicModalService.activeService.subscribe(
      (activeService: any) => {
        if (activeService == SERVICES.ASSET) {
          this.gatewayService = this.gatewayService.asset;
        } else if (activeService == SERVICES.SENSOR) {
          this.gatewayService = this.gatewayService.sensor;
        }

        this.name = this.gatewayService?.name;
      }
    );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
