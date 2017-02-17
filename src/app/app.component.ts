import { Component } from '@angular/core';
import {NavigationService} from './navigation.service';

@Component({
  selector: 'wa-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NavigationService]
})  
export class AppComponent {

  constructor(public _navigationService:NavigationService){


  }

  title = JSON.parse(JSON.stringify(this._navigationService.getCurrentDateTime()));
}
