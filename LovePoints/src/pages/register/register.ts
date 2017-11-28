import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoadingController, MenuController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { RestfullProvider } from '../../providers/restfull/restfull';
import { LoginPage } from '../login/login';
import { HomePage } from '../home/home';


/**
 * Generated class for the RegisterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  User = {
    email :"",
    password : "",
    firstName: "",
    lastName: "",
    long: "",
    lat: ""
  }
  constructor(public nav: NavController, public navParams: NavParams, public rest : RestfullProvider, public loadingCtrl: LoadingController, public alertCtrl: AlertController, public menu: MenuController) {
    this.menu.enable(false);
  }

  onLogin() {
		this.nav.pop();
	}

	onRegister(){
    let loader = this.loadingCtrl.create({
	  	content: "Please wait..."
	  });
	  loader.present();
    this.rest.addUser(this.User).subscribe(
      res=>{
				this.onRegisterSuccess(res);
				loader.dismiss();
			},err=>{
				this.onRegisterError(err);
				loader.dismiss();
			}
    )
  }

  onRegisterSuccess(res) {
    console.log(res);
    localStorage.setItem('userDetails',JSON.stringify(res));
    this.menu.enable(true);
    this.nav.setRoot(HomePage, {}, {animate: true, direction: 'forward'});
    // this.nav.push(HomePage);
  }

  onRegisterError(res){
    var data = JSON.parse(res._body);
		let alert = this.alertCtrl.create({
      title: 'LovePoints App',
      subTitle: data.errors[0].error,
      buttons: ['OK']
    });
    alert.present();
  }

  // ionViewDidLoad() {
  //   this.menu.enable(false);
  // }

  // ionViewDidLeave(){
	// 	this.menu.enable(true);
	// }
}
