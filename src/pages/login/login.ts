import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ForgotPasswordPage } from '../forgot-password/forgot-password';
import { CreateAccountPage } from '../create-account/create-account';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController) {

  }

  goToForgotPasswordPage() {
  this.navCtrl.push(ForgotPasswordPage);
  }
  
  goToCreateAccountPage(){
  this.navCtrl.push(CreateAccountPage);
  }

  goToDashboard() {
  this.navCtrl.setRoot(TabsPage,{tabIndex:0});
  }
}

