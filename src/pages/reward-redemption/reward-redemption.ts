import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { RRThanksPage } from '../rr-thanks/rr-thanks';

@Component({
  selector: 'page-reward-redemption',
  templateUrl: 'reward-redemption.html'
})
export class RewardRedemptionPage {

  constructor(public navCtrl: NavController) {

  }

  confirmRedemption() {
    this.navCtrl.push(RRThanksPage);
  }
}