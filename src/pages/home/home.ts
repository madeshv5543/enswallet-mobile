import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { WebservicProvider } from '../../providers/webservic/webservic';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

import { NgForm } from '@angular/forms';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[WebservicProvider]
})
export class HomePage {
  public transfer:any ={};
  public account:any ={
    address:'-',
    balance:0,
    tokenOneSym:'',
    tokenTwoSym:'',
    tokenThreeSym:''
  };
  public selectedCur:any ;
  constructor(
    public navCtrl: NavController,
    public webserve:WebservicProvider,
    private barcodeScanner: BarcodeScanner,
    private toastCtrl:ToastController
  ) {
       this.getSelecetedCoin();
  }


  async getSelecetedCoin(){
    this.selectedCur = await this.webserve.getSelectedcoinpromise()
    this.getBalance()
    // this.webserve.getEthTransaction()
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
  //  if(this.selectedCur == 'Etheriun'){
  //   servicecall = self.webserve.getBalance()
  //  }
  //  if(this.selectedCur == 'evenscoin'){
  //   servicecall = self.webserve.evensBalance()
  //  }
   servicecall
   .then(res=>{
     self.account = res;
   },err=>{
      let toast = self.toastCtrl.create({ message: 'Please try after some time.', duration: 2000  });
      toast.present()
   })
  }

  transferAmount(f:NgForm){
    let self = this;
    let data ={
      transferTo:f.value.address,
      amount:f.value.amount
    }
    let tranApi:any;
    switch(self.selectedCur){
      case 'evenscoin':
      tranApi = self.webserve.TransferEns(data)
      break;
      case 'tokenOne':
      tranApi = self.webserve.TransferTokenOne(data)
      break;
      case 'tokenTwo':
      tranApi = self.webserve.TransferTokenTwo(data)
      break;
      case 'tokenThree':
      tranApi = self.webserve.TransferTokenThree(data)
      break;
      default:
      tranApi = self.webserve.Transfer(data)
    }
    tranApi
    .then((res:any)=>{
      console.log("response",res)
      if(res.recepit){
        let toast = self.toastCtrl.create({ message: 'Transaction Completed Successfully', duration: 2000  });
        toast.present()
        self.getBalance()
      }else{
        let toast = self.toastCtrl.create({ message: 'Transaction Failed', duration: 2000  });
        toast.present()
      }
     
    },err=>{
      let toast = self.toastCtrl.create({ message: 'Please try after some time.', duration: 2000  });
      toast.present()
    })
  }

   scanQr(){
    let self = this;
    this.barcodeScanner.scan().then(barcodeData => {
       self.webserve.checkAddress(barcodeData.text).then(
         (res)=>{
          this.transfer.address = barcodeData.text;
          console.log(barcodeData.text)
         },
         err=>{
          let toast = self.toastCtrl.create({ message: 'Invalid Address', duration: 2000  });
					toast.present()
         }
       )
     }).catch(err => {
          let toast = self.toastCtrl.create({ message: 'Please try after some time.', duration: 2000  });
          toast.present()
     });
  }
 
}
