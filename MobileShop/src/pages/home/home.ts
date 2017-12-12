import { Component, OnInit } from '@angular/core';
import { App, NavController, LoadingController, AlertController, ToastController } from 'ionic-angular';
import { RestfullProvider } from '../../providers/restfull/restfull';
import { Http } from '@angular/http';
import { ProductPage } from '../product/product';
import { CartPage } from '../cart/cart';
import { GlobalFunctionProvider } from '../../providers/global-function/global-function';

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
  cartCount;
  cartItem: Object = {};

  constructor(public app: App, public navCtrl: NavController, private http: Http, public rest  : RestfullProvider, public loadingCtrl: LoadingController, private alertCtrl: AlertController, public globalFunction: GlobalFunctionProvider, public toastCtrl: ToastController) {
  	//console.log("home page");
    this.globalFunction.getCartCount();
  }
  
  ngOnInit() {
    // this.loader.present();
    //this.activeCategoryId = 0;
    this.cartCount = this.globalFunction.cartCount;
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
    //console.log(res);
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
    //console.log(this.productArray);
  }

  backtoHome() {
    this.cartItem = {};
  }

  checkout() {
    if(this.globalFunction.cartCount > 0) {
      this.backtoHome();
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
    var cartObj = {}, dummy = [], duplicate = {}, localCart;
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
    this.globalFunction.setCartCount(1);
    this.cartCount = this.globalFunction.cartCount;
    if(localCart != null && localCart != '') {
      localCart.forEach(function(cart) {
        dummy.push(cart);
      });
    } 
    dummy.push(cartObj);
    duplicate = dummy;
    localStorage.setItem('cartDetails',JSON.stringify(duplicate));
  }
}
