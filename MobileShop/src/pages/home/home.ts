import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  showSearchIcon : boolean = true;
  showSearchDiv : boolean = false;
  constructor(public navCtrl: NavController) {
  	console.log("home page");

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
