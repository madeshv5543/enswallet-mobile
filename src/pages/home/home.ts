import { Component, ViewChild } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { WebservicProvider } from '../../providers/webservic/webservic';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { NFC, Ndef  } from "@ionic-native/nfc";


import { NgForm } from '@angular/forms';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[WebservicProvider]
})
export class HomePage {
  @ViewChild('focusInput') myInput ;
  public transfer:any ={};
  mimeType = "game/rockpaperscissors";
  public account:any ={
    address:'-',
    balance:0,
    tokenOneSym:'',
    tokenTwoSym:'',
    tokenThreeSym:''
  };
  nfcsubscribe:any;
  public selectedCur:any ;
  public enableNfc:boolean = false;
  constructor(
    public navCtrl: NavController,
    public webserve:WebservicProvider,
    private barcodeScanner: BarcodeScanner,
    private toastCtrl:ToastController,
    private nfc: NFC,
    private ndef: Ndef
  ) {
      this.checkNfc();
       this.getSelecetedCoin();
  }

  doRefresh(e) {
    this.getSelecetedCoin();
    setTimeout(() => {
      e.complete()
    }, 2000);
  }

  checkNfc() {
    this.nfc.enabled()
    .then(res => {
      this.enableNfc = true;
    }, err => {
      this.enableNfc = false;
    })
  }

  setFocus ( ){
    this.myInput.setFocus();
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
   servicecall
   .subscribe(res=>{
     self.account = res;
   },err=>{
      let toast = self.toastCtrl.create({ message: 'Please try after some time.', duration: 2000  });
      toast.present()
   })
  }

  addListenNFC():void {
    this.nfcsubscribe = this.nfc.addMimeTypeListener(this.mimeType,this.onNfc,this.onnfcfailed )
    .subscribe((event) => {
      if(event){
        if(event && event.tag) {
          let msg = this.nfc.bytesToString(event.tag.ndefMessage[0].payload);
          if(msg) {
            this.checkAddress(msg, true)
            this.setFocus();
          }else{
            this.createtoast(`can't find valid address`)
          }
        }else{
          this.createtoast('Cannot find the nfc')
        }
      }
    });
}

onnfcfailed() {
  this.createtoast('nfc failed.Try again ')
}

onNfc (nfcEvent) {
 console.log('Listener added')
}

createtoast(message, duration = 2000) {
  let self = this;
  let toast = self.toastCtrl.create({ message, duration });
  toast.present()
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
    .subscribe((res:any)=>{
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
      self.checkAddress(barcodeData.text)
     }).catch(err => {
          let toast = self.toastCtrl.create({ message: 'Please try after some time.', duration: 2000  });
          toast.present()
     });
  }

  checkbalance(amount) {
    let self = this;
    if(amount){
      if(!(amount <= self.account.balance)) {
        self.transfer.amount='';
        let toast = self.toastCtrl.create({ message: 'Amount should not be greater than balance', duration: 10000  });
        toast.present()
      }
    }
  }



  checkAddress(addr, from=false) {
    let self = this;
    if(!addr) {
      // let toast = self.toastCtrl.create({ message: 'Invalid Address, Please enter a valid address.', duration: 10000  });
      // toast.present()
      return;
    }
    self.webserve.checkAddress(addr).subscribe(
      (res:any)=>{
        if(res.status) {
          this.transfer.address = addr;
          if(from) {
            this.createtoast('Address Detected')
          }
          console.log(addr)
        }else {
          self.transfer.address =""
          let toast = self.toastCtrl.create({ message: 'Invalid Address', duration: 2000  });
          toast.present()
        }
      },
      err=>{
        self.transfer.address =""
       let toast = self.toastCtrl.create({ message: 'Invalid Address', duration: 2000  });
       toast.present()
      }
    )
  }

  ngOnDestroy(){
    if(this.nfcsubscribe){
      this.nfcsubscribe.unsubscribe()
    }
  }
 
}
