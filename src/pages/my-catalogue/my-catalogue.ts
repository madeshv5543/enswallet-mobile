import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { RewardRedemptionPage } from '../reward-redemption/reward-redemption'; 

@Component({
  selector: 'page-my-catalogue',
  templateUrl: 'my-catalogue.html'
})
export class MyCataloguePage {

  constructor(public navCtrl: NavController) {

  }
  rewardRedemption(){
    this.navCtrl.push(RewardRedemptionPage);
  }
}