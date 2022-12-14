import { Component, OnInit } from '@angular/core';

import { DynamicModalService } from '@modal/dynamic-modal.service';

import { SERVICES } from '@modal/modal.factory';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.scss'],
})
export class DriverComponent implements OnInit {
  constructor(private dynamicModalService: DynamicModalService) {
    this.dynamicModalService.name = SERVICES.DRIVER;
  }

  ngOnInit() { }
}
