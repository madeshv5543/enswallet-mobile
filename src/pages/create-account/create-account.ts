import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddCardPage } from '../add-card/add-card';

@Component({
  selector: 'page-create-account',
  templateUrl: 'create-account.html'
})
export class CreateAccountPage {
  gender: string = "male";
  constructor(public navCtrl: NavController) {

  }
  goToAddCardPage() {
    this.navCtrl.push(AddCardPage);
  }
}
