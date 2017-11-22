import { Component, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import { HomePage } from '../home/home';
import { HotorNotRegionPage } from '../hotornotregion/hotornotregion';

@Component({
  selector: 'page-hotornot',
  templateUrl: 'hotornot.html'
})

export class HotorNotPage {

  showUserCreditOptions = false;
  closePopup = document.getElementById("popupclose");
  overlay = document.getElementById("overlay");
  popup = document.getElementById("popup");
  button = document.getElementById("button");

  constructor(public navCtrl: NavController, private http: Http) {
		localStorage.setItem('activeTab','HotorNot');
  }
  
  goToHotorVote() {
    this.showUserCreditOptions = !this.showUserCreditOptions;	
  }

  goToHoterRegion() {
    this.navCtrl.push(HotorNotRegionPage);
  }

  closePopUp() {
    this.showUserCreditOptions = false;
  }
}
