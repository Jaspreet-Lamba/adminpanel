import { Component } from '@angular/core';
import { App, NavController, LoadingController, AlertController } from 'ionic-angular';
import { RestfullProvider } from '../../providers/restfull/restfull';
import { Http } from '@angular/http';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HomePage } from '../home/home';
import { RegisterPage } from '../register/register';
import { GlobalFunctionProvider } from '../../providers/global-function/global-function';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

export class LoginPage {
  submitAttempt: boolean;
  slideOneForm : FormGroup;
  
  constructor(public app: App, public navCtrl: NavController, private http: Http, public rest  : RestfullProvider, public loadingCtrl: LoadingController, 
    private alertCtrl: AlertController, private formBuilder : FormBuilder, public globalFunction: GlobalFunctionProvider) {
      this.slideOneForm = formBuilder.group({
        email: ['', Validators.compose([Validators.maxLength(60), Validators.pattern('[a-zA-Z0-9@.]*'), Validators.required])],
        password: ['', Validators.compose([Validators.maxLength(30), Validators.required])],
    });
  }

  onLogin(){
    this.submitAttempt = true;
    if(this.slideOneForm.valid){
      let loader = this.loadingCtrl.create({
        content: "Please wait..."
      });  
      console.log(this.slideOneForm.value);
      loader.present();
      this.rest.Login(this.slideOneForm.value).subscribe(
        res=>{
          this.onLoginSuccess(res);
          loader.dismiss();
        },err=>{
          this.onLoginError(err);
          loader.dismiss();
        }
      );
    }
  }

  onRegister(){
    this.navCtrl.push(RegisterPage);
  }
  
  onLoginSuccess(res){
    if(res.status == "false") {
      let alert = this.alertCtrl.create({
        title: 'MobileShop',
        subTitle: res.message,
        buttons: ['OK']
      });
      alert.present();
    }else {
      localStorage.setItem('userDetails',JSON.stringify(res.data));
      let nav = this.app.getRootNav();
      nav.setRoot(HomePage);
      this.globalFunction.getUserName();
    }
  }
  
  onLoginError(res){
    let alert = this.alertCtrl.create({
      title: 'MobileShop',
      subTitle: res.message,
      buttons: ['OK']
    });
    alert.present();
  }
}