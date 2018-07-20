import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { InstructionsPage } from '../instructions/instructions';
import { PointsToAmountPage} from '../points-to-amount/points-to-amount';
import { MyPointsPage } from '../my-points/my-points';
import { MyCataloguePage } from '../my-catalogue/my-catalogue';


@Component({
  selector: 'page-selected-rewards-card',
  templateUrl: 'selected-rewards-card.html'
})
export class SelectedRewardsCardPage {

  constructor(public navCtrl: NavController) {

  }

  goToInstructionsPage(){
    this.navCtrl.push(InstructionsPage);
  }
  goToPointsToAmountPage(){
    this.navCtrl.push(PointsToAmountPage);
  }
  goToMyPointsPage() {
    this.navCtrl.push(MyPointsPage);
  }
  goToMyCataloguePage() {
    this.navCtrl.push(MyCataloguePage);
  }
}
