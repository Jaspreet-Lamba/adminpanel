import { Component, OnInit } from '@angular/core';
import { App, NavController, LoadingController, AlertController, ToastController } from 'ionic-angular';
import { RestfullProvider } from '../../providers/restfull/restfull';
import { Http } from '@angular/http';
import { HomePage } from '../home/home';
import { CheckoutPage } from '../checkout/checkout';
import { GlobalFunctionProvider } from '../../providers/global-function/global-function';

@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html'
})
export class PaymentPage {
  
  constructor(public app: App, public navCtrl: NavController, private http: Http, public rest  : RestfullProvider, public loadingCtrl: LoadingController, private alertCtrl: AlertController, public globalFunction: GlobalFunctionProvider, public toastCtrl: ToastController){
  }

  onCancel() {
    this.navCtrl.pop();
  }

  onPayment() {
    alert('make payment');
  }
  
}
