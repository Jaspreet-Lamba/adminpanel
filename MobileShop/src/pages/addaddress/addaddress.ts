import { Component } from '@angular/core';
import { App, NavController, LoadingController, AlertController, ToastController } from 'ionic-angular';
import { RestfullProvider } from '../../providers/restfull/restfull';
import { Http } from '@angular/http';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HomePage } from '../home/home';
import { AddressPage } from '../address/address';
import { GlobalFunctionProvider } from '../../providers/global-function/global-function';

@Component({
  selector: 'page-addaddress',
  templateUrl: 'addaddress.html'
})


export class AddAddressPage {
  submitAttempt: boolean;
  slideOneForm : FormGroup;
  
  constructor(public app: App, public navCtrl: NavController, private http: Http, public rest  : RestfullProvider, public loadingCtrl: LoadingController, 
    private alertCtrl: AlertController, private formBuilder : FormBuilder, public globalFunction: GlobalFunctionProvider, public toastCtrl: ToastController) {
    this.slideOneForm = formBuilder.group({
        id: [''],
        userId: [''],
        firstName: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
        lastName: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
        email: ['', Validators.compose([Validators.maxLength(60), Validators.pattern('[a-zA-Z0-9@.]*'), Validators.required])],
        mobile: ['', Validators.compose([Validators.maxLength(10), Validators.pattern('[0-9]*'), Validators.required])],
        address: ['', Validators.compose([Validators.required])],
        city: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
        state: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
        country: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
        pincode: ['', Validators.compose([Validators.maxLength(10), Validators.pattern('[0-9]*'), Validators.required])]
    });
    this.slideOneForm.setValue({id: '0' , userId: '1', firstName: 'taran', lastName: 'lamba', email: 'test@gmail.com', mobile: '1231231230', address: 'taran', city: 'taran', state: 'taran', country: 'taran', pincode: '1231231230'});
  }

  
  onAddAddress(){
    this.submitAttempt = true;
    if(this.slideOneForm.valid){
      console.log(this.slideOneForm.value);
      let loader = this.loadingCtrl.create({
        content: "Please wait..."
      });  
      loader.present();
      this.rest.addAddress(this.slideOneForm.value).subscribe(
        res=>{
          this.onAddressUpdateSuccess(res);
          loader.dismiss();
        },err=>{
          this.onAddressUpdateError(err);
          loader.dismiss();
        }
      );
    }
  }

  onAddressUpdateSuccess(res){
    //console.log(res);
    if(res.success == "false") {
      let toast = this.toastCtrl.create({
        message: res.message,
        duration: 3000
      });
      toast.present();
    }else {
      var dummy = [], duplicate = {};
      //var data = JSON.parse(localStorage.getItem('userAddresses'));
      var data = this.globalFunction.getUserAddresses();
      data.forEach(function(address){
        //console.log(address);
        dummy.push(address);
      });
      dummy.push(res.data);
      duplicate = dummy;
      this.globalFunction.setUserAddresses(duplicate);
      //localStorage.setItem('userAddresses',JSON.stringify(duplicate));
      this.navCtrl.setRoot(AddressPage);
    }
  }
  
  onAddressUpdateError(res){
    let toast = this.toastCtrl.create({
      message: res.message,
      duration: 3000
    });
    toast.present();
  }

  onCancel() {
    //this.navCtrl.pop();
    this.navCtrl.setRoot(AddressPage);
  }
}