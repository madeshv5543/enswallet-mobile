import { Component } from '@angular/core';
import { NavController, MenuController, LoadingController, ToastController } from 'ionic-angular';
import { CreateAccountPage } from '../create-account/create-account';
import { WebservicProvider } from '../../providers/webservic/webservic';
import { NotificationsPage } from '../notifications/notifications';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
	user:any= {};
	public CreateAccount = CreateAccountPage;
  constructor(
		public navCtrl: NavController,
		private menu:MenuController,
		private webService:WebservicProvider,
		private loadCtrl:LoadingController,
		private toastCtrl:ToastController
	) {
    this.menu.enable(false)
  }

  goToCreateAccountPage(){
  		this.navCtrl.push(CreateAccountPage);
  }

	login() {
		let self = this;
		let loading = self.loadCtrl.create();
		loading.present()
		self.webService.login(self.user)
		.then(
			(res:any) => {
				loading.dismiss()
				if(res.status == 200) {
					let data = Object.assign({}, res.data)
					data.password = self.user.password;
					self.webService.saveLocalData(data,res.token);
					self.navCtrl.setRoot(NotificationsPage)
				}else {
					let toast = self.toastCtrl.create({ message : res.message, duration: 2000  })
					toast.present();
				}
			},
			err => {
				loading.dismiss()
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

}

