import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GatewayService {
  public name: string = 'gateway';
  public asset: any;
  public sensor: any;

  constructor() { }

  public logger(): void {
    console.log('Logger =', this.name);
  }
}
