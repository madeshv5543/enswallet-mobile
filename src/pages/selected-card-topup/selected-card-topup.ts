import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TopupThanksPage } from '../topup-thanks/topup-thanks';

@Component({
  selector: 'page-selected-card-topup',
  templateUrl: 'selected-card-topup.html'
})
export class SelectedCardTopupPage {

  constructor(public navCtrl: NavController) {

  }

  confirmTopup(){
      this.navCtrl.push(TopupThanksPage);
  }
  
}
