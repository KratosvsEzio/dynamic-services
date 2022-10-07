import { Injectable } from '@angular/core';

@Injectable()
export class VehicleService {
  public name: string = 'vehicle';
  constructor() { }

  public logger(): void {
    console.log('Logger =', this.name)
  }
}