import { Component } from '@angular/core';
import { App, NavController, LoadingController, AlertController, ToastController, NavParams } from 'ionic-angular';
import { RestfullProvider } from '../../providers/restfull/restfull';
import { Http } from '@angular/http';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HomePage } from '../home/home';
import { AddAddressPage } from '../addaddress/addaddress';
import { GlobalFunctionProvider } from '../../providers/global-function/global-function';

@Component({
  selector: 'page-address',
  templateUrl: 'address.html'
})


export class AddressPage {
  userAddressList = [];
  activeAddress = 0;
  actionButton: Boolean = false;
  //activeAddressData: Object
  activeAddressData: Object = {
    'address' : '',
  };
  loader = this.loadingCtrl.create({
	  content: "Fetching your addresses..."
  });

  constructor(public app: App, public navCtrl: NavController, private http: Http, public rest  : RestfullProvider, public loadingCtrl: LoadingController, private alertCtrl: AlertController, private formBuilder : FormBuilder, public globalFunction: GlobalFunctionProvider, public toastCtrl: ToastController, public navParams: NavParams) {
    this.actionButton = navParams.get("actionButton");
    console.log(this.actionButton);
    this.loader.present();
    //var userAddresses = JSON.parse(localStorage.getItem('userAddresses'));
    var userAddresses = this.globalFunction.getUserAddresses();
    if(userAddresses) {
  		//var data = JSON.parse(localStorage.getItem('deliveryAddress'));
      var data = this.globalFunction.deliveryAddress;
      if(data != null && data != '' && data.address != null && data.address != '') {
        this.activeAddress = data.addIndex;
        this.activeAddressData = data;
      } else {
        this.activeAddress = 0;
        userAddresses[0].addIndex = 0;
        this.activeAddressData = userAddresses[0];
      }
      this.userAddressList = userAddresses;
  		//this.setActiveAddress(0,this.userAddressList[0]);
  		this.loader.dismiss();
  	}
    else
    	this.getAddresses();
  }

  getAddresses() {
  	let address = {
  		'userId' : this.globalFunction.userDetails.id
  	};
  	this.rest.getAddresses(address).subscribe(
  	  res=>{
  	    this.onAddressSuccess(res);
  	    this.loader.dismiss();
  	  },err=>{
  	    this.onAddressError(err);
  	    this.loader.dismiss();
  	  }
  	);
  }

  onAddressSuccess(res){
    if(res.length == 0)
		  this.userAddressList = [];
	  else {
		  this.userAddressList = res.data;
		  this.globalFunction.setUserAddresses(res.data);
      //localStorage.setItem('userAddresses',JSON.stringify(res.data));
		  this.setActiveAddress(0,res.data[0]);
	  }
  }
  
  onAddressError(res){
    let toast = this.toastCtrl.create({
      message: res.statusText ? res.statusText : res.message,
      duration: 3000
    });
    toast.present();
  }

  setActiveAddress(id,sAddress) {
  	//var data = JSON.parse(localStorage.getItem('deliveryAddress'));
  	//if(data != null && data != '') {
  //		this.activeAddress = data.addIndex;
  	//	this.activeAddressData = data;
  	//	localStorage.setItem('deliveryAddress',null);
  	//} else {
	  	this.activeAddress = id;
	  	this.activeAddressData.address = sAddress.address;
	  	this.activeAddressData.city = sAddress.city;
	  	this.activeAddressData.country = sAddress.country;
	  	this.activeAddressData.email = sAddress.email;
	  	this.activeAddressData.firstName = sAddress.firstName;
	  	this.activeAddressData.id = sAddress.id;
	  	this.activeAddressData.lastName = sAddress.lastName;
	  	this.activeAddressData.mobile = sAddress.mobile;
	  	this.activeAddressData.pincode = sAddress.pincode;
	  	this.activeAddressData.state = sAddress.state;
	  	this.activeAddressData.userId = sAddress.userId;
	  	this.activeAddressData.addIndex = id;
	  //}  
  }

  setDeliveryAddress() {
  	this.globalFunction.setDeliveryAddress(this.activeAddressData);
    //this.globalFunction.deliveryAddress = this.activeAddressData;
    //localStorage.setItem('deliveryAddress',JSON.stringify(this.activeAddressData));
    if(this.actionButton == true)
      this.navCtrl.pop();
    else
  	  this.navCtrl.setRoot(HomePage);
  }

  //setCheckoutAddress() {
    //this.globalFunction.setDeliveryAddress(this.activeAddressData);
    //this.globalFunction.deliveryAddress = this.activeAddressData;
    //localStorage.setItem('deliveryAddress',JSON.stringify(this.activeAddressData));
    //this.navCtrl.pop();
  //}

  addNewAddress() {
    this.navCtrl.push(AddAddressPage);
    //this.navCtrl.setRoot(AddAddressPage);
  }

  deleteAddress(id) {
    alert('delete' + id);
  }
}