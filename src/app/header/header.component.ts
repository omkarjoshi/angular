import { Component, OnInit } from '@angular/core';
import {NavigationService} from '../navigation.service';

@Component({
  selector: 'wa-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
   providers: [NavigationService]
})
export class HeaderComponent implements OnInit {

  

  ngOnInit() {
  }
  constructor(public _navigationService:NavigationService){


  }

  currentDate = this._navigationService.getCurrentDateTime();

}
