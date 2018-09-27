import { Component } from '@angular/core';
import { NavController, MenuController, Events, AlertController, LoadingController } from 'ionic-angular';
import { WebservicProvider } from '../../providers/webservic/webservic';
import { AmChartsService, AmChart } from "@amcharts/amcharts3-angular";

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
  private chart: AmChart;
  public colors = [
    "#FF0F00",
    "#FF6600",
    "#FF9E01",
    "#FCD202",
    "#0D8ECF"
  ]
  public options = {
    "type": "serial",
    "theme": "dark",
    "dataProvider": [
      {
        "token": "USA",
        "visits": 3025,
        "color": "#FF0F00"
      }, {
        "token": "China",
        "visits": 1882,
        "color": "#FF6600"
      }, {
        "token": "Japan",
        "visits": 1809,
        "color": "#FF9E01"
      }, {
        "token": "Germany",
        "visits": 1322,
        "color": "#FCD202"
      }
    ],
    "valueAxes": [{
      "axisAlpha": 0,
      "position": "left",
      "title": "value in USD $",
    }],
    "startDuration": 1,
    "graphs": [{
      "balloonText": "<b>[[category]]: [[value]] $</b>",
      "fillColorsField": "color",
      "fillAlphas": 0.9,
      "lineAlpha": 0.2,
      "type": "column",
      "valueField": "value"
    }],
    "chartCursor": {
      "categoryBalloonEnabled": false,
      "cursorAlpha": 0,
      "zoomable": false
    },
    "categoryAxis": {
      "gridPosition": "start",
      "labelRotation": 45
    },
    "categoryField": "token",
    "export": {
      "enabled": true
    }
  };
  constructor(
    public navCtrl: NavController,
    public webserve:WebservicProvider,
    private menu:MenuController,
    public events:Events,
    public alertCtrl:AlertController,
    public loadingCtrl:LoadingController,
    private AmCharts: AmChartsService) {
    this.gettodayPrice();
    this.getAllBalance();
    this.menu.enable(true);
    this.events.publish('getUser', true);
    // this.getBalance()
    // this.evensBalance();1
  }

  createChart(){
    let dataArray = [];
    let cl =0;
    Object.keys(this.todayPrice).forEach(n => {
      if(n == 'ETH'){
        return;
      }
      let obj = {
        token : n,
        value: 1/this.todayPrice[n],
        color: this.colors[cl]
      }
      dataArray.push(obj);
      cl++;
    })
    this.options.dataProvider = dataArray;
    this.chart = this.AmCharts.makeChart("chartdiv", this.options);
    console.log("chart", this.chart)
  }

  doRefresh(e) {
    this.gettodayPrice();
    this.getAllBalance();
    setTimeout(() => {
      e.complete()
    }, 2000);
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
       this.createChart();
    },err=>{
       console.log(err)
    })
  }

  goToPricePage(){
    let self = this;
    self.navCtrl.push(MyRewardsPage)
  }
}