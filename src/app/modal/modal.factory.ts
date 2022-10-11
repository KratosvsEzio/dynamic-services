import { AssetService } from '@service/asset.service';
import { DriverService } from '@service/driver.service';
import { SensorService } from '@service/sensor.service';
import { VehicleService } from '@service/vehicle.service';
import { DynamicModalService } from '@modal/dynamic-modal.service';

export enum SERVICES {
  ASSET = 'asset',
  DRIVER = 'driver',
  SENSOR = 'sensor',
  VEHICLE = 'vehicle',
}

export const fact = (dynamicModalService: DynamicModalService) => {
  if (dynamicModalService.name == SERVICES.ASSET)
    return { asset: new AssetService(), sensor: new SensorService() };
  else if (dynamicModalService.name == SERVICES.DRIVER)
    return new DriverService();
  else if (dynamicModalService.name == SERVICES.SENSOR)
    return new SensorService();
  else if (dynamicModalService.name == SERVICES.VEHICLE)
    return new VehicleService();
};

export const modalFactory = {
  provide: AssetService,
  useFactory: fact,
  deps: [DynamicModalService],
};
