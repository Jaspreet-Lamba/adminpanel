import { Component, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import { HomePage } from '../home/home';
import { ProfilePage } from '../profile/profile';

@Component({
  selector: 'page-hotornotregion',
  templateUrl: 'hotornotregion.html'
})

export class HotorNotRegionPage {

  showUsersProfile = false;
  showUsersFilter = false;
  showUsersFilterIcon = 'ios-add-circle-outline';
  closePopup = document.getElementById("popupclose");
  overlay = document.getElementById("overlay");
  popup = document.getElementById("popup");
  button = document.getElementById("button");
  data: Array<{title: string, details: string, icon: string, showDetails: boolean}> = [];

  brightness: number = 20;
  contrast: number = 30;
  warmth: number = 1300;
  structure: any = { lower: 33, upper: 60 };
  text: number = 0;

  constructor(public navCtrl: NavController, private http: Http) {
		localStorage.setItem('activeTab','HotorNot');
    for(let i = 0; i < 1; i++ ){
      this.data.push({
          title: 'Title '+i,
          details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          icon: 'ios-add-circle-outline',
          showDetails: false
        });
    }
  }

  toggleDetails() {
    if (this.showUsersFilter) {
      this.showUsersFilter = false;
      this.showUsersFilterIcon = 'ios-add-circle-outline';                                  
    } else {
      this.showUsersFilter = true;
      this.showUsersFilterIcon = 'ios-remove-circle-outline';
    }
  }                                                                                                                                                           
  
  openUserProfile(userId) {
    this.showUsersProfile = !this.showUsersProfile;	
  }

  closePopUp() {
    this.showUsersProfile = false;
  }
}
