import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser'
import { App, NavController, LoadingController, AlertController, NavParams } from 'ionic-angular';
import { RestfullProvider } from '../../providers/restfull/restfull';
import { Http } from '@angular/http';
import { CartPage } from '../cart/cart';
import { GlobalFunctionProvider } from '../../providers/global-function/global-function';

@Component({
  selector: 'page-product',
  templateUrl: 'product.html'
})
export class ProductPage {
  productDetails;
  cartItem: Object = {
    'productName' : '',
    'productPrice' : '',
    'show' : ''
  };

  loader = this.loadingCtrl.create({
    content: "Fetching product details..."
  });
  constructor(public app: App, public navCtrl: NavController, private http: Http, public rest  : RestfullProvider, public loadingCtrl: LoadingController, private alertCtrl: AlertController, public navParams: NavParams, private sanitizer: DomSanitizer, public globalFunction: GlobalFunctionProvider) {
    // console.log("product page");
    this.productDetails = navParams.get("productDetails");
    // console.log(this.productDetails);
    this.getProductDetails();  
  }

  getProductDetails() {
    this.loader.present();
    this.rest.getProduct(this.productDetails.product_id).subscribe(
      res=>{
        // console.log(res);
        this.productDetails.fulldesc = this.sanitizer.bypassSecurityTrustHtml(res.data.product_fulldesc);
        this.productDetails.shortdesc = this.sanitizer.bypassSecurityTrustHtml(res.data.product_shortdesc);
        this.productDetails.quantity = res.data.quantity;
        this.productDetails.stock = res.data.stock;
        //console.log(this.productDetails);
        this.loader.dismiss();
      },err=>{
        let alert = this.alertCtrl.create({
          title: this.rest.appName,
          subTitle: 'Error while fetching Category Data',
          buttons: ['Ok']
        });
        alert.present();	
      }
    );
  }

  backtoHome() {
    this.navCtrl.pop();
  }

  checkout() {
    if(this.globalFunction.cartCount > 0) {
      this.cartItem = {};
      this.navCtrl.push(CartPage);
    }
    else {
      let toast = this.toastCtrl.create({
        message: 'Cart is empty. Please add some items.',
        duration: 3000
      });
      toast.present();
    }
  }

  addToCart(product) {
    var cartObj = {}, dummy = [], duplicate = {}, localCart, isSameProductAdded = false;
    cartObj.productId = product.product_id;
    cartObj.productName = product.product_name;
    cartObj.productPrice = product.product_price;
    cartObj.productSplPrice = product.product_splprice;
    cartObj.productImage = product.product_image;
    cartObj.productQuantity = 1;
    
    this.cartItem.productName = product.product_name;
    this.cartItem.productPrice = product.product_price;
    this.cartItem.show = true;

    localCart = JSON.parse(localStorage.getItem('cartDetails'));
    this.globalFunction.setCartCount(1,'add');
    if(localCart != null && localCart != '') {
      localCart.forEach(function(cart) {
        //console.log(cart.productQuantity);
        if(cart.productId == product.product_id) {
          cart.productQuantity += 1;
          isSameProductAdded = true;
        }
        dummy.push(cart);
      });
    } 
    if(!isSameProductAdded)
      dummy.push(cartObj);
    
    duplicate = dummy;
    localStorage.setItem('cartDetails',JSON.stringify(duplicate));
  }

}
