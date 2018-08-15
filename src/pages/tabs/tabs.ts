import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { WalletPage } from '../wallet/wallet';
import { TopupPage } from '../topup/topup';
import { HomePage } from '../home/home';
import { CouponsPage } from '../coupons/coupons';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root = HomePage;
  tab2Root = WalletPage;
  tab3Root = TopupPage;
  tab4Root = CouponsPage;
  mySelectedIndex : any;

  constructor(public navCtrl: NavController,public navParams: NavParams) {
    this.mySelectedIndex = this.navParams.get('tabIndex');
  }
}
