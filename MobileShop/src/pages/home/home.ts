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
  activeCategoryId = 0;
  categoryArray = [];
  productArray = {};

  constructor(public app: App, public navCtrl: NavController, private http: Http, public rest  : RestfullProvider, public loadingCtrl: LoadingController, 
    private alertCtrl: AlertController) {
  	console.log("home page");
  }
  
  ngOnInit() {
    // this.loader.present();
    //this.activeCategoryId = 0;
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
      if(res.data[i].status == "Enable") {
        // if(this.activeCategoryId == 0)
        //   this.activeCategoryId = res.data[i].category_id;
        category = {
          "id" : res.data[i].category_id,
          "name" : res.data[i].category_name,
        }
        this.categoryArray.push(category);
      }
    }
    this.loadCategoryProducts(this.categoryArray[0]);
    // console.log(this.categoryArray[0]);
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
          if(res.data[i].status == "Enable") {
            // if(this.activeCategoryId == 0)
            //   this.activeCategoryId = res.data[i].category_id;
            category = {
              "id" : res.data[i].category_id,
              "name" : res.data[i].category_name,
            }
            this.categoryArray.push(category);
          }
        }
        this.loadCategoryProducts(this.categoryArray[0]);
        this.loader.dismiss();
        console.log(this.activeCategoryId);
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

  updateCategoryData() {
    this.rest.getAllCategoryWithProducts().subscribe(
      res=>{
        //console.log(res);
        localStorage.setItem('categoryData',JSON.stringify(res));
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
  
  getProductDetails(product) {
    this.navCtrl.push(ProductPage, {
      productDetails: product,
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

  loadCategoryProducts(category) {
    // console.log(category);
    this.activeCategoryId = category.id;
    var prodData = JSON.parse(localStorage.getItem('categoryData'));
    // console.log(prodData);
    let product;
    for(var i=0;i<prodData.data.length;i++){
        if(prodData.data[i].category_id == this.activeCategoryId)
          this.productArray = prodData.data[i].products; 
    }
    console.log(this.productArray);
  }
}
