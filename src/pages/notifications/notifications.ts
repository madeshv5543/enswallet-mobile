import { Component } from '@angular/core';
import { NavController, MenuController, Events, AlertController, LoadingController } from 'ionic-angular';
import { WebservicProvider } from '../../providers/webservic/webservic';

import { TabsPage } from '../tabs/tabs';
import { MyRewardsPage } from '../my-rewards/my-rewards';
// import { Title } from '@angular/platform-browser';



@Component({
  selector: 'page-notifications',
  templateUrl: 'notifications.html'
})
export class NotificationsPage {
  etherAccount:any ={
    address:'-',
    balance:0
  }
  evensAccount:any={
    address:'-',
    balance:0
  }

  tokens:any = [];
  todayPrice:any ={
    "BTT":1,
    "ETH":1,
    "INR":1,
    "THB":1,
    "KRW":1
  }
  allBalance:any ={
    eth:0,
    tokenOne:0,
    tokenTwo:0,
    tokenThree:0,
    ens:0,
    address:'',
    tokenTwosym:'',
    tokenOnesym:'',
    tokenThreeSym:'' 
  }
  constructor(
    public navCtrl: NavController,
    public webserve:WebservicProvider,
    private menu:MenuController,
    public events:Events,
    public alertCtrl:AlertController,
    public loadingCtrl:LoadingController) {
    this.gettodayPrice();
    this.getAllBalance();
    this.menu.enable(true);
    this.events.publish('getUser', true);
    // this.getBalance()
    // this.evensBalance();1
  }

  

  getBalance(){
    let self = this;
    self.webserve.getBalance()
    .subscribe(res=>{
      console.log('res',res)
      self.etherAccount = res;
    },err=>{
      console.log("err",err)
    })
   }



   getAllBalance (){
     let self = this;
     let loading = this.loadingCtrl.create({
      // spinner: 'hide',
      content: 'Fetching Balance  Please Wait...'
    });
  
    loading.present();
  
     self.webserve.getAllBalance()
     .subscribe(res=>{
      self.allBalance = res;
      loading.dismiss()
     },
    err=>{
      loading.dismiss()
    })
   }

   evensBalance(){
    let self = this;
    self.webserve.evensBalance()
    .subscribe(res=>{
      // console.log('res',res)
      self.evensAccount = res;
    },err=>{
      // console.log("err",err)
    })
   }
  
  openSingleNotification(coin,type){
    this.webserve.setSelecetedcoin(coin)
      this.navCtrl.push(TabsPage,{data:type})
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

  goToPricePage(){
    let self = this;
    self.navCtrl.push(MyRewardsPage)
  }
}