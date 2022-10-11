import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class DynamicModalService {
  private _name: string;
  private _activeService: BehaviorSubject<string> = new BehaviorSubject<string>(
    ''
  );

  constructor() {}

  public get name(): string {
    return this._name;
  }

  public set name(data: string) {
    this._name = data;
  }

  public get activeService(): Observable<string> {
    return this._activeService.asObservable();
  }

  public set activeService(data: any) {
    this._activeService.next(data);
  }
}
