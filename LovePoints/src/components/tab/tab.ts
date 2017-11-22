import { Component } from '@angular/core';
import { App, NavController } from 'ionic-angular';

import { MessagePage } from '../../pages/message/message';
import { ProfilePage } from '../../pages/profile/profile';
import { HotorNotPage } from '../../pages/hotornot/hotornot';
import { NewsPage} from '../../pages/news/news';

import { ListPage } from '../../pages/list/list';
import { HomePage } from '../../pages/home/home';
/**
 * Generated class for the TabComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'tab',
  templateUrl: 'tab.html'
})
export class TabComponent {

  constructor(public app: App, public navCtrl : NavController) {}
  isPageActive = localStorage.getItem('activeTab') ? localStorage.getItem('activeTab') : 'NewsPage';
  
  openPage(page) {
    if(localStorage.getItem('activeTab') == page)
      return;
    let nav = this.app.getRootNav();
    if(page == "HotorNotPage") {
      // this.navCtrl.pop();
      // this.navCtrl.push(HotorNotPage);
      nav.setRoot(HotorNotPage);
      localStorage.setItem('activeTab','HotorNot');
    }
		else if(page == "MessagePage") {
      // this.navCtrl.pop();
      // this.navCtrl.push(MessagePage);
      nav.setRoot(MessagePage);
      localStorage.setItem('activeTab','Message');
    }
		else if(page == "HomePage") {
      // this.navCtrl.pop();
      // this.navCtrl.push(HomePage);
      nav.setRoot(HomePage);
      localStorage.setItem('activeTab','Home');
    }
    else if(page == "NewsPage") {
      // this.navCtrl.pop();
      // this.navCtrl.push(NewsPage);
      nav.setRoot(NewsPage);
      localStorage.setItem('activeTab','News');
    }
	}
}
