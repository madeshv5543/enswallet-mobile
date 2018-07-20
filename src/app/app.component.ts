import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { ProfilePage } from '../pages/contact/contact';
import { CreateAccountPage } from '../pages/create-account/create-account';
// import { AddCardPage } from '../pages/add-card/add-card';
//import { AddRewardscardPage } from '../pages/add-rewardscard/add-rewardscard';
// import { LoginPage } from '../pages/login/login';
//import { InstructionsPage } from '../pages/instructions/instructions';

import { MyRewardsPage } from '../pages/my-rewards/my-rewards';
import { NotificationsPage } from '../pages/notifications/notifications';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage =NotificationsPage;
  pages: Array<{title: string, component: any,icon:string}>;

  constructor(public platform: Platform, public menu: MenuController, public statusBar: StatusBar, public splashScreen: SplashScreen) {
   this.initializeApp();

   this.pages = [
      {title: 'Wallet', component: NotificationsPage , icon:'photos'},
      {title: 'ExchangeRate', component: MyRewardsPage, icon:'send'},
      {title: 'Change Password', component: NotificationsPage, icon:'lock'},
      // {title: 'Invite Friends ', component: InviteFriendsPage},
      {title: 'Sign Out', component:CreateAccountPage,icon:'log-out'}
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

  openPage(page) {
    if(page.title == 'Wallet'){
      this.menu.close();
      this.nav.setRoot(page.component);
    }else{
      this.menu.close();
      this.nav.push(page.component);
    }
    
  }

  goToProfilePage(){
    this.menu.close();
    this.nav.push(ProfilePage);
  }
  
  goToNotificationsPage() {
    this.menu.close();
    this.nav.push(NotificationsPage);
  }

  goToWalletPage(){
    this.menu.close();
    this.nav.push(TabsPage,{tabIndex:1});
  }

  goToTopupPage() {
    this.menu.close();
    this.nav.push(TabsPage,{tabIndex:2});
  }

  goToTransferPage() {
    this.menu.close();
    this.nav.push(TabsPage,{tabIndex:3});
  }
  
  goToTransactionsPage() {
    this.menu.close();
    this.nav.push(TabsPage,{tabIndex:4});
  }

  goToCouponsPage() {
    this.menu.close();
    this.nav.push(TabsPage,{tabIndex:5});
  }
}
