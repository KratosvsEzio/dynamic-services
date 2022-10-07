import { Injectable } from '@angular/core';

@Injectable()
export class AssetService {
  public name: string = 'asset';
  public asset: any;
  public sensor: any;

  constructor() {}

  public logger(): void {
    console.log('Logger =', this.name);
  }
}
