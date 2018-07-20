import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-transactions',
  templateUrl: 'transactions.html'
})
export class TransactionsPage {
  showToolbar:boolean = false;
  toggleToolbar = function() {
    console.log('Toggling Toolbar',this.showToolbar);
    this.showToolbar = !this.showToolbar;
  }
  constructor(public navCtrl: NavController) {

  }

}