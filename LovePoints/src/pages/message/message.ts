import { Component, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import { HomePage } from '../home/home';
import { ProfilePage } from '../profile/profile';

@Component({
  selector: 'page-message',
  templateUrl: 'message.html'
})

export class MessagePage {

  constructor(public navCtrl: NavController, private http: Http) {
		localStorage.setItem('activeTab','Message');
	}
  
  // openPage(page) {
	// 	if(page == "ProfilePage")
	// 		this.navCtrl.push(ProfilePage);
	// 	else if(page == "MessagePage1")
	// 		this.navCtrl.push(MessagePage);
	// 	else if(page == "HomePage")
	// 		this.navCtrl.push(HomePage);
	// }
  
  
}
