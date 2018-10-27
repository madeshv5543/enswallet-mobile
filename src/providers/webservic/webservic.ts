import { HttpClient } from '@angular/common/http'; 
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import * as moment from 'moment-timezone';

/*
  Generated class for the WebservicProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WebservicProvider {
//  private serverUrl:any = 'http://192.168.1.9:3200/api';
//  private serverUrl:any = 'http://localhost:3200/api';
 private serverUrl:any ="http://wallet.evenscoin.io:3200/api";
 private etherscanUrl:any = "https://api.etherscan.io/api?module=account&action=txlist&address="
 private params = "&startblock=0&endblock=99999999&page=1&offset=500&sort=desc&apikey=YourApiKeyToken";
 private evensparams = "&startblock=0&endblock=99999999&page=1&offset=5&sort=desc&apikey=YourApiKeyToken";
 private evenstokenUrl:any ="https://api.etherscan.io/api?module=account&action=tokentx&address="
 private topriceurl = 'https://min-api.cryptocompare.com/data/price?fsym=USD&tsyms=BTT,ETH,INR,THB,KRW'
 private exploreUrl = 'http://explorer.evenscoin.io'
 private selectedCoin:any;
 private USDvalue :any = {};
  constructor(public http: HttpClient,private storage: Storage) {
    //  this.updateCurrence();
  }

  setSelecetedcoin(coin){
    let self = this;
    this.selectedCoin =coin;
    self.storage.set('selectedcoin',coin)
  }

  getEthTransaction(address){
    let self = this;
    let promise = new Promise((resolve,reject)=>{
      self.http.get(`${self.etherscanUrl}${address}${self.params}`)
      .subscribe((res:any)=>{
        var temarr = [];
        if(res.result){
          if(res.result.length){
            for(let j =0;j<res.result.length;j++){
               if(temarr.length > 4){
                 break;
               }
               let o = Object.assign({},res.result[j]);
               if(o.value != 0){
                //  console.log(o.timeStamp)
                 let mode =o.from.toUpperCase() == address.toUpperCase()?'Sent':'Received';
                //  let status = o.txreceipt_status == 1?'Success':'Failure';
                 let amount:any = o.value/1e18 ;
                 let time = new Date(parseInt(o.timeStamp))
                 console.log("time",time)
                 let obj ={
                   amount :parseFloat(amount).toFixed(3),
                   date:moment.tz(parseInt(o.timeStamp)*1000,'Asia/Kolkata').format('DD-MMM-YYYY'),
                   mode:mode,
                  //  status:status,
                   receipt:o.hash,
                   link:`http://etherscan.io/tx/${o.hash}`
               }
               temarr.push(obj)
               }
            }
            resolve(temarr)
          }else{
            resolve([])
          }
        }else{
          resolve([])
        }
        
      },err=>{
        alert('Something Went Wrong.')
      })
      // self.storage.get('eth')
      // .then((val)=>{
      //   console.log("value data",val)
      //  if(!val){
      //    resolve([]) ;
      //  }else{
      //    resolve(JSON.parse(val))
      //  }
      // })
    })
   return promise;
  }

  getTokenTransaction(address){
    let self = this;
    let promise = new Promise((resolve,reject)=>{
      self.http.get(`${self.evenstokenUrl}${address}${self.evensparams}`)
      .subscribe((res:any)=>{
        if(res.result){
          if(res.result.length){
            let temarr = res.result.map(function(o){
              let mode =o.from.toUpperCase() == address.toUpperCase()?'Sent':'Received';
              let status = o.txreceipt_status == 1?'Success':'Failure';
              let amount:any = o.value/1e18 ;
             //  amount = (amount * 100 ) / 100;
              let obj ={
               amount :parseFloat(amount).toFixed(3),
                  date:moment.tz(parseInt(o.timeStamp)*1000,'Asia/Kolkata').format('DD-MMM-YYYY'),
                  mode:mode,
                  status:status,
                  receipt:o.hash,
                  link:`https://etherscan.io/tx/${o.hash}`
              }
              return obj;
            })
            resolve(temarr)
          }else{
            resolve([])
          }
        }else{
          resolve([])
        }
        
      },err=>{
        alert('Something Went Wrong.')
      })
      // self.storage.get('eth')
      // .then((val)=>{
      //   console.log("value data",val)
      //  if(!val){
      //    resolve([]) ;
      //  }else{
      //    resolve(JSON.parse(val))
      //  }
      // })
    })
   return promise;
  }

  getSelectedcoinpromise(){
    let promise = new Promise((resolve,reject)=>{
      if(!this.selectedCoin){
        this.storage.get('selectedcoin')
        .then(
          res=>{
            this.selectedCoin = res;
            resolve(this.selectedCoin);
          }
        )
      }else{
        resolve(this.selectedCoin);
      }
    })
    return promise;
    
  }

  getSelectedcoin (){
  if(!this.selectedCoin){
    this.storage.get('selectedcoin')
    .then(
      res=>{
        this.selectedCoin = res;
        return this.selectedCoin;
      }
    )
  }else{
    return this.selectedCoin;
  }
  }

  getUsedValue(){
    return this.USDvalue.USD;
  }

  getBalance(){
    let self = this;
    return self.http.get(`${this.serverUrl}/getBalance`)
  }

  evensBalance(){
    let self = this;
    return  self.http.get(`${this.serverUrl}/evensBalance`)
  }
   

  checkAddress(add){
    let self = this;
    return  self.http.get(`${this.serverUrl}/checkAdddress/${add}`)
  }


  Transfer(data){
    let self = this;
    return self.http.post(`${self.serverUrl}/transfer`,data)
  }

  TransferEns(data){
    let self = this;
    return self.http.post(`${self.serverUrl}/sendEns`,data)
  }
  
   getTodayPrice (){
     let self = this;
     return  self.http.get(self.topriceurl)
   }

  getAllBalance(){
    let self = this;
    return  self.http.get(`${self.serverUrl}/allBalance`)
  }
  

  getTokenOneBalance(){
    let self = this;
    return  self.http.get(`${self.serverUrl}/tokenOneBalance`)
  }

  getTokenTwoBalance(){
    let self = this;
    return  self.http.get(`${self.serverUrl}/tokenTwoBalance`)
  }

  getTokenThreeBalance(){
    let self = this;
    return  self.http.get(`${self.serverUrl}/tokenThreeBalance`)
  }

  TransferTokenOne(data){
    let self = this;
    return self.http.post(`${self.serverUrl}/sendTokenOne`,data)
  }

  TransferTokenTwo(data){
    let self = this;
    return self.http.post(`${self.serverUrl}/sendTokenTwo`,data)
  }

  TransferTokenThree(data){
    let self = this;
    return  self.http.post(`${self.serverUrl}/sendTokenThree`,data)
  }

  createAccont(data){
    let self = this;
    return  self.http.post(`${self.serverUrl}/signUp`,data)
  }

  login(data) {
    let self = this;
    return  self.http.post(`${self.serverUrl}/login`,data)
  }

  saveLocalData(data,token){
    let self = this;
    self.storage.set('user',JSON.stringify(data))
    self.storage.set('token',token)
  }

  getStoredData(){
    let self = this;
    let promise = new Promise((resolve,reject) => {
      self.storage.get('user')
      .then((val)=>{
        console.log("value data",val)
       if(!val){
         resolve(null) ;
       }else{
         resolve(JSON.parse(val))
       }
      })
    })
    return promise;
  }

  getTokenTxList(tkaddr, addr){
    let self = this;
    let promise = new Promise((resolve, reject) => {
      self.http.get(`${self.exploreUrl}/tokenTransaction?tkaddr=${tkaddr}&addr=${addr}&length=5`)
      .subscribe(
        (res:any) => {
          if(res && res.data) {
            if(res.data.length) {
              let temArr = res.data.map((o:any) => {
              let mode =o.from.toUpperCase() == addr.toUpperCase()?'Sent':'Received';
              let obj ={
                amount :parseFloat(o.value).toFixed(3),
                    date:moment.tz(parseInt(o.timestamp)*1000,'Asia/Kolkata').format('DD-MMM-YYYY'),
                    mode:mode,
                    receipt:o.hash,
                    link:`${self.exploreUrl}/tx/${o.hash}`
                }
              return obj;
              })
              resolve(temArr)
            }
          }else {
            resolve([])
          }
        },
        err => {
          resolve([])
        }
      )
    })
    return promise;
  }

  getUserInfo() {
    let self = this;
    return  self.http.get(`${self.serverUrl}/user`)
  }
}
