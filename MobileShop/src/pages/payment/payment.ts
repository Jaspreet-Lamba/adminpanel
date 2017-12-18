import { Component, OnInit } from '@angular/core';
import { App, NavController, LoadingController, AlertController, ToastController } from 'ionic-angular';
import { RestfullProvider } from '../../providers/restfull/restfull';
import { Http } from '@angular/http';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HomePage } from '../home/home';
import { CheckoutPage } from '../checkout/checkout';
import { OrdersPage } from '../orders/orders';
import { GlobalFunctionProvider } from '../../providers/global-function/global-function';

@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html'
})
export class PaymentPage {
  submitAttempt: boolean;
  slideOneForm : FormGroup;
  loader;
  
  constructor(public app: App, public navCtrl: NavController, private http: Http, public rest  : RestfullProvider, public loadingCtrl: LoadingController, private alertCtrl: AlertController, public globalFunction: GlobalFunctionProvider, public toastCtrl: ToastController, private formBuilder : FormBuilder) {
    this.slideOneForm = formBuilder.group({
        paymentMode: ['cod'],
    });
    this.loader = this.loadingCtrl.create({
      content: "Placing Order..."
    });
  }

  onCancel() {
    this.navCtrl.pop();
  }

  onPayment() {
    this.submitAttempt = true;
    this.loader.present();
    if(this.slideOneForm.valid) {
      console.log(this.slideOneForm.value);
      var checkoutDetails = JSON.parse(localStorage.getItem('checkoutDetails'));
      var cartDetails = JSON.parse(localStorage.getItem('cartDetails'));
      var orderData = {
        date : Date(),
        status : 'Processing',
        user_id : this.globalFunction.isUserloggedIn ? this.globalFunction.userDetails.id : 0,
        user_name : this.globalFunction.isUserloggedIn ? (this.globalFunction.userDetails.firstName + ' ' +this.globalFunction.userDetails.lastName) : (checkoutDetails.firstName + ' ' + checkoutDetails.lastName),
        email : this.globalFunction.isUserloggedIn ? this.globalFunction.userDetails.email : checkoutDetails.email,
        group : this.globalFunction.isUserloggedIn ? 'Logged In' : 'Not Logged In',
        firstName : checkoutDetails.firstName,
        lastName : checkoutDetails.lastName,
        mobile : checkoutDetails.mobile,
        address_email : checkoutDetails.email,
        address : btoa(checkoutDetails.address),
        city : btoa(checkoutDetails.city),
        state : btoa(checkoutDetails.state),
        country : btoa(checkoutDetails.country),
        pincode : checkoutDetails.pincode,
        payment_type : this.slideOneForm.value.paymentMode,
        shipping : this.globalFunction.cartShipping,
        sub_total : this.globalFunction.cartTotal,
        gst : this.globalFunction.cartGst,
        wallet : this.globalFunction.cartWallet,
        discount : this.globalFunction.cartDiscount,
        total : this.globalFunction.orderTotal,
        cartDetails : cartDetails
      };
      
      this.rest.placeOrder(orderData).subscribe(
        res=>{
          this.onOrderSuccess(res);
          this.loader.dismiss();
        },err=>{
          this.onOrderError(err);
          this.loader.dismiss();
        }
      );
    }
  }

  onOrderSuccess(res){
    console.log(res);
    if(res.status == "false") {
      let alert = this.alertCtrl.create({
        title: this.rest.appName,
        subTitle: res.message,
        buttons: ['OK']
      });
      alert.present();
    }else {
      localStorage.setItem('orderDetails',JSON.stringify(res.data));
      this.navCtrl.push(OrdersPage);
    }
  }
  
  onOrderError(res){
    let alert = this.alertCtrl.create({
      title: this.rest.appName,
      subTitle: res.message,
      buttons: ['OK']
    });
    alert.present();
  }
  
}
