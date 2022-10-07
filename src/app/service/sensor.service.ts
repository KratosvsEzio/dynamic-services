import { Injectable } from '@angular/core';

@Injectable()
export class SensorService {
  public name: string = 'sensor';
  constructor() { }

  public logger(): void {
    console.log('Logger =', this.name)
  }
}