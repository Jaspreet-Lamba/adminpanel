import { Component, ViewChild, ViewChildren, QueryList, OnInit } from '@angular/core';
import { App, NavController } from 'ionic-angular';
import { LoadingController, MenuController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
import { RestfullProvider } from '../../providers/restfull/restfull';
import { RegisterPage } from '../register/register'
import { HomePage } from '../home/home';
import { NewsPage} from '../news/news';
import { LocationTrackerProvider } from '../../providers/location-tracker/location-tracker';
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

export class LoginPage implements OnInit{
	loginUser = {
		email :"",
		password : ""
	}
	ngOnInit() {
		localStorage.setItem('userDetails','');
	}
	constructor(public app: App, public rest : RestfullProvider, public nav : NavController, public loadingCtrl: LoadingController, 
		public alertCtrl: AlertController, public menu: MenuController, public locationTracker: LocationTrackerProvider){
		this.menu.enable(false);
	}
	start(){
		this.locationTracker.startTracking();
		// latitude :28.5087314
		// longitude :77.0922313
	}

	stop(){
		this.locationTracker.stopTracking();
	}
	onLogin() {
		
		let loader = this.loadingCtrl.create({
	  	content: "Please wait..."
	  });
	  loader.present();
		this.rest.Login(this.loginUser).subscribe(
			res=>{
				this.onLoginSuccess(res);
				loader.dismiss();
			},err=>{
				this.onLoginError(err);
				loader.dismiss();
			}
		);
	}

	onRegister(){
	  this.nav.push(RegisterPage);
	}
	
	onLoginSuccess(res){
		console.log(res);
		localStorage.setItem('userDetails',JSON.stringify(res));
		this.menu.enable(true);
		let nav = this.app.getRootNav();
		nav.setRoot(NewsPage);
		localStorage.setItem('activeTab','News');
		//this.nav.setRoot(HomePage, {}, {animate: true, direction: 'forward'});
		//this.nav.push(HomePage);
	}
	
	onLoginError(res){
		var data = JSON.parse(res._body);
		let alert = this.alertCtrl.create({
      title: 'LovePoints App',
      subTitle: data.errors[0].error,
      buttons: ['OK']
    });
    alert.present();
	}
	// ionViewDidLeave(){
	// 	this.menu.enable(true);
	// }
}
