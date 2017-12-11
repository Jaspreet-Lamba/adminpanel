import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser'
import { App, NavController, LoadingController, AlertController, NavParams } from 'ionic-angular';
import { RestfullProvider } from '../../providers/restfull/restfull';
import { Http } from '@angular/http';

@Component({
  selector: 'page-product',
  templateUrl: 'product.html'
})
export class ProductPage {
  productDetails;
  loader = this.loadingCtrl.create({
    content: "Fetching product details..."
  });
  constructor(public app: App, public navCtrl: NavController, private http: Http, public rest  : RestfullProvider, public loadingCtrl: LoadingController, 
    private alertCtrl: AlertController, public navParams: NavParams, private sanitizer: DomSanitizer) {
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
        console.log(this.productDetails);
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

}
