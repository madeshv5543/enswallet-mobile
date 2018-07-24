import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav, Events, ToastController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';
// import { AddCardPage } from '../pages/add-card/add-card';
//import { AddRewardscardPage } from '../pages/add-rewardscard/add-rewardscard';
// import { LoginPage } from '../pages/login/login';
//import { InstructionsPage } from '../pages/instructions/instructions';

import { MyRewardsPage } from '../pages/my-rewards/my-rewards';
import { NotificationsPage } from '../pages/notifications/notifications';
import { WebservicProvider } from '../providers/webservic/webservic';
import { LoginPage } from '../pages/login/login';
import { MyCataloguePage} from '../pages/my-catalogue/my-catalogue';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage:any;
  pages: Array<{title: string, component: any,icon:string}>;
  public user:any ={};
  constructor(public platform: Platform, 
    public menu: MenuController, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen,
    private webservice:WebservicProvider,
    private storage:Storage,
    public events: Events,
    private toastCtrl: ToastController
  ) {
   this.initializeApp();
   this.setRootPage()
   this.getUserInfo()
   events.subscribe('user:logout', (status) => {
     let toast = this.toastCtrl.create({ message: 'Access token Expired.Please login to get access token', duration: 2000})
     toast.present();
     this.logOut()
   });   
   this.pages = [
      {title: 'Account', component: NotificationsPage , icon:'photos'},
      {title: 'ExchangeRate', component: MyRewardsPage, icon:'send'},
      {title: 'Change Password', component: NotificationsPage, icon:'lock'},
      // {title: 'Invite Friends ', component: InviteFriendsPage},
      {title: 'Sign Out', component:LoginPage,icon:'log-out'}
   ];
  }
  initializeApp(){
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      // this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  setRootPage(){
    let self = this;
    self.webservice.getStoredData()
    .then((res) => {
      if(!res){
        this.rootPage = LoginPage;
      }else{
        this.rootPage = NotificationsPage
      }
    })
  }

  openPage(page) {
    if(page.title == 'Account'){
      this.menu.close();
      this.nav.setRoot(page.component);
    }else if(page.title == 'Sign Out') {
      this.logOut()
    }
    else{
      this.menu.close();
      this.nav.push(page.component);
    }
    
  }

  getUserInfo(){
    let self = this;
    self.webservice.getUserInfo()
    .then(
      (res:any) => {
        if(res.status == 200) {
          console.log("user",res)
          self.user = res.data;
				}else {
					let toast = self.toastCtrl.create({ message : res.message, duration: 2000  })
					toast.present();
				}
      },
      err => {
        if('error' in err){
          if(err.error.status){
            let toast = self.toastCtrl.create({ message: err.error.message, duration: 2000  });
            toast.present()
          }
        }
        else {
					let toast = self.toastCtrl.create({ message: 'Please try after some time.', duration: 2000  });
					toast.present()
        }
      }
    )

  }

  goToprofile(){
    let self = this;
    this.nav.push(MyCataloguePage)
  }

  logOut(){
    this.menu.close()
    this.storage.clear();
    this.nav.setRoot(LoginPage);
  }
}
