import { Component, OnInit } from '@angular/core';

import { DynamicModalService } from '@modal/dynamic-modal.service';

import { SERVICES } from '@modal/modal.factory';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css'],
})
export class VehicleComponent implements OnInit {
  constructor(private dynamicModalService: DynamicModalService) {
    this.dynamicModalService.name = SERVICES.VEHICLE;
  }

  ngOnInit() {}
}
