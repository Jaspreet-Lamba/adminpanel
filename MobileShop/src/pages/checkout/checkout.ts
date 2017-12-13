import { Component } from '@angular/core';
import { App, NavController, LoadingController, AlertController, ToastController } from 'ionic-angular';
import { RestfullProvider } from '../../providers/restfull/restfull';
import { Http } from '@angular/http';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HomePage } from '../home/home';
import { CartPage } from '../cart/cart';
import { AddressPage } from '../address/address';
import { PaymentPage } from '../payment/payment';
import { GlobalFunctionProvider } from '../../providers/global-function/global-function';

@Component({
  selector: 'page-checkout',
  templateUrl: 'checkout.html'
})


export class CheckoutPage {
  submitAttempt: boolean;
  slideOneForm : FormGroup;
  deliveryAddress;
  userAddresses;
  
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
    //this.deliveryAddress = JSON.parse(localStorage.getItem('deliveryAddress'));
    this.deliveryAddress = this.globalFunction.deliveryAddress;
    if(this.deliveryAddress != null && this.deliveryAddress != '') {
      this.slideOneForm.setValue({id: '0' , userId: this.deliveryAddress.userId, firstName: this.deliveryAddress.firstName, lastName: this.deliveryAddress.lastName, email: this.deliveryAddress.email, mobile: this.deliveryAddress.mobile, address: this.deliveryAddress.address, city: this.deliveryAddress.city, state: this.deliveryAddress.state, country: this.deliveryAddress.country, pincode: this.deliveryAddress.pincode});  
    }

    
  }

  
  onCheckout(){
    this.submitAttempt = true;
    if(this.slideOneForm.valid){
      console.log(this.slideOneForm.value);
      localStorage.setItem('checkoutDetails',JSON.stringify(this.slideOneForm.value));
      this.navCtrl.push(PaymentPage);
    }
  }

  goToAddress() {
    this.navCtrl.push(AddressPage, {
      actionButton: true,
    });
    //this.navCtrl.push(AddressPage);
  }

  onCancel() {
    this.navCtrl.pop();
  }
}