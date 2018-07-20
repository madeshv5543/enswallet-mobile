import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { TopupThanksPage } from '../topup-thanks/topup-thanks';
import { WebservicProvider } from '../../providers/webservic/webservic';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-topup',
  templateUrl: 'topup.html'
})
export class TopupPage {
 public selectedCur:any;
 public selectedAccount:any ={
  address:'-',
  balance:0
 }
 public todayPrice:any ={
  "BTT":1,
  "ETH":1
}
 public ethTransaction:any  =[];
  constructor(public navCtrl: NavController,public navParams: NavParams,public webservice:WebservicProvider,private iab: InAppBrowser) {
   this.selectedCur = this.webservice.getSelectedcoin()
   this.getBalance()
   this.gettodayPrice();
  }

  OpenUrl(url)
{
const browser = this.iab.create(url);
browser.show()
}

  getBalance(){
   let self = this;
   let servicecall:any;
   switch(self.selectedCur){
     case 'evenscoin':
     servicecall = self.webservice.evensBalance();
     break;
     case 'tokenOne':
     servicecall  = self.webservice.getTokenOneBalance();
     break;
     case 'tokenTwo':
     servicecall = self.webservice.getTokenTwoBalance();
     break;
     case 'tokenThree':
     servicecall = self.webservice.getTokenThreeBalance();
     break;
     default:
     servicecall = self.webservice.getBalance()
   }
  //  if(this.selectedCur == 'Etheriun'){
  //   servicecall = self.webservice.getBalance()
  //  }
  //  if(this.selectedCur == 'evenscoin'){
  //   servicecall = self.webservice.evensBalance()
  //  }
   servicecall
   .then(res=>{
    console.log('res',res)
    self.selectedAccount = res;
    
      this.getEtheriumTransaction(res.address);
  
  },err=>{
    console.log("err",err)
  })
  }
  
  ionViewWillEnter() { 
    this.getBalance()
 
   }
   

   getEtheriumTransaction(address){
     let respromise:any;
     if(this.selectedCur == 'Etheriun'){
      respromise = this.webservice.getEthTransaction(address)
     }
     if(this.selectedCur == 'evenscoin'){
      respromise = this.webservice.getTokenTransaction(address)
     }
     if(this.selectedCur == 'Etheriun' || this.selectedCur == 'evenscoin' ){
      respromise.then(
        res=>{
          console.log("transa",res)
          this.ethTransaction = res;
        }
      )
     }
   }

 
  
   gettodayPrice(){
    let self = this;
    self.webservice.getTodayPrice()
    .then(res=>{
       self.todayPrice = res;
    },err=>{
       console.log(err)
    })
  }
  
  
  confirmTopup(){
    this.navCtrl.push(TopupThanksPage);
  }
}