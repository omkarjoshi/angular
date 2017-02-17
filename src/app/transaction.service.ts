import { Injectable } from '@angular/core';
import { Http, Response,Headers, RequestOptions,Jsonp, URLSearchParams } from '@angular/http';
import {Transaction} from './model/transaction';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class TransactionService {
  
  constructor(private http: Http,private jsonp: Jsonp) { }
  private headers = new Headers({'Content-Type': 'application/json'});
  
  

  public getListOfCategories(){
    return this.http.get("http://127.0.0.1:8080/api/getListOfCategories?callback=extractData")
    .map(
      (res) => res.json()
    )
  }

  public addPaymentToWallet(transaction:Transaction){
      var bodyJson = JSON.stringify(transaction); 

      return this.http.post("http://127.0.0.1:8080/api/addToWallet?callback=extractData",bodyJson,{headers: this.headers})
    .map(
      (res) => res.json()
    )
  }
  

}
