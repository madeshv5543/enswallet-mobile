import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { IonicStorageModule } from '@ionic/storage';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Clipboard } from '@ionic-native/clipboard';
import { InterceptorModule } from '../providers/webservic/interceptor';
import { Network } from '@ionic-native/network';
import { AmChartsModule } from "@amcharts/amcharts3-angular";

import { WalletPage } from '../pages/wallet/wallet';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { TopupPage } from '../pages/topup/topup';
import { LoginPage } from '../pages/login/login';
import { ForgotPasswordPage } from '../pages/forgot-password/forgot-password';
import { NotificationsPage } from '../pages/notifications/notifications';
import { CreateAccountPage } from '../pages/create-account/create-account';
import { AddCardPage } from '../pages/add-card/add-card';
import { MyRewardsPage } from '../pages/my-rewards/my-rewards';
import { MyCataloguePage} from '../pages/my-catalogue/my-catalogue';
import { QuickPayPage } from '../pages/quick-pay/quick-pay'
import { CouponsPage } from '../pages/coupons/coupons';

import  {EqualValidator} from "../pages/create-account/EqualValidator";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { WebservicProvider } from '../providers/webservic/webservic';
import { NFC, Ndef } from '@ionic-native/nfc';

@NgModule({
  declarations: [
    MyApp,
    WalletPage,
    HomePage,
    TopupPage,
    LoginPage,
    TabsPage,
    CouponsPage,
    ForgotPasswordPage,
    NotificationsPage,
    CreateAccountPage,
    AddCardPage,
    MyRewardsPage,
    MyCataloguePage,
    QuickPayPage,
    EqualValidator
        ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxQRCodeModule,
    InterceptorModule,
    AmChartsModule,
    IonicModule.forRoot(MyApp, {
      tabsHideOnSubPages:true
   }),
   IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WalletPage,
    HomePage,
    TopupPage,
    LoginPage,
    TabsPage,
    ForgotPasswordPage,
    NotificationsPage,
    CreateAccountPage,
    AddCardPage,
    CouponsPage,
    MyRewardsPage,
    MyCataloguePage,
    QuickPayPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    InAppBrowser,
    Clipboard,
    Network,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    WebservicProvider,
    NFC,
    Ndef
  ]
})
export class AppModule {}
