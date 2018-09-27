import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { WebservicProvider } from '../../providers/webservic/webservic';

@Component({
  selector: 'wallet',
  templateUrl: 'wallet.html',
  providers:[WebservicProvider]
})
export class WalletPage {
    account:any ={};
    showQr:boolean = false;
    value = "test";
    selectedCur:any;
    public todayPrice:any ={
      "BTT":1,
      "ETH":1
    }
  constructor(public navCtrl: NavController,public webserve:WebservicProvider) {
  this.getSelecetedCoin()
  this.gettodayPrice()
  }

  doRefresh(e){
    this.getSelecetedCoin()
    this.gettodayPrice()
    setTimeout(() => {
      e.complete()
    }, 2000);
  }

  
  gettodayPrice(){
    let self = this;
    self.webserve.getTodayPrice()
    .subscribe(res=>{
       self.todayPrice = res;
    },err=>{
       console.log(err)
    })
  }
  async getSelecetedCoin(){
    this.selectedCur = await this.webserve.getSelectedcoinpromise()
    this.getBalance()
  }

  getBalance(){
    let self = this;
    let servicecall:any;
    switch(self.selectedCur){
      case 'evenscoin':
      servicecall = self.webserve.evensBalance();
      break;
      case 'tokenOne':
      servicecall  = self.webserve.getTokenOneBalance();
      break;
      case 'tokenTwo':
      servicecall = self.webserve.getTokenTwoBalance();
      break;
      case 'tokenThree':
      servicecall = self.webserve.getTokenThreeBalance();
      break;
      default:
      servicecall = self.webserve.getBalance()
    }
    // if(this.selectedCur == 'Etheriun'){
    //   servicecall = self.webserve.getBalance()
    //  }
    //  if(this.selectedCur == 'evenscoin'){
    //   servicecall = self.webserve.evensBalance()
    //  }
    servicecall
    .subscribe(res=>{
      console.log('res',res)
      
      self.account = res;
      this.showQr = true;
    },err=>{
      console.log("err",err)
    })
  }

  
}
