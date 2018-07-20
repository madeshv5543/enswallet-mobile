import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { PTAThanksPage } from '../pta-thanks/pta-thanks';

@Component({
  selector: 'page-points-to-amount',
  templateUrl: 'points-to-amount.html'
})
export class PointsToAmountPage {

  constructor(public navCtrl: NavController) {

  }

  confirmAmountTransfer() {
     this.navCtrl.push(PTAThanksPage);
  }
}
