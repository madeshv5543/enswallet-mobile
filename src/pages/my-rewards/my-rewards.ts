import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// declare var TradingView:any;
// import { NFC } from "@ionic-native/nfc";
@Component({
  selector: 'page-my-rewards',
  templateUrl: 'my-rewards.html'
})
export class MyRewardsPage {
  granted: boolean;
  denied: boolean;
  scanned: boolean;
  tagId: string;  
  
  constructor(public navCtrl: NavController) {

  }

  resetScanData() {
    this.granted = false;
    this.scanned = false;
    this.tagId = "";
  } 
  
  ngAfterViewInit() {
    // new TradingView.widget({
    //   "autosize": true,
    //   "symbol": "COINBASE:ETHUSD",
    //   "interval": "1",
    //   "timezone": "Etc/UTC",
    //   "theme": "Dark",
    //   "style": "7",
    //   "locale": "en",
    //   "toolbar_bg": "#f1f3f6",
    //   "enable_publishing": false,
    //   "hide_top_toolbar": true,
    //   "container_id": "tradingview_84686"
    // });

  }

  // ionViewDidEnter() {
  //   this.nfc.enabled().then((resolve) => {
  //     this.addListenNFC();
  //   }).catch((reject) => {
  //     alert("NFC is not supported by your Device");
  //   });
  // }

  // addListenNFC() {

  //   this.nfc.addNdefListener(() => {
  //     console.log('successfully attached ndef listener');
  //   }, (err) => {
  //     console.log('error attaching ndef listener', err);
  //   }).subscribe((event) => {
  //     console.log('received ndef message. the tag contains: ', event.tag);
  //     console.log('decoded tag id', this.nfc.bytesToHexString(event.tag.id));
    
  //     // let message = this.ndef.textRecord('Hello world');
  //     // this.nfc.share([message]).then(onSuccess).catch(onError);
  //   });
  // }
  

  // sesReadNFC(data): void {

  // }

  // failNFC(err) {
  //   alert("Error while reading: Please Retry");
  // }
}