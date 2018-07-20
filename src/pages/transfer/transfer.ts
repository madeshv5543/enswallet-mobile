import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TransferThanksPage } from '../transfer-thanks/transfer-thanks';
import { TransferFriendThanksPage } from '../transfer-friend-thanks/transfer-friend-thanks';

@Component({
  selector: 'page-contact',
  templateUrl: 'transfer.html'
})
export class TransferPage {

  pet: string = "bt";
  constructor(public navCtrl: NavController) {
  }

  confirmBalanceTransfer(){
   this.navCtrl.push(TransferThanksPage);
  }

  confirmFriendTransfer(){
    this.navCtrl.push(TransferFriendThanksPage);
  }
}
