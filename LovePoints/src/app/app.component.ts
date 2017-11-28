import { Component, ViewChild, OnInit } from '@angular/core';
import { App, Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BackgroundGeolocation, BackgroundGeolocationConfig, BackgroundGeolocationResponse } from '@ionic-native/background-geolocation';

import { HomePage } from '../pages/home/home';
import { MessagePage } from '../pages/message/message';
import { ProfilePage } from '../pages/profile/profile';
import { LoginPage } from '../pages/login/login';
import { ListPage } from '../pages/list/list';
import { NewsPage} from '../pages/news/news';

@Component({
  templateUrl: 'app.html'
})
export class MyApp implements OnInit {
  @ViewChild(Nav) nav: Nav;

  rootPage: any;
  loggedInUserData = {};
  loggedInUserName = "";

  ngOnInit() {
    var data = localStorage.getItem('userDetails');
    if(data) {
      var data1 = JSON.parse(data);
      console.log("user logged in");
      this.rootPage = NewsPage;
      this.loggedInUserName = data1.user.firstName + ' ' + data1.user.lastName;
      this.loggedInUserData = {
        "name" : this.loggedInUserName,
        "profileStatus" : "VIP",
        "coinStatus" : "10",
        "hotVotes": "6"
      };
      console.log(this.loggedInUserData);
    } else {
      console.log("user needs to log in");
      this.rootPage = LoginPage; 
    }
  }

  pages: Array<{title: string, component: any, icon: string}>;

  constructor(public app: App, public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private backgroundGeolocation: BackgroundGeolocation) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', icon: 'ios-home-outline', component: HomePage },
      { title: 'Settings', icon: 'ios-settings-outline', component: ListPage },
      { title: 'My Profile', icon: 'ios-person-outline', component: ProfilePage },
      { title: 'Messages', icon: 'ios-chatboxes-outline', component: MessagePage },
      { title: 'Activity', icon: 'ios-flash-outline', component: ListPage },
      { title: 'Logout', icon: 'ios-log-out-outline', component: LoginPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      // const config: BackgroundGeolocationConfig = {
      //   desiredAccuracy: 10,
      //   stationaryRadius: 20,
      //   distanceFilter: 30,
      //   debug: true, //  enable this hear sounds for background-geolocation life-cycle.
      //   stopOnTerminate: false, // enable this to clear background location settings when the app terminates
      // };
      // this.backgroundGeolocation.configure(config)
      // .subscribe((location: BackgroundGeolocationResponse) => {
    
      //   console.log(location);
    
      //   // IMPORTANT:  You must execute the finish method here to inform the native plugin that you're finished,
      //   // and the background-task may be completed.  You must do this regardless if your HTTP request is successful or not.
      //   // IF YOU DON'T, ios will CRASH YOUR APP for spending too much time in the background.
      //   this.backgroundGeolocation.finish(); // FOR IOS ONLY
    
      // });
      // this.backgroundGeolocation.start();
      //this.getUsersLocation();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    let nav = this.app.getRootNav();
    //this.nav.setRoot(page.component);
    nav.setRoot(page.component);
    localStorage.setItem('activeTab','Home');
  }
}
