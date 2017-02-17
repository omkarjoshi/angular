import { Component, OnInit } from '@angular/core';
import {TransactionService} from '../transaction.service';
import { Observable }       from 'rxjs/Observable';
import {Transaction} from '../model/transaction';

@Component({
  selector: 'wa-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
  providers:[TransactionService]
})
export class BodyComponent implements OnInit {
  items: string[];
  responseMessage:string;
  private myJson;
  private transaction:Transaction= new Transaction();
  constructor(private transactionService:TransactionService) {


   }

  ngOnInit() {
  }

  public addToWallet(){
    this.transactionService.addPaymentToWallet(this.transaction).subscribe(
        (data) =>this.responseMessage= data
    );
  }

}
