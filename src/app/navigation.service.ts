import { Injectable } from '@angular/core';

@Injectable()
export class NavigationService {

  constructor() { }

  public getCurrentDateTime(){
    return new Date();
  }

}
