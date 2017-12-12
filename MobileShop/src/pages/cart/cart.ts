import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html'
})
export class CartPage {
  cartDetails;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.cartDetails = JSON.parse(localStorage.getItem('cartDetails'));
    console.log(this.cartDetails);
  }
}
