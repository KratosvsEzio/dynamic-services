import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  InjectionToken,
  OnInit,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { AssetService } from '../../service/asset.service';
import { DynamicModalService } from './dynamic-modal.service';
import { SERVICES } from './modal.factory';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  public name: string;
  private sub: Subscription;

  constructor(
    private assetService: AssetService,
    private dynamicModalService: DynamicModalService
  ) {}

  ngOnInit() {
    this.changeService();
  }

  public changeService(): void {
    this.sub = this.dynamicModalService.activeService.subscribe(
      (activeService) => {
        if (activeService == SERVICES.ASSET) {
          this.assetService = this.assetService.asset;
        } else if (activeService == SERVICES.SENSOR) {
          this.assetService = this.assetService.sensor;
        }

        this.name = this.assetService?.name;
      }
    );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
