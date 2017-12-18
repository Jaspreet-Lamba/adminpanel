import { Injectable, NgZone } from '@angular/core';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscriber } from 'rxjs/Subscriber';
import { Subscribable, Observable } from 'rxjs/Observable';

/*
  Generated class for the GlobalFunctionProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class GlobalFunctionProvider {

  public isUserloggedIn: boolean = false;
  public userName: string;
  public userDetails;
  public deliveryAddress;
  public cartCount = 0;

  public cartDiscount = 0;
  public cartShipping = 0;
  public cartTotal = 0;
  public cartGst = 0;
  public cartWallet = 0;
  public orderTotal = 0;

  public slideOneForm : FormGroup;

  constructor(public zone: NgZone, private formBuilder : FormBuilder) {
    this.clearCartCount();
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
  }

  checkUserName(): Observable <any> {
    let userName = JSON.parse(localStorage.getItem('userDetails'));
    if(userName) {
      this.userDetails = userName;
      var name = userName.firstName + " " + userName.lastName;
      return Observable.of(name);
    }
    else
      return Observable.of('guest');
  }

  getUserName() {
    this.checkUserName().subscribe(res=>{
      if(res == 'guest') {
        this.isUserloggedIn = false;
      }else {
        this.isUserloggedIn = true;
        this.setUserName(res);
      }
    })
  }

  setUserName(data) {
    this.userName = data;
  }

  getUserAddresses() {
    return JSON.parse(localStorage.getItem('userAddresses'));
  }

  setUserAddresses(data) {
    localStorage.setItem('userAddresses',JSON.stringify(data));
  }

  getCartCount() {
    return this.cartCount;
  }

  clearCartCount() {
    this.cartCount = 0;
    this.cartDiscount = 0;
    this.cartShipping = 0;
    this.cartTotal = 0;
    this.cartGst = 0;
    this.cartWallet = 0;
    this.orderTotal = 0;
    localStorage.setItem('cartDetails',null);
  }

  setCartCount(count,action) {
    if(action == 'delete')
      this.cartCount -= count;
    else
      this.cartCount += count;
  }

  getCartTotal() {
    return this.cartTotal;
  }

  setCartTotal(total) {
    this.cartTotal = total;
  }

  getCartDiscount() {
    return this.cartDiscount;
  }

  setCartDiscount(discount) {
    this.cartDiscount = discount;
  }

  getCartShipping() {
    return this.cartShipping;
  }

  setCartShipping(shipping) {
    this.cartShipping = shipping;
  }

  getCartWallet() {
    return this.cartWallet;
  }

  setCartWallet(wallet) {
    this.cartWallet = wallet;
  }

  getCartGst() {
    return this.cartGst;
  }

  setCartGst(gst) {
    this.cartGst = gst;
  }

  getOrderTotal() {
    return this.cartTotal;
  }

  setOrderTotal(total) {
    this.orderTotal = total;
  }

  setDeliveryAddress(dAddress) {
    this.deliveryAddress = dAddress;
    if(this.deliveryAddress != null && this.deliveryAddress != '') {
      this.slideOneForm.setValue({id: '0' , userId: this.deliveryAddress.userId, firstName: this.deliveryAddress.firstName, lastName: this.deliveryAddress.lastName, email: this.deliveryAddress.email, mobile: this.deliveryAddress.mobile, address: this.deliveryAddress.address, city: this.deliveryAddress.city, state: this.deliveryAddress.state, country: this.deliveryAddress.country, pincode: this.deliveryAddress.pincode});  
    }
  }

  //getDeliverForm() {
  //  return this.slideOneForm;
  //}
}
