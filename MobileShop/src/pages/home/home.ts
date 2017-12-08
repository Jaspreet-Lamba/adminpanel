import { Component, OnInit } from '@angular/core';
import { App, NavController, LoadingController, AlertController } from 'ionic-angular';
import { RestfullProvider } from '../../providers/restfull/restfull';
import { Http } from '@angular/http';
import { ProductPage } from '../product/product';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  showSearchIcon : boolean = true;
  showSearchDiv : boolean = false;
  loader = this.loadingCtrl.create({
    content: "Please wait..."
  });
  categoryArray = [];

  constructor(public app: App, public navCtrl: NavController, private http: Http, public rest  : RestfullProvider, public loadingCtrl: LoadingController, 
    private alertCtrl: AlertController) {
  	console.log("home page");
  }
  
  ngOnInit() {
    // this.loader.present();
    var categData = JSON.parse(localStorage.getItem('categoryData'));
    if(categData) {
      this.setAllCategories(categData);  
      // this.loader.dismiss();
      this.updateCategoryData();
    } else {
      this.getAllCategories();
    }
  }

  setAllCategories(res){
    console.log(res);
    let category;
    this.categoryArray = [];
    for(var i=0;i<res.data.length;i++){
      category = {
        "id" : res.data[i].category_id,
        "name" : res.data[i].category_name,
      }
      this.categoryArray.push(category);
    }
  }

  getAllCategories() {
    this.loader.present();
    this.rest.getAllCategoryWithProducts().subscribe(
      res=>{
        console.log(res);
        localStorage.setItem('categoryData',JSON.stringify(res));
        let category;
        this.categoryArray = [];
        for(var i=0;i<res.data.length;i++){
          category = {
            "id" : res.data[i].category_id,
            "name" : res.data[i].category_name,
          }
          this.categoryArray.push(category);
        }
        this.loader.dismiss();
      },err=>{
        let alert = this.alertCtrl.create({
          title: 'Love Points',
          subTitle: 'Error while fetching Users Profile',
          buttons: ['Ok']
        });
        alert.present();	
      }
    );
  }

  updateCategoryData() {
    this.rest.getAllCategoryWithProducts().subscribe(
      res=>{
        console.log(res);
        localStorage.setItem('categoryData',JSON.stringify(res));
      },err=>{
        let alert = this.alertCtrl.create({
          title: 'Love Points',
          subTitle: 'Error while fetching Users Profile',
          buttons: ['Ok']
        });
        alert.present();	
      }
    );
  }
  
  getProductDetails(productId) {
    this.navCtrl.push(ProductPage, {
      productId: productId,
    });
  }
  
  showSearchBar(action) {
  	if(action == 'search') {
		  this.showSearchDiv = true;
  	} else {
  		this.showSearchDiv = false;
  		this.showSearchIcon = true;
  	}
  }

}
