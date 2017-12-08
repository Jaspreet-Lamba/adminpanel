import { Component, OnInit } from '@angular/core';
import { App, NavController, LoadingController, AlertController, NavParams } from 'ionic-angular';
import { RestfullProvider } from '../../providers/restfull/restfull';
import { Http } from '@angular/http';

@Component({
  selector: 'page-product',
  templateUrl: 'product.html'
})
export class ProductPage implements OnInit {
  productId;

  constructor(public app: App, public navCtrl: NavController, private http: Http, public rest  : RestfullProvider, public loadingCtrl: LoadingController, 
    private alertCtrl: AlertController, public navParams: NavParams) {
    console.log("product page");
    console.log(this.productId = navParams.get("productId"));
  }

  ngOnInit() {
    this.rest.getAllCategory().subscribe(res => this.getAllCategories(res));
  }
  

  getAllCategories(res){
		console.log(res);	
	}

}
