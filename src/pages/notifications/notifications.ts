import { Component } from '@angular/core';
import { NavController, MenuController, Events, AlertController } from 'ionic-angular';
import { WebservicProvider } from '../../providers/webservic/webservic';

import { TabsPage } from '../tabs/tabs';
import { MyRewardsPage } from '../my-rewards/my-rewards';
import { Title } from '@angular/platform-browser';



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
    public alertCtrl:AlertController) {
    this.gettodayPrice();
    this.getAllBalance()
    this.getTokens();
    this.menu.enable(true);
    this.events.publish('getUser', true);
    // this.getBalance()
    // this.evensBalance();1
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

   getTokens(){
     let self = this;
     self.webserve.getTokens()
     .then(
       (res:any ) => {
         console.log("res", res)
         self.tokens = res.data;
       },
       err => {
         console.log("err",err)
       }
     )
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

  addToken () {
    let self = this;
    let alert = self.alertCtrl.create({
      title: 'Add Token',
      inputs: [
        {
          name: 'tokenAddress',
          placeholder: 'Contract Address',
          type: "text"
        }
      ],
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
        },
        {
          text: "Add",
          handler: data => {
            if(data.tokenAddress) {
              self.addnewToken(data)
            }
          }
        }
      ]
    });
    alert.present()
  }

  addnewToken(data){
    let self = this;
    self.webserve.addTokens(data.tokenAddress)
    .then(
      (res) => {
        console.log("res token",res)
      },
      err => {
        console.log("errr add token ", err)
      }
    )
  }

  goToPricePage(){
    let self = this;
    self.navCtrl.push(MyRewardsPage)
  }
}