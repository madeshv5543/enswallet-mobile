import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WebservicProvider } from '../../providers/webservic/webservic';

import { TabsPage } from '../tabs/tabs';



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
  constructor(public navCtrl: NavController,public webserve:WebservicProvider) {
    this.gettodayPrice();
    this.getAllBalance()
    // this.getBalance()
    // this.evensBalance();
  }

  

  getBalance(){
    let self = this;
    self.webserve.getBalance()
    .then(res=>{
      console.log('res',res)
      self.etherAccount = res;
    },err=>{
      console.log("err",err)
    })
   }

   getAllBalance (){
     let self = this; 
     self.webserve.getAllBalance()
     .then(res=>{
      self.allBalance = res;
     },
    err=>{
     
    })
   }

   evensBalance(){
    let self = this;
    self.webserve.evensBalance()
    .then(res=>{
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
    .then(res=>{
       self.todayPrice = res;
    },err=>{
       console.log(err)
    })
  }
}