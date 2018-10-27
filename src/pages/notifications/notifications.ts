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
    "dataDateFormat": "DD-MMM-YYYY",
    "dataProvider": [],
    "valueAxes": [{
      "id": "v1",
      "axisAlpha": 0,
      "position": "left",
      "title": "ETH in USD",
    }],
    "balloon": {
      "borderThickness": 0.5,
      "shadowAlpha": 0
    },
    "graphs": [ {
      "id": "g1",
      "balloon": {
        "drop": true,
        "adjustBorderColor": false,
        "color": "#ffffff",
        "type": "smoothedLine"
      },
      "fillAlphas": 0.2,
      "bullet": "round",
      "bulletBorderAlpha": 0.5,
      "bulletColor": "#FFFFFF",
      "bulletSize": 2,
      "hideBulletsCount": 50,
      "lineThickness": 2,
      "title": "red line",
      "useLineColorForBulletBorder": true,
      "valueField": "value",
      "balloonText": "<span style='font-size:8px;'>[[value]]</span>"
    } ],
    "startDuration": 1,
    "chartCursor": {
      "valueLineEnabled": true,
      "valueLineBalloonEnabled": true,
      "cursorAlpha": 0,
      "zoomable": false
    },
    "categoryAxis": {
      "gridPosition": "start",
      "labelRotation": 30,
      "dashLength": 0,
      "minorGridEnabled": true
    },
    "categoryField": "date",
    "export": {
      "enabled": false
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

  createChart(data = []){
    this.options.dataProvider = data;
    this.chart = this.AmCharts.makeChart("chartdiv", this.options);
    console.log("chart", this.chart)
  }
 
  ngAfterViewInit(){
    this.addlistenerchart()
    this.getChartDate()
  }

  addlistenerchart(){
    let self = this;
    self.AmCharts.addInitHandler(function(chart) {
      console.log("axis values",chart.valueAxes[1]) ;
    })
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
    },err=>{
       console.log(err)
    })
  }

  getChartDate() {
    let self = this;
    self.webserve.getChartDate()
    .subscribe( (res:any) => {
      self.createChart(res.data)
    },
    err =>{
      self.createChart()
    })
  }

  goToPricePage(){
    let self = this;
    self.navCtrl.push(MyRewardsPage)
  }
}