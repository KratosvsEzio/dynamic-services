import { GatewayService } from '@service/gateway.service';
import { DriverService } from '@service/driver.service';
import { SensorService } from '@service/sensor.service';
import { VehicleService } from '@service/vehicle.service';
import { DynamicModalService } from './dynamic-modal.service';

export enum SERVICES {
    ASSET = 'asset',
    DRIVER = 'driver',
    SENSOR = 'sensor',
    VEHICLE = 'vehicle',
}

export const fact: any = (dynamicModalService: DynamicModalService): any => {
    if (dynamicModalService.name == SERVICES.ASSET)
        return { asset: new GatewayService(), sensor: new SensorService() };
    else if (dynamicModalService.name == SERVICES.DRIVER)
        return new DriverService();
    else if (dynamicModalService.name == SERVICES.SENSOR)
        return new SensorService();
    else if (dynamicModalService.name == SERVICES.VEHICLE)
        return new VehicleService();
};

export const modalFactory = {
    provide: GatewayService,
    useFactory: fact,
    deps: [DynamicModalService],
};
