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
 private serverUrl:any = 'http://192.168.1.8:3200/api';
//  private serverUrl:any = 'http://localhost:3200/api';
//  private serverUrl:any ="http://ec2-54-179-146-92.ap-southeast-1.compute.amazonaws.com:3200/api";
 private etherscanUrl:any = "https://api-rinkeby.etherscan.io/api?module=account&action=txlist&address="
 private params = "&startblock=0&endblock=99999999&page=1&offset=500&sort=desc&apikey=YourApiKeyToken";
 private evensparams = "&startblock=0&endblock=99999999&page=1&offset=5&sort=desc&apikey=YourApiKeyToken";
 private evenstokenUrl:any ="https://api-rinkeby.etherscan.io/api?module=account&action=tokentx&address="
 private  topriceurl = 'https://min-api.cryptocompare.com/data/price?fsym=USD&tsyms=BTT,ETH,INR,THB,KRW'
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
                   link:`http://rinkeby.etherscan.io/tx/${o.hash}`
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
                  link:`https://rinkeby.etherscan.io/tx/${o.hash}`
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

  // setEthTransactiom(data){
  //    let self = this;
  //   //  let data:any  = {};
  //   //  data.receipt = '0x3e989e298fd15a967501203b21304f786bf1d274f0f006c0cfe67385a82b8140';
  //   //  data.amount =0.01
  //    let tranaction = [];
  //    self.storage.get('eth')
  //    .then((val)=>{
  //     let trans ={
  //       amount:data.amount,
  //       receipt:data.receipt,
  //       link:`https://rinkeby.etherscan.io/tx/${data.receipt}`
  //     }
  //     if(!val){
  //       tranaction.push(trans)
  //       let storeString = JSON.stringify(tranaction);
  //       self.storage.set('eth',storeString)
  //     }else{
  //       tranaction = JSON.parse(val);
  //       if(tranaction.length > 4){
  //         tranaction.splice(4,1,
  //         trans)
  //       }else{
  //         tranaction.push(trans)
  //       }
  //       let storeString = JSON.stringify(tranaction);
  //       self.storage.set('eth',storeString)
  //     }
  //    })
  // }

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
    let promise = new Promise((resolve,reject)=>{
      self.http.get(`${this.serverUrl}/getBalance`)
      .subscribe((result)=>{
        resolve(result)
      },err=>{
           reject(err)
      })
    })
    return promise;
  }

  evensBalance(){
    let self = this;
    let promise = new Promise((resolve,reject)=>{
      self.http.get(`${this.serverUrl}/evensBalance`)
      .subscribe((result)=>{
        resolve(result)
      },err=>{
           reject(err)
      })
    })
    return promise;
  }
   

  checkAddress(add){
    let self = this;
    let promise = new Promise((resolve,reject)=>{
      self.http.get(`${this.serverUrl}/checkAdddress/${add}`)
      .subscribe(
        (res:any)=>{
          resolve(res.status);
        },
        err=>{
          reject(false);
        }
      )
    })
    return promise;
  
  }


  Transfer(data){
    let self = this;
    let promise = new Promise((resolve,reject)=>{
     self.http.post(`${self.serverUrl}/transfer`,data)
     .subscribe((result)=>{
         resolve(result)
     },err=>{
         reject(err)
     })
    })
    return promise;
  }

  TransferEns(data){
    let self = this;
    let promise = new Promise((resolve,reject)=>{
     self.http.post(`${self.serverUrl}/sendEns`,data)
     .subscribe((result)=>{
         resolve(result)
     },err=>{
         reject(err)
     })
    })
    return promise;
  }
  
   getTodayPrice (){
     let self = this;
     let promise = new Promise((resolve,reject)=>{
        self.http.get(self.topriceurl)
        .subscribe(res=>{
          resolve(res);
        },err=>{
          reject(err)
        })
     })
     return promise;
   }

  getAllBalance(){
    let self = this;
    let promise = new Promise((resolve,reject)=>{
      self.http.get(`${self.serverUrl}/allBalance`)
      .subscribe(res=>{
        resolve(res)
      },err=>{
        reject(err)
      })
    })
    return promise;
  }
  

  getTokenOneBalance(){
    let self = this;
    let promise = new Promise((resolve,reject)=>{
      self.http.get(`${self.serverUrl}/tokenOneBalance`)
      .subscribe(res=>{
        resolve(res)
      },err=>{
        reject(err)
      })
    })
    return promise;
  }

  getTokenTwoBalance(){
    let self = this;
    let promise = new Promise((resolve,reject)=>{
      self.http.get(`${self.serverUrl}/tokenTwoBalance`)
      .subscribe(res=>{
        resolve(res)
      },err=>{
        reject(err)
      })
    })
    return promise;
  }

  getTokenThreeBalance(){
    let self = this;
    let promise = new Promise((resolve,reject)=>{
      self.http.get(`${self.serverUrl}/tokenThreeBalance`)
      .subscribe(res=>{
        resolve(res)
      },err=>{
        reject(err)
      })
    })
    return promise;
  }

  TransferTokenOne(data){
    let self = this;
    let promise = new Promise((resolve,reject)=>{
     self.http.post(`${self.serverUrl}/sendTokenOne`,data)
     .subscribe((result)=>{
         resolve(result)
     },err=>{
         reject(err)
     })
    })
    return promise;
  }

  TransferTokenTwo(data){
    let self = this;
    let promise = new Promise((resolve,reject)=>{
     self.http.post(`${self.serverUrl}/sendTokenTwo`,data)
     .subscribe((result)=>{
         resolve(result)
     },err=>{
         reject(err)
     })
    })
    return promise;
  }

  TransferTokenThree(data){
    let self = this;
    let promise = new Promise((resolve,reject)=>{
      self.http.post(`${self.serverUrl}/sendTokenThree`,data)
        .subscribe((result)=>{
            resolve(result)
        },err=>{
            reject(err)
        })
    })
    return promise;
  }

  createAccont(data){
    let self = this;
    let promise = new Promise((resolve,reject) => {
      self.http.post(`${self.serverUrl}/signUp`,data)
      .subscribe((result)=>{
          resolve(result)
      },err=>{
          reject(err)
      })
    })
    return promise;
  }

  login(data) {
    let self = this;
    let promise = new Promise((resolve, reject) => {
      self.http.post(`${self.serverUrl}/login`,data)
      .subscribe((res) => {
        resolve(res)
      },
      err => {
        reject(err
        )
      })
    })
    return promise;
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

  getTokens() {
    let self = this;
    let promise = new Promise((resolve,reject) => {
       self.http.get(`${self.serverUrl}/tokens`)
       .subscribe(
         res => {
           resolve(res)
         },
         err => {
           reject(err)
         }
       )
    })
    return promise;
  }

  addTokens(address) {
    let self = this;
    let promise = new Promise((resolve, reject) => {
      self.http.post(`${self.serverUrl}/addToken/${address}`,{})
      .subscribe(
        res => {
          resolve(res)
        },
        err => {
          reject(err)
        }
      )
    })
    return promise;
  }

  getUserInfo() {
    let self = this;
    let promise = new Promise((resolve,reject) => {
      self.http.get(`${self.serverUrl}/user`)
      .subscribe((res) => {
        resolve(res)
      },
      err => {
        reject(err)
      })
    })
    return promise;
  }
}
