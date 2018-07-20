import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ProfilePage {
  gender: string = "male";
  Account: string = "Profile";
  constructor(public navCtrl: NavController) {

  }

}
