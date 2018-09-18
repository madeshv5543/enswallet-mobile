import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';
import { Clipboard } from '@ionic-native/clipboard';

import {NotificationsPage} from '../notifications/notifications';
import { WebservicProvider } from '../../providers/webservic/webservic';

@Component({
  selector: 'page-add-card',
  templateUrl: 'add-card.html'
})
export class AddCardPage {
  public data:any = {};
  public token:string;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private clipboard: Clipboard,
    private menu:MenuController,
    private webService:WebservicProvider
  ) {
    this.data = this.navParams.get('data');
    this.token = this.navParams.get('token')
    this.menu.enable(false);
  }

  copyToClipboard(){
    let self = this;
    this.clipboard.copy(self.data.seed);
  }

  goToHome(){
    let self = this;
    self.webService.saveLocalData(self.data,self.token)
    self.navCtrl.setRoot(NotificationsPage)
  }

}
