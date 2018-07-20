import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TransferThanksPage } from '../transfer-thanks/transfer-thanks';
import { TransferFriendThanksPage } from '../transfer-friend-thanks/transfer-friend-thanks';

@Component({
  selector: 'page-selected-card-transfer',
  templateUrl: 'selected-card-transfer.html'
})
export class SelectedCardTransferPage {
  pet: string = "bt";
  constructor(public navCtrl: NavController) {

  }

  confirmTransfer(){
      this.navCtrl.push(TransferThanksPage);
  }
  
  confirmFriendTransfer(){
    this.navCtrl.push(TransferFriendThanksPage);
  }
}
