import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SelectedCardTopupPage } from '../selected-card-topup/selected-card-topup';
import { SelectedCardTransferPage } from '../selected-card-transfer/selected-card-transfer';

@Component({
  selector: 'page-selected-gift-card',
  templateUrl: 'selected-gift-card.html'
})
export class SelectedGiftCardPage {

  constructor(public navCtrl: NavController) {

  }

  goToSelectedTopupPage(){
    this.navCtrl.push(SelectedCardTopupPage);
  }
  goToSelectedTransferPage(){
    this.navCtrl.push(SelectedCardTransferPage);
  }
}
