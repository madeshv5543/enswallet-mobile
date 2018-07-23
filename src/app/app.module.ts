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

import { WalletPage } from '../pages/wallet/wallet';
import { ProfilePage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { TopupPage } from '../pages/topup/topup';
import { TransactionsPage } from '../pages/transactions/transactions';
import { TransferPage } from '../pages/transfer/transfer';
import { CouponsPage } from '../pages/coupons/coupons';
import { AddGiftcardPage } from '../pages/add-giftcard/add-giftcard';
import { AddRewardscardPage } from '../pages/add-rewardscard/add-rewardscard';
import { LoginPage } from '../pages/login/login';
import { ForgotPasswordPage } from '../pages/forgot-password/forgot-password';
import { TopupThanksPage } from '../pages/topup-thanks/topup-thanks';
import { TransferThanksPage } from '../pages/transfer-thanks/transfer-thanks';
import { TransferFriendThanksPage } from '../pages/transfer-friend-thanks/transfer-friend-thanks';
import { myCouponPage } from '../pages/my-coupon/my-coupon';
import { InstructionsPage } from '../pages/instructions/instructions';
import { NotificationsPage } from '../pages/notifications/notifications';
import { SingleNotificationPage } from '../pages/single-notification/single-notification';
import { InviteFriendsPage } from '../pages/invite-friends/invite-friends';
import { CreateAccountPage } from '../pages/create-account/create-account';
import { AddCardPage } from '../pages/add-card/add-card';
import { SelectedGiftCardPage } from '../pages/selected-gift-card/selected-gift-card';
import { SelectedRewardsCardPage } from '../pages/selected-rewards-card/selected-rewards-card';
import { SelectedCardTopupPage } from '../pages/selected-card-topup/selected-card-topup';
import { SelectedCardTransferPage } from '../pages/selected-card-transfer/selected-card-transfer';
import { PointsToAmountPage } from '../pages/points-to-amount/points-to-amount';
import { PTAThanksPage } from '../pages/pta-thanks/pta-thanks';
import { MyPointsPage } from '../pages/my-points/my-points';
import { MyRewardsPage } from '../pages/my-rewards/my-rewards';
import { SingleRewardPage } from '../pages/single-reward/single-reward';
import { MyCataloguePage} from '../pages/my-catalogue/my-catalogue';
import { RewardRedemptionPage } from '../pages/reward-redemption/reward-redemption';
import { RRThanksPage } from '../pages/rr-thanks/rr-thanks';

import  {EqualValidator} from "../pages/create-account/EqualValidator";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { WebservicProvider } from '../providers/webservic/webservic';

@NgModule({
  declarations: [
    MyApp,
    WalletPage,
    ProfilePage,
    HomePage,
    TopupPage,
    TransactionsPage,
    AddGiftcardPage,
    AddRewardscardPage,
    TransferPage,
    CouponsPage,
    LoginPage,
    TabsPage,
    ForgotPasswordPage,
    myCouponPage,
    TransferThanksPage,
    TransferFriendThanksPage,
    InstructionsPage,
    NotificationsPage,
    SingleNotificationPage,
    TopupThanksPage,
    InviteFriendsPage,
    CreateAccountPage,
    AddCardPage,
    SelectedGiftCardPage,
    SelectedRewardsCardPage,
    SelectedCardTopupPage,
    SelectedCardTransferPage,
    PointsToAmountPage,
    PTAThanksPage,
    MyPointsPage,
    MyRewardsPage,
    SingleRewardPage,
    MyCataloguePage,
    RewardRedemptionPage,
    RRThanksPage,
    EqualValidator
        ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxQRCodeModule,
    InterceptorModule,
    IonicModule.forRoot(MyApp, {
      tabsHideOnSubPages:true
   }),
   IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WalletPage,
    ProfilePage,
    HomePage,
    TopupPage,
    TransactionsPage,
    TransferPage,
    CouponsPage,
    AddGiftcardPage,
    AddRewardscardPage,
    LoginPage,
    TabsPage,
    ForgotPasswordPage,
    myCouponPage,
    TransferThanksPage,
    TransferFriendThanksPage,
    InstructionsPage,
    NotificationsPage,
    SingleNotificationPage,
    TopupThanksPage,
    InviteFriendsPage,
    CreateAccountPage,
    AddCardPage,
    SelectedGiftCardPage,
    SelectedRewardsCardPage,
    SelectedCardTopupPage,
    SelectedCardTransferPage,
    PointsToAmountPage,
    PTAThanksPage,
    MyPointsPage,
    MyRewardsPage,
    SingleRewardPage,
    MyCataloguePage,
    RewardRedemptionPage,
    RRThanksPage
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
  ]
})
export class AppModule {}
