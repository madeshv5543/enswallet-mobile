import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
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
  constructor(public navCtrl: NavController,private menu:MenuController,private webService:WebservicProvider) {
    this.menu.enable(false)
  }

  goToCreateAccountPage(){
  		this.navCtrl.push(CreateAccountPage);
  }

	login(){
		let self = this;
		self.webService.login(self.user)
		.then(
			(res:any) => {
				if(res.status == 200) {
					let data = Object.assign({}, res.data)
					data.password = self.user.password;
					self.webService.saveLocalData(data,res.token);
					self.navCtrl.setRoot(NotificationsPage)
				}else{
					alert(res.message)
				}
			},
			err => {
				console.log("error")
			}
		)
	}

}

