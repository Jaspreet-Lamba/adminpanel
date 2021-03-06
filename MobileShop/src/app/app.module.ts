import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { ProductPage } from '../pages/product/product';
import { ProfilePage } from '../pages/profile/profile';
import { AddressPage } from '../pages/address/address';
import { AddAddressPage } from '../pages/addaddress/addaddress';
import { CartPage } from '../pages/cart/cart';
import { CheckoutPage } from '../pages/checkout/checkout';
import { PaymentPage } from '../pages/payment/payment';
import { OrdersPage } from '../pages/orders/orders';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http';
import { RestfullProvider } from '../providers/restfull/restfull';
import { Urls } from '../providers/url';
import { GlobalFunctionProvider } from '../providers/global-function/global-function';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    ProductPage,
    ProfilePage,
    AddressPage,
    AddAddressPage,
    CartPage,
    CheckoutPage,
    PaymentPage,
    OrdersPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    ProductPage,
    ProfilePage,
    AddressPage,
    AddAddressPage,
    CartPage,
    CheckoutPage,
    PaymentPage,
    OrdersPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestfullProvider,
    Urls,
    GlobalFunctionProvider
  ]
})
export class AppModule {}
