import { Injectable } from '@angular/core';

@Injectable()
export class DriverService {
  public name: string = 'driver';
  constructor() { }

  public logger(): void {
    console.log('Logger =', this.name)
  }
}