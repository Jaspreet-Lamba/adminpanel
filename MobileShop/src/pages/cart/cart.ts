import { Component, OnInit } from '@angular/core';
import { App, NavController, LoadingController, AlertController, ToastController } from 'ionic-angular';
import { RestfullProvider } from '../../providers/restfull/restfull';
import { Http } from '@angular/http';
import { HomePage } from '../home/home';
import { CheckoutPage } from '../checkout/checkout';
import { GlobalFunctionProvider } from '../../providers/global-function/global-function';

@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html'
})
export class CartPage {
  cartDetails;
  cartEmpty = false;
  
  constructor(public app: App, public navCtrl: NavController, private http: Http, public rest  : RestfullProvider, public loadingCtrl: LoadingController, private alertCtrl: AlertController, public globalFunction: GlobalFunctionProvider, public toastCtrl: ToastController){
    this.calculateCartTotal();
  }

  calculateCartTotal() {
  	var discount = 0, cartTotal = 0, gst = 0;
  	this.cartDetails = JSON.parse(localStorage.getItem('cartDetails'));
  	this.cartDetails.forEach(function(cartDetails) {
  		discount += (cartDetails.productSplPrice * cartDetails.productQuantity);
  		cartTotal += (cartDetails.productPrice * cartDetails.productQuantity);
      gst += (cartDetails.productPrice * cartDetails.productGst / 100) * cartDetails.productQuantity;
  	});
  	this.globalFunction.setCartDiscount(discount);
    this.globalFunction.setCartShipping(0);
  	this.globalFunction.setCartGst(gst);
    this.globalFunction.setCartTotal(cartTotal);
    this.globalFunction.setCartWallet(0);
    this.globalFunction.setOrderTotal(cartTotal);
    console.log(this.cartDetails);
  }

  deleteProduct(product) {
  	var cartObj = {}, dummy = [], duplicate = {}, localCart;
    localCart = JSON.parse(localStorage.getItem('cartDetails'));
    this.globalFunction.setCartCount(product.productQuantity, 'delete');
    if(localCart != null && localCart != '') {
      localCart.forEach(function(cart) {
        if(cart.productId != product.productId)
        	dummy.push(cart);
      });
    } 
    duplicate = dummy;
    localStorage.setItem('cartDetails',JSON.stringify(duplicate));
  	if(this.globalFunction.getCartCount() == 0) {
  		this.cartEmpty = true;
  		this.cartDetails = JSON.parse(localStorage.getItem('cartDetails'));
  	} else
  	this.calculateCartTotal();
  }

  checkout() {
  	this.navCtrl.push(CheckoutPage);
  }

  goToHome() {
  	//this.navCtrl.pop();
  	this.navCtrl.setRoot(HomePage);
  }
}
