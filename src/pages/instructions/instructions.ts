import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-instructions',
  templateUrl: 'instructions.html'
})
export class InstructionsPage {
  ins: string = "hte";
  constructor(public navCtrl: NavController) {
  }

}
