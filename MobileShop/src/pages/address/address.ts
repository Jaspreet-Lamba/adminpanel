import { Component } from '@angular/core';
import { App, NavController, LoadingController, AlertController, ToastController } from 'ionic-angular';
import { RestfullProvider } from '../../providers/restfull/restfull';
import { Http } from '@angular/http';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HomePage } from '../home/home';
import { GlobalFunctionProvider } from '../../providers/global-function/global-function';

@Component({
  selector: 'page-address',
  templateUrl: 'address.html'
})


export class AddressPage {
  submitAttempt: boolean;
  slideOneForm : FormGroup;
  
  constructor(public app: App, public navCtrl: NavController, private http: Http, public rest  : RestfullProvider, public loadingCtrl: LoadingController, 
    private alertCtrl: AlertController, private formBuilder : FormBuilder, public globalFunction: GlobalFunctionProvider, public toastCtrl: ToastController) {
    // this.slideOneForm = formBuilder.group({
    //   id: [''],
    //   firstname: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
    //   lastname: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
    //   email: ['', Validators.compose([Validators.maxLength(60), Validators.pattern('[a-zA-Z0-9@.]*'), Validators.required])],
    //   password: ['', Validators.compose([Validators.maxLength(30), Validators.required])],
    //   mobile: ['', Validators.compose([Validators.maxLength(10), Validators.pattern('[0-9]*'), Validators.required])],
    // });
    //this.setUserProfile();
  }

  setUserProfile() {
    let loader = this.loadingCtrl.create({
      content: "Fetching Profile..."
    });
    loader.present();
    let userDetails = JSON.parse(localStorage.getItem('userDetails'));
    console.log(userDetails);
    this.slideOneForm.setValue({id: userDetails.id ,firstname: userDetails.firstName, lastname: userDetails.lastName, email: userDetails.email,  password: userDetails.password, mobile: userDetails.mobileNumber});
    loader.dismiss();
  }

  onProfileUpdate(){
    this.submitAttempt = true;
    if(this.slideOneForm.valid){
      // console.log(this.slideOneForm.value);
      let loader = this.loadingCtrl.create({
        content: "Updating Profile..."
      });  
      //console.log(this.slideOneForm.value);
      loader.present();
      this.rest.updateUserProfile(this.slideOneForm.value).subscribe(
        res=>{
          this.onProfileUpdateSuccess(res);
          loader.dismiss();
        },err=>{
          this.onProfileUpdateError(err);
          loader.dismiss();
        }
      );
    }
  }

  onProfileUpdateSuccess(res){
    //console.log(res);
    if(res.success == "false") {
      let toast = this.toastCtrl.create({
        message: res.message,
        duration: 3000
      });
      toast.present();
    }else {
      localStorage.setItem('userDetails',JSON.stringify(res.data));
      let nav = this.app.getRootNav();
      this.globalFunction.getUserName();
      let toast = this.toastCtrl.create({
        message: 'Profile updated successfully',
        duration: 3000
      });
      toast.present();
  
      //nav.setRoot(HomePage);
    }
  }
  
  onProfileUpdateError(res){
    let toast = this.toastCtrl.create({
      message: res.message,
      duration: 3000
    });
    toast.present();
  }

  navigateToHome() {
    this.navCtrl.setRoot(HomePage);
  }
}