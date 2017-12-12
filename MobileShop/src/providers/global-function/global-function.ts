import { Injectable, NgZone } from '@angular/core';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
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
  public cartCount = 0;
  constructor(public zone: NgZone) {
    this.clearCartCount();
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
    localStorage.setItem('cartDetails',null);
  }

  setCartCount(count) {
    this.cartCount += count;
  }
}
