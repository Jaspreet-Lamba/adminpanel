import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
import { BackgroundGeolocation } from '@ionic-native/background-geolocation';
import { Geolocation } from '@ionic-native/geolocation';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MessagePage } from '../pages/message/message';
import { ProfilePage } from '../pages/profile/profile';
import { LoginPage } from '../pages/login/login';
import { ListPage } from '../pages/list/list';
import { HotorNotPage } from '../pages/hotornot/hotornot';
import { HotorNotRegionPage } from '../pages/hotornotregion/hotornotregion';
import { RegisterPage } from '../pages/register/register'
import { TabComponent } from '../components/tab/tab';
import { NewsPage } from '../pages/news/news';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http';
import { SwingModule } from 'angular2-swing';
import { RestfullProvider } from '../providers/restfull/restfull';
import { Urls } from '../providers/url';
import { LocationTrackerProvider } from '../providers/location-tracker/location-tracker';


@NgModule({
  declarations: [
    MyApp,
    HomePage,                                                                                        
    MessagePage,
    ProfilePage,
    LoginPage,
    ListPage,
    HotorNotPage,
    HotorNotRegionPage,
    NewsPage,
    TabComponent,
    RegisterPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    SwingModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MessagePage,
    ProfilePage,
    LoginPage,
    ListPage,
    HotorNotPage,
    HotorNotRegionPage,
    NewsPage,
    TabComponent,
    RegisterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestfullProvider,
    Urls,
    Camera,
    BackgroundGeolocation,
    Geolocation,
    LocationTrackerProvider
  ]
})
export class AppModule {}
