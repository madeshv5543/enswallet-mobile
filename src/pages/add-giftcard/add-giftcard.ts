import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-add-giftcard',
  templateUrl: 'add-giftcard.html'
})
export class AddGiftcardPage {
  preload:boolean;
  freeform:boolean;
  crossborder:boolean;

  constructor(public navCtrl: NavController) {
      this.freeform = true;
  }

}
