import { Component, OnDestroy, OnInit } from '@angular/core';
import { DynamicModalService } from '../modal/dynamic-modal.service';
import { SERVICES } from '../modal/modal.factory';

@Component({
  selector: 'app-asset',
  templateUrl: './asset.component.html',
  styleUrls: ['./asset.component.css'],
})
export class AssetComponent implements OnInit, OnDestroy {
  public condition: boolean = true;

  constructor(private dynamicModalService: DynamicModalService) {
    this.dynamicModalService.activeService = 'asset';
    this.dynamicModalService.name = SERVICES.ASSET;
  }

  public ngOnInit(): void {}

  public toggle(): void {
    this.condition = !this.condition;
    this.dynamicModalService.activeService = this.condition ? 'asset' : 'sensor';
  }

  public ngOnDestroy(): void {
    this.dynamicModalService.activeService = '';
  }
}
