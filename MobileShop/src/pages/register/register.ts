import { Component } from '@angular/core';
import { App, NavController, LoadingController, AlertController } from 'ionic-angular';
import { RestfullProvider } from '../../providers/restfull/restfull';
import { Http } from '@angular/http';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';
import { GlobalFunctionProvider } from '../../providers/global-function/global-function';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})


export class RegisterPage {
  submitAttempt: boolean;
  slideOneForm : FormGroup;
  
  constructor(public app: App, public navCtrl: NavController, private http: Http, public rest  : RestfullProvider, public loadingCtrl: LoadingController, 
    private alertCtrl: AlertController, private formBuilder : FormBuilder, public globalFunction: GlobalFunctionProvider) {
      this.slideOneForm = formBuilder.group({
        firstname: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
        lastname: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
        email: ['', Validators.compose([Validators.maxLength(60), Validators.pattern('[a-zA-Z0-9@.]*'), Validators.required])],
        password: ['', Validators.compose([Validators.maxLength(30), Validators.required])],
        mobile: ['', Validators.compose([Validators.maxLength(10), Validators.pattern('[0-9]*'), Validators.required])],
    });
  }

  onRegister(){
    this.submitAttempt = true;
    if(this.slideOneForm.valid){
      let loader = this.loadingCtrl.create({
        content: "Please wait..."
      });  
      //console.log(this.slideOneForm.value);
      loader.present();
      this.rest.Register(this.slideOneForm.value).subscribe(
        res=>{
          this.onRegisterSuccess(res);
          loader.dismiss();
        },err=>{
          this.onRegisterError(err);
          loader.dismiss();
        }
      );
    }
  }

  onLogin(){
    this.navCtrl.pop();
  }
  
  onRegisterSuccess(res){
    //console.log(res);
    if(res.success == "false") {
      let alert = this.alertCtrl.create({
        title: this.rest.appName,
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
  
  onRegisterError(res){
    let alert = this.alertCtrl.create({
      title: this.rest.appName,
      subTitle: res.message,
      buttons: ['OK']
    });
    alert.present();
  }
}