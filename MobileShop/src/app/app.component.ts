import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { ProfilePage } from '../pages/profile/profile';
import { AddressPage } from '../pages/address/address';
import { CartPage } from '../pages/cart/cart';
import { OrdersPage } from '../pages/orders/orders';
import { Observable } from 'rxjs/Observable';
import { GlobalFunctionProvider } from '../providers/global-function/global-function';
import 'rxjs/add/observable/of';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;
  login: Array<{title: string, component: any}>;
  username: String; isUserloggedIn: boolean = false;
  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public globalFunction: GlobalFunctionProvider) {
    this.initializeApp();
    this.globalFunction.getUserName();
    this.pages = [
      { title: 'Home', component: HomePage },
    ];
  }

  loginUser() {
    this.nav.setRoot(LoginPage);
  }

  openUserPage(name) {
    if(name == "profile")
      this.nav.setRoot(ProfilePage);
    else if(name == "address")
      this.nav.setRoot(AddressPage);
    else if(name == "orders")
      this.nav.setRoot(OrdersPage);
  }

  logoutUser() {
    localStorage.setItem('userDetails',null);
    localStorage.setItem('userAddresses',null);
    localStorage.setItem('deliveryAddress',null);
    this.globalFunction.getUserName();
    this.nav.setRoot(HomePage);
  }
  
  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
