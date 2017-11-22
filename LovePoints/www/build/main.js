webpackJsonp([0],{

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MessagePage = (function () {
    function MessagePage(navCtrl, http) {
        this.navCtrl = navCtrl;
        this.http = http;
        localStorage.setItem('activeTab', 'Message');
    }
    return MessagePage;
}());
MessagePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-message',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/git/lovepoints_taran/LovePoints/src/pages/message/message.html"*/'<!-- <ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Messages</ion-title>\n  </ion-navbar>\n</ion-header> -->\n\n<ion-content>\n  <ion-fab top left>\n    <button ion-fab mini menuToggle><ion-icon name="menu"></ion-icon></button>\n  </ion-fab>\n  <ion-card>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="assets/images/profile1.png">\n      </ion-avatar>\n      <h2>Marty McFly</h2>\n      <p>Hello, how are you?</p>\n    </ion-item>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="assets/images/profile2.png">\n      </ion-avatar>\n      <h2>Marty McFly</h2>\n      <p>Hello, how are you?</p>\n    </ion-item>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="assets/images/profile3.png">\n      </ion-avatar>\n      <h2>Marty McFly</h2>\n      <p>Hello, how are you?</p>\n    </ion-item>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="assets/images/profile4.png">\n      </ion-avatar>\n      <h2>Marty McFly</h2>\n      <p>Hello, how are you?</p>\n    </ion-item>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="assets/images/profile1.png">\n      </ion-avatar>\n      <h2>Marty McFly</h2>\n      <p>Hello, how are you?</p>\n    </ion-item>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="assets/images/profile2.png">\n      </ion-avatar>\n      <h2>Marty McFly</h2>\n      <p>Hello, how are you?</p>\n    </ion-item>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="assets/images/profile3.png">\n      </ion-avatar>\n      <h2>Marty McFly</h2>\n      <p>Hello, how are you?</p>\n    </ion-item>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="assets/images/profile4.png">\n      </ion-avatar>\n      <h2>Marty McFly</h2>\n      <p>Hello, how are you?</p>\n    </ion-item>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="assets/images/profile1.png">\n      </ion-avatar>\n      <h2>Marty McFly</h2>\n      <p>Hello, how are you?</p>\n    </ion-item>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="assets/images/profile2.png">\n      </ion-avatar>\n      <h2>Marty McFly</h2>\n      <p>Hello, how are you?</p>\n    </ion-item>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="assets/images/profile3.png">\n      </ion-avatar>\n      <h2>Marty McFly</h2>\n      <p>Hello, how are you?</p>\n    </ion-item>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="assets/images/profile4.png">\n      </ion-avatar>\n      <h2>Marty McFly</h2>\n      <p>Hello, how are you?</p>\n    </ion-item>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="assets/images/profile1.png">\n      </ion-avatar>\n      <h2>Marty McFly</h2>\n      <p>Hello, how are you?</p>\n    </ion-item>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="assets/images/profile2.png">\n      </ion-avatar>\n      <h2>Marty McFly</h2>\n      <p>Hello, how are you?</p>\n    </ion-item>\n  </ion-card>\n  <tab></tab>\n  <!-- <div class="tabbar">\n      <div class="tabs_section">\n          <ion-icon name="person" (click)="openPage(\'HomePage\')" item-start></ion-icon>\n      </div>\n      <div class="tabs_section">\n          <ion-icon name="people" (click)="openPage(\'ProfilePage\')" item-start></ion-icon>\n      </div>\n      <div class="tabs_section active">\n          <ion-icon name="chatboxes" (click)="openPage(\'MessagePage\')" item-start></ion-icon>\n      </div>\n      <div class="tabs_section">\n          <ion-icon name="ios-card-outline" (click)="openPage(\'HomePage\')" item-start></ion-icon>\n      </div>\n  </div>  -->\n</ion-content>'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/git/lovepoints_taran/LovePoints/src/pages/message/message.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
], MessagePage);

//# sourceMappingURL=message.js.map

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_restfull_restfull__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(74);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the RegisterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var RegisterPage = (function () {
    function RegisterPage(nav, navParams, rest, loadingCtrl, alertCtrl, menu) {
        this.nav = nav;
        this.navParams = navParams;
        this.rest = rest;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.menu = menu;
        this.User = {
            email: "",
            password: "",
            firstName: "",
            lastName: "",
            long: "",
            lat: ""
        };
        this.menu.enable(false);
    }
    RegisterPage.prototype.onLogin = function () {
        this.nav.pop();
    };
    RegisterPage.prototype.onRegister = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Please wait..."
        });
        loader.present();
        this.rest.addUser(this.User).subscribe(function (res) {
            _this.onRegisterSuccess(res);
            loader.dismiss();
        }, function (err) {
            _this.onRegisterError(err);
            loader.dismiss();
        });
    };
    RegisterPage.prototype.onRegisterSuccess = function (res) {
        console.log(res);
        localStorage.setItem('userDetails', JSON.stringify(res));
        this.menu.enable(true);
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */], {}, { animate: true, direction: 'forward' });
        // this.nav.push(HomePage);
    };
    RegisterPage.prototype.onRegisterError = function (res) {
        var data = JSON.parse(res._body);
        var alert = this.alertCtrl.create({
            title: 'LovePoints App',
            subTitle: data.errors[0].error,
            buttons: ['OK']
        });
        alert.present();
    };
    return RegisterPage;
}());
RegisterPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-register',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/git/lovepoints_taran/LovePoints/src/pages/register/register.html"*/'<!-- <ion-header>\n  <ion-navbar>\n    <ion-title>Register</ion-title>\n  </ion-navbar>\n</ion-header> -->\n<ion-content class="card-background-page">\n  <ion-card>\n    <img src="assets/images/login3.jpg"/>\n    <div class="card-title"> \n      <ion-item>\n        <ion-icon name="person" item-start></ion-icon>\n        <ion-input type="text" placeholder="First Name" value="" [(ngModel)]="User.firstName"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-icon name="person" item-start></ion-icon>\n        <ion-input type="text" placeholder="Last Name" value="" [(ngModel)]="User.lastName"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-icon name="person" item-start></ion-icon>\n        <ion-input type="text" placeholder="Username" value="" [(ngModel)]="User.email"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-icon name="lock" item-start></ion-icon>\n        <ion-input  placeholder="Password" type="password" value="" [(ngModel)]="User.password"></ion-input>\n      </ion-item>\n      <ion-item class="login_buttons">\n        <button  class="login_button" ion-button (click) = "onLogin()">Login</button>\n        <button  ion-button (click) = "onRegister()">Sign Up</button>\n      </ion-item>\n    </div>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/git/lovepoints_taran/LovePoints/src/pages/register/register.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_restfull_restfull__["a" /* RestfullProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */]])
], RegisterPage);

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_restfull_restfull__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__news_news__ = __webpack_require__(80);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginPage = (function () {
    function LoginPage(app, rest, nav, loadingCtrl, alertCtrl, menu) {
        this.app = app;
        this.rest = rest;
        this.nav = nav;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.menu = menu;
        this.loginUser = {
            email: "",
            password: ""
        };
        this.menu.enable(false);
    }
    LoginPage.prototype.ngOnInit = function () {
        localStorage.setItem('userDetails', '');
    };
    LoginPage.prototype.onLogin = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Please wait..."
        });
        loader.present();
        this.rest.Login(this.loginUser).subscribe(function (res) {
            _this.onLoginSuccess(res);
            loader.dismiss();
        }, function (err) {
            _this.onLoginError(err);
            loader.dismiss();
        });
    };
    LoginPage.prototype.onRegister = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */]);
    };
    LoginPage.prototype.onLoginSuccess = function (res) {
        console.log(res);
        localStorage.setItem('userDetails', JSON.stringify(res));
        this.menu.enable(true);
        var nav = this.app.getRootNav();
        nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__news_news__["a" /* NewsPage */]);
        localStorage.setItem('activeTab', 'News');
        //this.nav.setRoot(HomePage, {}, {animate: true, direction: 'forward'});
        //this.nav.push(HomePage);
    };
    LoginPage.prototype.onLoginError = function (res) {
        var data = JSON.parse(res._body);
        var alert = this.alertCtrl.create({
            title: 'LovePoints App',
            subTitle: data.errors[0].error,
            buttons: ['OK']
        });
        alert.present();
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-login',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/git/lovepoints_taran/LovePoints/src/pages/login/login.html"*/'<ion-content class="card-background-page">\n  <ion-card>\n    <img src="assets/images/login3.jpg"/>\n    <div class="card-title"> \n      <ion-item>\n        <ion-icon name="person" item-start></ion-icon>\n        <ion-input type="text" placeholder="Username" value="" [(ngModel)]="loginUser.email"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-icon name="lock" item-start></ion-icon>\n        <ion-input  placeholder="Password" type="password" value="" [(ngModel)]="loginUser.password"></ion-input>\n      </ion-item>\n      <ion-item class="login_buttons">\n        <button  class="login_button" ion-button (click) = "onLogin()">Login</button>\n        <button  ion-button (click) = "onRegister()">Sign Up</button>\n      </ion-item>\n    </div>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/git/lovepoints_taran/LovePoints/src/pages/login/login.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_2__providers_restfull_restfull__["a" /* RestfullProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 149:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 149;

/***/ }),

/***/ 192:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 192;

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Urls; });
var Urls = (function () {
    function Urls() {
        this.authApiUrl = {
            login: "http://media-consultancy.com:3000/api/auth/login",
            register: "http://media-consultancy.com:3000/api/auth/register"
        };
        this.userApiUrl = {
            getUsers: "http://media-consultancy.com:3000/api/auth/getUsers",
            viewProfile: "http://media-consultancy.com:3000/api/user/",
            updateProfile: "http://media-consultancy.com:3000/api/updateProfile/",
            uploadPhoto: "http://media-consultancy.com:3000/api/user/upload/image/",
            updateGeolocation: "http://media-consultancy.com:3000/api/user/updateGeo/"
        };
        this.locationApiUrl = {
            sendLocation: "http://media-consultancy.com:3000/api/location/sendlocation",
            nearBy: "http://media-consultancy.com:3000/api/location/nearby"
        };
        this.chatApiUrl = {
            newConversation: "http://media-consultancy.com:3000/api/chat/new/",
            sendReply: "http://media-consultancy.com:3000/api/chat/",
            getConversation: "http://media-consultancy.com:3000/api/chat/:conversationId",
            getMessages: "http://media-consultancy.com:3000/api/chat/getmessages/"
        };
    }
    return Urls;
}());

/*
no screenshot available for  getConversation : "http://media-consultancy.com:3000/api/chat/:conversationId"
*/ 
//# sourceMappingURL=url.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_restfull_restfull__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__register_register__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(138);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProfilePage = (function () {
    function ProfilePage(rest, nav, camera, sanitizer, actionsheetCtrl) {
        this.rest = rest;
        this.nav = nav;
        this.camera = camera;
        this.sanitizer = sanitizer;
        this.actionsheetCtrl = actionsheetCtrl;
        this.loggedInUserName = "";
        this.defaultProfilePic = [
            { "pic": "assets/images/profile2.jpg" }
        ];
        var data = localStorage.getItem('userDetails');
        if (data) {
            var data1 = JSON.parse(data);
            console.log(data1);
            this.loggedInUserName = data1.user.firstName + ' ' + data1.user.lastName;
            this.loggedInUserData = {
                "name": this.loggedInUserName,
                "profileStatus": data1.user.role,
                "coinStatus": "10",
                "hotVotes": "6",
                "userId": data1.user._id,
                "email": data1.user.email
            };
            console.log(this.loggedInUserData);
        }
    }
    ProfilePage.prototype.doRegister = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_5__register_register__["a" /* RegisterPage */]);
    };
    ProfilePage.prototype.openCameraOptions = function () {
        var _this = this;
        var actionSheet = this.actionsheetCtrl.create({
            title: 'Picture Option',
            cssClass: 'action-sheets-basic-page',
            buttons: [
                {
                    text: 'Camera',
                    icon: 'camera',
                    handler: function () {
                        _this.openCamera('camera');
                    }
                },
                {
                    text: 'Gallery',
                    icon: 'images',
                    handler: function () {
                        _this.openCamera('gallery');
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    icon: 'close',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    ProfilePage.prototype.openCamera = function (option) {
        var _this = this;
        var sourcePath = 0;
        if (option == 'camera') {
            sourcePath = this.camera.PictureSourceType.CAMERA;
        }
        else {
            sourcePath = this.camera.PictureSourceType.SAVEDPHOTOALBUM;
        }
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            sourceType: sourcePath,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.srcValue = _this.sanitizer.bypassSecurityTrustResourceUrl(imageData);
            _this.defaultProfilePic.push({ "pic": _this.srcValue });
        }, function (err) {
            // Handle error
        });
    };
    ProfilePage.prototype.updateProfile = function () {
        var object = {
            gender: "male",
            city: "New Delhi",
            state: "Delhi",
            pincode: "110045"
        };
        this.rest.updateProfile(this.loggedInUserData.userId, object).subscribe(function (res) { return console.log(res); });
    };
    ProfilePage.prototype.logout = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]);
    };
    return ProfilePage;
}());
ProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-profile',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/git/lovepoints_taran/LovePoints/src/pages/profile/profile.html"*/'<ion-content class="card-background-page">\n  <ion-fab top left>\n    <button ion-fab mini menuToggle><ion-icon name="menu"></ion-icon></button>\n  </ion-fab>\n  <div class="image-section">\n    <!-- <img src="assets/images/profile2.jpg"/> -->\n    <ion-slides pager>\n\n      <ion-slide *ngFor="let img of defaultProfilePic">\n        <img [src]="img.pic">\n      </ion-slide>\n\n      <!-- <ion-slide>\n        <img src="assets/images/login2.jpg">\n      </ion-slide>\n\n      <ion-slide>\n        <img src="assets/images/profile1.jpg">\n      </ion-slide> -->\n\n    </ion-slides>\n  </div> \n  <div class="profile_section"> \n    <ion-card>\n      <ion-item>\n        <ion-avatar item-start>\n          <img src="assets/images/profile2.jpg">\n          <button ion-fab (click)="openCameraOptions()">\n            <ion-icon name="camera"></ion-icon>\n          </button>\n        </ion-avatar>\n        <h2>Marty McFly</h2>\n        <p>26 yrs</p>\n        <p>Male</p>\n      </ion-item>\n    </ion-card>  \n    <ion-card>\n      <ion-item class="profile_status">\n          <ion-item>\n            <span>Profile Information</span>\n            <ion-icon name="create" (click) = "updateProfile()"></ion-icon>  \n          </ion-item>\n          <ion-item>\n            <ion-icon name="mail" item-start></ion-icon>\n            <ion-input type="text" placeholder="Email" disabled value= {{loggedInUserData.email}}></ion-input>\n          </ion-item>\n      </ion-item>\n      <ion-list radio-group>\n        <ion-item class="role_status">\n          <ion-icon name="person" item-start></ion-icon>\n        </ion-item>\n        <ion-item class="role_vip">\n          <ion-label>VIP</ion-label>\n          <ion-radio value="vip"></ion-radio>\n        </ion-item>\n        <ion-item>\n          <ion-label>Standard</ion-label>\n          <ion-radio value="Standard"></ion-radio>\n        </ion-item>\n      </ion-list>\n      <ion-list>\n        <ion-item class="coin_status">\n          <ion-icon name="logo-usd"></ion-icon> \n          <span>{{loggedInUserData.coinStatus}}</span>\n        </ion-item>\n        <ion-item class="votes_status">\n          <ion-icon name="bonfire"></ion-icon> \n          <span>{{loggedInUserData.hotVotes}}</span>\n        </ion-item>\n      </ion-list>\n      <ion-item class="location">\n        <ion-item>\n          <ion-icon name="home" item-start></ion-icon>\n          <ion-input type="text" placeholder="Location" value="Germany">Germany</ion-input>\n          <ion-icon name="pin" item-end></ion-icon>\n        </ion-item>\n      </ion-item>\n    </ion-card> \n    <ion-card>\n      <ion-item>\n          <ion-item>\n            <span>Interest</span>\n            <ion-icon name="heart"></ion-icon>  \n          </ion-item>\n      </ion-item>\n    </ion-card>\n    <ion-card>\n      <ion-item class="profile_status">\n          <ion-item>\n            <span>Profile Setting</span>\n            <ion-icon name="create"></ion-icon>  \n          </ion-item>\n      </ion-item>\n      <ion-list radio-group>\n        <ion-item class="role_status">\n          <ion-icon name="person" item-start></ion-icon>\n        </ion-item>\n        <ion-item class="role_vip">\n          <ion-label>VIP</ion-label>\n          <ion-radio value="vip"></ion-radio>\n        </ion-item>\n        <ion-item>\n          <ion-label>Standard</ion-label>\n          <ion-radio value="Standard"></ion-radio>\n        </ion-item>\n      </ion-list>\n      <ion-item class="logout">\n        <button ion-button icon-left full>\n          <ion-icon name="close"></ion-icon>\n          Delete Profile\n        </button>\n        <button ion-button icon-left full (click) = logout() >\n          <ion-icon name="log-out"></ion-icon>\n          Logout\n        </button>\n      </ion-item>\n    </ion-card>   \n  </div>\n  <!-- <tab></tab> -->\n  <!-- <ion-tabs>\n    <ion-tab tabTitle="" tabIcon="person"></ion-tab>\n    <ion-tab tabTitle="" tabIcon="people"></ion-tab>\n    <ion-tab tabTitle="" tabIcon="chatboxes"></ion-tab>\n	  <ion-tab tabTitle="" tabIcon="ios-card-outline"></ion-tab> \n  </ion-tabs> -->\n</ion-content>'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/git/lovepoints_taran/LovePoints/src/pages/profile/profile.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_restfull_restfull__["a" /* RestfullProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
], ProfilePage);

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = ListPage_1 = (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    return ListPage;
}());
ListPage = ListPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-list',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/git/lovepoints_taran/LovePoints/src/pages/list/list.html"*/'<!-- <ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header> -->\n\n<ion-content>\n  <ion-fab top left>\n    <button ion-fab mini menuToggle><ion-icon name="menu"></ion-icon></button>\n  </ion-fab>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-left></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-right>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n  <ion-tabs>\n    <ion-tab tabTitle="" tabIcon="person"></ion-tab>\n    <ion-tab tabTitle="" tabIcon="people"></ion-tab>\n    <ion-tab tabTitle="" tabIcon="chatboxes"></ion-tab>\n	  <ion-tab tabTitle="" tabIcon="ios-card-outline"></ion-tab> \n  </ion-tabs>\n</ion-content>\n'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/git/lovepoints_taran/LovePoints/src/pages/list/list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], ListPage);

var ListPage_1;
//# sourceMappingURL=list.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HotorNotPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__hotornotregion_hotornotregion__ = __webpack_require__(272);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HotorNotPage = (function () {
    function HotorNotPage(navCtrl, http) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.showUserCreditOptions = false;
        this.closePopup = document.getElementById("popupclose");
        this.overlay = document.getElementById("overlay");
        this.popup = document.getElementById("popup");
        this.button = document.getElementById("button");
        localStorage.setItem('activeTab', 'HotorNot');
    }
    HotorNotPage.prototype.goToHotorVote = function () {
        this.showUserCreditOptions = !this.showUserCreditOptions;
    };
    HotorNotPage.prototype.goToHoterRegion = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__hotornotregion_hotornotregion__["a" /* HotorNotRegionPage */]);
    };
    HotorNotPage.prototype.closePopUp = function () {
        this.showUserCreditOptions = false;
    };
    return HotorNotPage;
}());
HotorNotPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-hotornot',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/git/lovepoints_taran/LovePoints/src/pages/hotornot/hotornot.html"*/'<ion-content>\n  <ion-fab top left>\n    <button ion-fab mini menuToggle><ion-icon name="menu"></ion-icon></button>\n  </ion-fab>\n  <div class="section_1">\n    <div class="hotornot">\n      <button ion-button (click)="goToHotorVote()">Go to HotorNot-Vote</button>\n    </div>\n    <div class="hotornot">\n      <button ion-button (click)="goToHoterRegion()">Hot or Not of your region</button>\n    </div>\n  </div>\n  <div class="section_2">\n    <div class="hotornot">\n      <button ion-button>You have 2 Contact Requests</button> \n    </div>\n    <div class="creditpoints">\n      Your current Credit Points are: 25 Points\n    </div>\n    <div class="hotvotes">\n      Your current HotVotes are: 3\n    </div>\n  </div>\n  <div id="overlay" class="overlay" *ngIf="showUserCreditOptions"></div>\n  <div data-pop="pop-swirl" id="popup" class="member_profile" *ngIf="showUserCreditOptions" [ngClass]="showUserCreditOptions==true ? \'show\' : \'\'">\n    <ion-icon id="popupclose" class="closeProfile" name="close" (click)="closePopUp()"></ion-icon> \n    <div class="section_3">\n      <div class="hotornot">\n        <button ion-button icon-left>\n          <ion-icon name="videocam"></ion-icon>\n          Watch Video to earn Credit Points\n        </button>\n      </div>\n      <div class="hotornot">\n        <button ion-button icon-left>\n          <ion-icon name="card"></ion-icon>\n          Shop for Credit Points\n        </button>\n      </div>\n    </div>\n  </div>\n  <tab></tab>\n</ion-content>'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/git/lovepoints_taran/LovePoints/src/pages/hotornot/hotornot.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
], HotorNotPage);

//# sourceMappingURL=hotornot.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HotorNotRegionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HotorNotRegionPage = (function () {
    function HotorNotRegionPage(navCtrl, http) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.showUsersProfile = false;
        this.showUsersFilter = false;
        this.showUsersFilterIcon = 'ios-add-circle-outline';
        this.closePopup = document.getElementById("popupclose");
        this.overlay = document.getElementById("overlay");
        this.popup = document.getElementById("popup");
        this.button = document.getElementById("button");
        this.data = [];
        this.brightness = 20;
        this.contrast = 30;
        this.warmth = 1300;
        this.structure = { lower: 33, upper: 60 };
        this.text = 0;
        localStorage.setItem('activeTab', 'HotorNot');
        for (var i = 0; i < 1; i++) {
            this.data.push({
                title: 'Title ' + i,
                details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                icon: 'ios-add-circle-outline',
                showDetails: false
            });
        }
    }
    HotorNotRegionPage.prototype.toggleDetails = function () {
        if (this.showUsersFilter) {
            this.showUsersFilter = false;
            this.showUsersFilterIcon = 'ios-add-circle-outline';
        }
        else {
            this.showUsersFilter = true;
            this.showUsersFilterIcon = 'ios-remove-circle-outline';
        }
    };
    HotorNotRegionPage.prototype.openUserProfile = function (userId) {
        this.showUsersProfile = !this.showUsersProfile;
    };
    HotorNotRegionPage.prototype.closePopUp = function () {
        this.showUsersProfile = false;
    };
    return HotorNotRegionPage;
}());
HotorNotRegionPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-hotornotregion',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/git/lovepoints_taran/LovePoints/src/pages/hotornotregion/hotornotregion.html"*/'<ion-content>\n  <ion-fab top left>\n    <button ion-fab mini menuToggle><ion-icon name="menu"></ion-icon></button>\n  </ion-fab>\n  <div class="hotornot_section">\n    <img (click)="openUserProfile(1)" src="assets/images/profile1.png"/>\n  </div>\n  <div class="hotornot_section">\n    <img (click)="openUserProfile(1)" src="assets/images/profile2.png"/>\n  </div>\n  <div class="hotornot_section">\n    <img (click)="openUserProfile(1)" src="assets/images/profile3.png"/>\n  </div>\n  <div class="hotornot_section">\n    <img (click)="openUserProfile(1)" src="assets/images/profile4.png"/>\n  </div>\n  <div class="hotornot_section">\n    <img (click)="openUserProfile(1)" src="assets/images/profile2.png"/>\n  </div>\n  <div class="hotornot_section">\n    <img (click)="openUserProfile(1)" src="assets/images/profile3.png"/>\n  </div>\n  <div class="hotornot_section">\n    <img (click)="openUserProfile(1)" src="assets/images/profile4.png"/>\n  </div>\n  <div class="hotornot_section">\n    <img (click)="openUserProfile(1)" src="assets/images/profile1.png"/>\n  </div>\n  <div class="hotornot_section">\n    <img (click)="openUserProfile(1)" src="assets/images/profile2.png"/>\n  </div>\n  <div class="hotornot_section">\n    <img (click)="openUserProfile(1)" src="assets/images/profile3.png"/>\n  </div>\n  <div class="hotornot_section">\n    <img (click)="openUserProfile(1)" src="assets/images/profile4.png"/>\n  </div>\n  <div class="hotornot_section">\n    <img (click)="openUserProfile(1)" src="assets/images/profile3.png"/>\n  </div>\n  <div class="hotornot_section">\n    <img (click)="openUserProfile(1)" src="assets/images/profile4.png"/>\n  </div>\n  <div class="hotornot_section">\n    <img (click)="openUserProfile(1)" src="assets/images/profile1.png"/>\n  </div>\n  <div class="hotornot_section">\n    <img (click)="openUserProfile(1)" src="assets/images/profile2.png"/>\n  </div>\n  <div id="overlay" class="overlay" *ngIf="showUsersProfile"></div>\n  <div data-pop="pop-swirl" id="popup" class="member_profile" *ngIf="showUsersProfile" [ngClass]="showUsersProfile==true ? \'show\' : \'\'">\n    <ion-icon id="popupclose" class="closeProfile" name="close" (click)="closePopUp()"></ion-icon> \n    <div class="location">\n      <ion-icon name="pin" class="title"><span> Current Location (~2.2 km away)</span></ion-icon> \n      <div class="description">New Delhi, Delhi</div>\n    </div>\n    <div class="about_me">\n      <ion-icon name="information-circle" class="title"><span> About Me</span></ion-icon>\n      <div class="description">Hello World! This is the development phase of Love Points App. Stay tuned for more updates!</div>\n    </div>\n    <div class="languages">\n      <ion-icon name="globe" class="title"><span> Languages</span></ion-icon>\n      <div class="description">English, German, French</div>\n    </div>\n  </div>\n  <ion-list class="filter_list">\n    <ion-item *ngFor="let d of data" >\n      <div (click)="toggleDetails()">\n        <ion-icon color="primary" class="filter_icon" item-right [name]="showUsersFilterIcon"></ion-icon>\n        <div class="filter_label">Filters</div>\n      </div>\n      <ion-card *ngIf="showUsersFilter">\n      <ion-card radio-group  class="filter_gender">\n        <ion-list-header>\n          Gender\n        </ion-list-header>\n        <ion-item> \n          <ion-label>Male</ion-label>\n          <ion-radio checked="true" value="male"></ion-radio>\n        </ion-item>\n        <ion-item>\n          <ion-label>Female</ion-label>\n          <ion-radio value="female"></ion-radio>\n        </ion-item>\n      </ion-card>\n      <ion-card radio-group class="filter_range">\n        <ion-list-header>\n          Range\n        </ion-list-header>    \n        <ion-item>\n          <ion-range min="0" max="200" pin="true" [(ngModel)]="contrast" color="secondary">\n            <ion-icon range-left small name="pin"></ion-icon>\n            <ion-icon range-right name="pin"></ion-icon>\n          </ion-range>\n        </ion-item>\n      </ion-card>\n      <ion-card radio-group class="filter_age">\n        <ion-list-header>\n          Age\n        </ion-list-header>\n        <ion-item>\n          <ion-range dualKnobs="true" pin="true" [(ngModel)]="structure" color="dark">\n            <ion-icon range-left small name="people"></ion-icon>\n            <ion-icon range-right name="people"></ion-icon>\n          </ion-range> \n        </ion-item>\n      </ion-card>\n      <div class="filter_member">\n        <button ion-button block>Become VIP</button>\n      </div>\n    </ion-card>\n      <!-- <div *ngIf="showUsersFilter" style="white-space: pre-wrap;">{{d.details}}</div> -->\n    </ion-item>\n  </ion-list>\n  <tab></tab>\n</ion-content>'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/git/lovepoints_taran/LovePoints/src/pages/hotornotregion/hotornotregion.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
], HotorNotRegionPage);

//# sourceMappingURL=hotornotregion.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(278);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_background_geolocation__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_message_message__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_profile_profile__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_list_list__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_hotornot_hotornot__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_hotornotregion_hotornotregion__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_register_register__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_tab_tab__ = __webpack_require__(595);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_news_news__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_http__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_angular2_swing__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_angular2_swing___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_angular2_swing__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_restfull_restfull__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_url__ = __webpack_require__(240);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_message_message__["a" /* MessagePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_profile_profile__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_hotornot_hotornot__["a" /* HotorNotPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_hotornotregion_hotornotregion__["a" /* HotorNotRegionPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_news_news__["a" /* NewsPage */],
            __WEBPACK_IMPORTED_MODULE_14__components_tab_tab__["a" /* TabComponent */],
            __WEBPACK_IMPORTED_MODULE_13__pages_register_register__["a" /* RegisterPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_18__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */]),
            __WEBPACK_IMPORTED_MODULE_19_angular2_swing__["SwingModule"]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_message_message__["a" /* MessagePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_profile_profile__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_hotornot_hotornot__["a" /* HotorNotPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_hotornotregion_hotornotregion__["a" /* HotorNotRegionPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_news_news__["a" /* NewsPage */],
            __WEBPACK_IMPORTED_MODULE_14__components_tab_tab__["a" /* TabComponent */],
            __WEBPACK_IMPORTED_MODULE_13__pages_register_register__["a" /* RegisterPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_20__providers_restfull_restfull__["a" /* RestfullProvider */],
            __WEBPACK_IMPORTED_MODULE_21__providers_url__["a" /* Urls */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_background_geolocation__["a" /* BackgroundGeolocation */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_background_geolocation__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_message_message__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_profile_profile__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_list_list__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_news_news__ = __webpack_require__(80);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var MyApp = (function () {
    function MyApp(app, platform, statusBar, splashScreen, backgroundGeolocation) {
        this.app = app;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.backgroundGeolocation = backgroundGeolocation;
        this.loggedInUserData = {};
        this.loggedInUserName = "";
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', icon: 'ios-home-outline', component: __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */] },
            { title: 'Settings', icon: 'ios-settings-outline', component: __WEBPACK_IMPORTED_MODULE_9__pages_list_list__["a" /* ListPage */] },
            { title: 'My Profile', icon: 'ios-person-outline', component: __WEBPACK_IMPORTED_MODULE_7__pages_profile_profile__["a" /* ProfilePage */] },
            { title: 'Messages', icon: 'ios-chatboxes-outline', component: __WEBPACK_IMPORTED_MODULE_6__pages_message_message__["a" /* MessagePage */] },
            { title: 'Activity', icon: 'ios-flash-outline', component: __WEBPACK_IMPORTED_MODULE_9__pages_list_list__["a" /* ListPage */] },
            { title: 'Logout', icon: 'ios-log-out-outline', component: __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */] }
        ];
    }
    MyApp.prototype.ngOnInit = function () {
        var data = localStorage.getItem('userDetails');
        if (data) {
            var data1 = JSON.parse(data);
            console.log("user logged in");
            this.rootPage = __WEBPACK_IMPORTED_MODULE_10__pages_news_news__["a" /* NewsPage */];
            this.loggedInUserName = data1.user.firstName + ' ' + data1.user.lastName;
            this.loggedInUserData = {
                "name": this.loggedInUserName,
                "profileStatus": "VIP",
                "coinStatus": "10",
                "hotVotes": "6"
            };
            console.log(this.loggedInUserData);
        }
        else {
            console.log("user needs to log in");
            this.rootPage = __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */];
        }
    };
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            //this.getUsersLocation();
        });
    };
    MyApp.prototype.getUsersLocation = function () {
        alert("getUsersLocation");
        var config = {
            desiredAccuracy: 10,
            stationaryRadius: 20,
            distanceFilter: 30,
            debug: true,
            stopOnTerminate: false,
        };
        this.backgroundGeolocation.configure(config)
            .subscribe(function (BackgroundGeolocationResponse) {
            alert(BackgroundGeolocationResponse);
            // IMPORTANT:  You must execute the finish method here to inform the native plugin that you're finished,
            // and the background-task may be completed.  You must do this regardless if your HTTP request is successful or not.
            // IF YOU DON'T, ios will CRASH YOUR APP for spending too much time in the background.
            //this.backgroundGeolocation.finish(); // FOR IOS ONLY
        });
        // start recording location
        this.backgroundGeolocation.start();
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        var nav = this.app.getRootNav();
        //this.nav.setRoot(page.component);
        nav.setRoot(page.component);
        localStorage.setItem('activeTab', 'Home');
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/git/lovepoints_taran/LovePoints/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header class="menubar_header">\n    <!-- <ion-toolbar>\n      <ion-title>Menu 123</ion-title>\n    </ion-toolbar> -->\n    <ion-list>\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/images/image1.jpg">\n        </ion-thumbnail>\n        <h2>{{loggedInUserData.name}}</h2>\n        <div>\n          <div class="profile_data"><ion-icon name="person" item-left></ion-icon>{{loggedInUserData.profileStatus}}</div>\n          <div class="profile_data"><ion-icon name="logo-usd" item-left></ion-icon>{{loggedInUserData.coinStatus}}</div>\n          <div class="profile_data"><ion-icon name="bonfire" item-left></ion-icon>{{loggedInUserData.hotVotes}}</div>\n        </div>\n      </ion-item>\n    </ion-list>\n  </ion-header>\n\n  <ion-content class="menubar">\n    <ion-list>\n      <!-- <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button> -->\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        <ion-icon [name]="p.icon" item-left></ion-icon>\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/git/lovepoints_taran/LovePoints/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_background_geolocation__["a" /* BackgroundGeolocation */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestfullProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__url__ = __webpack_require__(240);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RestfullProvider = (function () {
    function RestfullProvider(http, urlScheme) {
        this.http = http;
        this.urlScheme = urlScheme;
    }
    RestfullProvider.prototype.Login = function (userLoginObj) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        var Form = {
            "email": userLoginObj.email,
            "password": userLoginObj.password
        };
        return this.http.post(this.urlScheme.authApiUrl.login, Form, options).map(function (res) { return res.json(); });
    };
    RestfullProvider.prototype.addUser = function (userObj) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        console.log(userObj);
        return this.http.post(this.urlScheme.authApiUrl.register, userObj, options).map(function (res) { return res.json(); });
    };
    RestfullProvider.prototype.getUsers = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        return this.http.post(this.urlScheme.userApiUrl.getUsers, {}, options).map(function (res) { return res.json(); });
    };
    RestfullProvider.prototype.viewProfile = function (userId) {
        var viewProfileUrl = this.urlScheme.userApiUrl.viewProfile + userId;
        return this.http.get(viewProfileUrl).map(function (res) { return res.json(); });
    };
    RestfullProvider.prototype.updateProfile = function (userId, object) {
        var updateProfileUrl = this.urlScheme.userApiUrl.updateProfile + userId;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        return this.http.post(updateProfileUrl, object, options).map(function (res) { return res.json(); });
    };
    RestfullProvider.prototype.uploadPhoto = function (photoObj, userId) {
        var uploadPhotoUrl = this.urlScheme.userApiUrl.uploadPhoto + userId;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        return this.http.post(uploadPhotoUrl, photoObj, options).map(function (res) { return res.json(); });
    };
    RestfullProvider.prototype.updateGeolocation = function (longLatObject, userId) {
        var updateGeolocationUrl = this.urlScheme.userApiUrl.updateGeolocation + userId;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        return this.http.post(updateGeolocationUrl, longLatObject, options).map(function (res) { return res.json(); });
    };
    RestfullProvider.prototype.sendLocation = function (locationObject) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        return this.http.post(this.urlScheme.locationApiUrl.sendLocation, locationObject, options).map(function (res) { return res.json(); });
    };
    RestfullProvider.prototype.nearBy = function (longLatObject) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        return this.http.post(this.urlScheme.locationApiUrl.nearBy, longLatObject, options).map(function (res) { return res.json(); });
    };
    RestfullProvider.prototype.newConversation = function (obj, recipientId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        var newConversationUrl = this.urlScheme.chatApiUrl.newConversation + recipientId;
        return this.http.post(newConversationUrl, obj, options).map(function (res) { return res.json(); });
    };
    RestfullProvider.prototype.sendReply = function (obj, conversationId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        var sendReplyUrl = this.urlScheme.chatApiUrl.newConversation + conversationId;
        return this.http.post(sendReplyUrl, obj, options).map(function (res) { return res.json(); });
    };
    RestfullProvider.prototype.getMessages = function (userId) {
        var getMessagesUrl = this.urlScheme.chatApiUrl.getConversation + userId;
        return this.http.get(getMessagesUrl).map(function (res) { return res.json(); });
    };
    return RestfullProvider;
}());
RestfullProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__url__["a" /* Urls */]])
], RestfullProvider);

//# sourceMappingURL=restfull.js.map

/***/ }),

/***/ 595:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_message_message__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_hotornot_hotornot__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_news_news__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(74);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the TabComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var TabComponent = (function () {
    function TabComponent(app, navCtrl) {
        this.app = app;
        this.navCtrl = navCtrl;
        this.isPageActive = localStorage.getItem('activeTab') ? localStorage.getItem('activeTab') : 'NewsPage';
    }
    TabComponent.prototype.openPage = function (page) {
        if (localStorage.getItem('activeTab') == page)
            return;
        var nav = this.app.getRootNav();
        if (page == "HotorNotPage") {
            // this.navCtrl.pop();
            // this.navCtrl.push(HotorNotPage);
            nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_hotornot_hotornot__["a" /* HotorNotPage */]);
            localStorage.setItem('activeTab', 'HotorNot');
        }
        else if (page == "MessagePage") {
            // this.navCtrl.pop();
            // this.navCtrl.push(MessagePage);
            nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__pages_message_message__["a" /* MessagePage */]);
            localStorage.setItem('activeTab', 'Message');
        }
        else if (page == "HomePage") {
            // this.navCtrl.pop();
            // this.navCtrl.push(HomePage);
            nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */]);
            localStorage.setItem('activeTab', 'Home');
        }
        else if (page == "NewsPage") {
            // this.navCtrl.pop();
            // this.navCtrl.push(NewsPage);
            nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_news_news__["a" /* NewsPage */]);
            localStorage.setItem('activeTab', 'News');
        }
    };
    return TabComponent;
}());
TabComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'tab',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/git/lovepoints_taran/LovePoints/src/components/tab/tab.html"*/'<!-- Generated template for the TabComponent component -->\n<!-- <div class="tabbar">\n    <div class="tabs_section">\n        <ion-icon name="person" item-start></ion-icon>\n    </div>\n    <div class="tabs_section">\n        <ion-icon name="people" item-start></ion-icon>\n    </div>\n    <div class="tabs_section">\n        <ion-icon name="chatboxes" item-start></ion-icon>\n    </div>\n    <div class="tabs_section">\n        <ion-icon name="ios-card-outline" item-start></ion-icon>\n    </div>\n</div> -->\n<!-- <ion-tabs>\n    <ion-tab tabTitle="" tabIcon="person"></ion-tab>\n    <ion-tab tabTitle="" tabIcon="people"></ion-tab>\n    <ion-tab tabTitle="" tabIcon="chatboxes"></ion-tab>\n	<ion-tab tabTitle="" tabIcon="ios-card-outline"></ion-tab> \n</ion-tabs> -->\n<div class="tabbar">\n    <div class="tabs_section" [ngClass]="isPageActive==\'Home\' ? \'active\' : \'\'">\n        <ion-icon name="person" (click)="openPage(\'HomePage\')" item-start></ion-icon>\n    </div>\n    <div class="tabs_section" [ngClass]="isPageActive==\'HotorNot\' ? \'active\' : \'\'">\n        <ion-icon name="people" (click)="openPage(\'HotorNotPage\')" item-start></ion-icon>\n    </div>\n    <div class="tabs_section" [ngClass]="isPageActive==\'Message\' ? \'active\' : \'\'">\n        <ion-icon name="chatboxes" (click)="openPage(\'MessagePage\')" item-start></ion-icon>\n    </div>\n    <div class="tabs_section" [ngClass]="isPageActive==\'News\' ? \'active\' : \'\'">\n        <ion-icon name="ios-card-outline" (click)="openPage(\'NewsPage\')" item-start></ion-icon>\n    </div>\n</div> '/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/git/lovepoints_taran/LovePoints/src/components/tab/tab.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
], TabComponent);

//# sourceMappingURL=tab.js.map

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_restfull_restfull__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_swing__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_swing___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_swing__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = (function () {
    function HomePage(app, navCtrl, http, rest) {
        var _this = this;
        this.app = app;
        this.navCtrl = navCtrl;
        this.http = http;
        this.rest = rest;
        this.recentCard = '';
        this.showProfile = false;
        this.allUsers = [];
        this.cards = [];
        if (localStorage.getItem('activeTab') != 'Home') {
            localStorage.setItem('activeTab', 'News');
            var nav = this.app.getRootNav();
            nav.setRoot('HomePage');
            //this.navCtrl.pop();
            //this.navCtrl.push(NewsPage);
        }
        this.stackConfig = {
            throwOutConfidence: function (offsetX, offsetY, element) {
                return Math.min(Math.abs(offsetX) / (element.offsetWidth / 2), 1);
            },
            transform: function (element, x, y, r) {
                _this.onItemMove(element, x, y, r);
            },
            throwOutDistance: function (d) {
                return 800;
            }
        };
    }
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        this.rest.getUsers().subscribe(function (res) { return _this.getAllUsers(res); });
    };
    HomePage.prototype.getAllUsers = function (res) {
        this.allUsers = res;
        console.log(this.allUsers);
        this.cards = [];
        for (var i = 0; i < this.allUsers.length; i++) {
            this.cards.push({
                title: this.allUsers[i].profile.title,
                firstName: this.allUsers[i].profile.firstName,
                lastName: this.allUsers[i].profile.lastName,
                email: this.allUsers[i].profile.email,
                picture: "assets/images/image1.jpg"
            });
        }
        // this.cards = [
        // 	{  "title": user.profile.gender, "first": user.profile.firstName, "last": user.lastName ,	"email": user.email, "picture": "assets/images/image1.jpg" , "age" : "21"},
        // 	{  "title": user.profile.gender, "first": user.profile.firstName, "last": user.lastName ,	"email": user.email, "picture": "assets/images/image2.jpg" , "age" : "22"},
        // 	{  "title": user.profile.gender, "first": user.profile.firstName, "last": user.lastName ,	"email": user.email, "picture": "assets/images/image1.jpg" , "age" : "23"},
        // 	{  "title": user.profile.gender, "first": user.profile.firstName, "last": user.lastName ,	"email": user.email, "picture": "assets/images/image2.jpg" , "age" : "24"},
        // 	{  "title": user.profile.gender, "first": user.profile.firstName, "last": user.lastName ,	"email": user.email, "picture": "assets/images/image1.jpg" , "age" : "21"},
        // 	{  "title": user.profile.gender, "first": user.profile.firstName, "last": user.lastName ,	"email": user.email, "picture": "assets/images/image2.jpg" , "age" : "22"},
        // 	{  "title": user.profile.gender, "first": user.profile.firstName, "last": user.lastName ,	"email": user.email, "picture": "assets/images/image1.jpg" , "age" : "23"},
        // 	{  "title": user.profile.gender, "first": user.profile.firstName, "last": user.lastName ,	"email": user.email, "picture": "assets/images/image2.jpg" , "age" : "24"},
        // ];
        console.log(this.cards);
        this.addNewCards(1);
    };
    HomePage.prototype.ngAfterViewInit = function () {
        // Either subscribe in controller or set in HTML
        this.swingStack.throwin.subscribe(function (event) {
            event.target.style.background = '#ffffff';
        });
    };
    // Called whenever we drag an element
    HomePage.prototype.onItemMove = function (element, x, y, r) {
        var color = '';
        var abs = Math.abs(x);
        var min = Math.trunc(Math.min(16 * 16 - abs, 16 * 16));
        var hexCode = this.decimalToHex(min, 2);
        // if (x >= 0) {
        //   color = '#FF' + hexCode + hexCode;
        // } else {
        //   color = '#' + hexCode + 'FF' + hexCode;
        // }
        element.style.background = color;
        element.style['transform'] = "translate3d(0, 0, 0) translate(" + x + "px, " + y + "px) rotate(" + r + "deg)";
    };
    // Connected through HTML
    HomePage.prototype.voteUp = function (like) {
        var removedCard = this.cards.pop();
        this.addNewCards(1);
        if (like) {
            this.recentCard = 'You liked: ' + removedCard.email;
        }
        else {
            this.recentCard = 'You disliked: ' + removedCard.email;
        }
    };
    // Add new cards to our array
    HomePage.prototype.addNewCards = function (count) {
        //this.cards.push(this.dummyCard);
        //this.cards.push(this.dummyCard);
        //this.cards.push(this.dummyCard);
        //  this.http.get('https://randomuser.me/api/?results=' + count)
        //  .map(data => data.json().results)
        //  .subscribe(result => {
        //    for (let val of result) {
        //      this.cards.push(val);
        //    }
        //  })
    };
    // http://stackoverflow.com/questions/57803/how-to-convert-decimal-to-hex-in-javascript
    HomePage.prototype.decimalToHex = function (d, padding) {
        var hex = Number(d).toString(16);
        padding = typeof (padding) === "undefined" || padding === null ? padding = 2 : padding;
        while (hex.length < padding) {
            hex = "0" + hex;
        }
        return hex;
    };
    HomePage.prototype.onImageTap = function () {
        this.showProfile = !this.showProfile;
    };
    return HomePage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myswing1'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5_angular2_swing__["SwingStackComponent"])
], HomePage.prototype, "swingStack", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])('mycards1'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"])
], HomePage.prototype, "swingCards", void 0);
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-home',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/git/lovepoints_taran/LovePoints/src/pages/home/home.html"*/'<!-- <ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header> -->\n\n<ion-content>\n  <ion-fab top left>\n    <button ion-fab mini menuToggle><ion-icon name="menu"></ion-icon></button>\n  </ion-fab>\n  <div swing-stack #myswing1 [stackConfig]="stackConfig" (throwoutleft)="voteUp(true)" (throwoutright)="voteUp(false)" id="card-stack">\n    <ion-card #mycards1 swing-card *ngFor="let c of cards" class="swipe_card">\n      <img *ngIf="c.picture" [src]="c.picture" (click)="onImageTap()"> \n      <!-- <img src="c.picture.large"/> -->\n      <!-- <ion-item *ngIf="c.picture">\n        <ion-avatar item-left>\n           <img *ngIf="c.picture"[src]="c.picture.medium"> \n          <img src="/assets/images/image.jpg">\n        </ion-avatar>\n      </ion-item> -->\n      <ion-grid class="member_name">\n        <ion-row>\n          <ion-col col-9 class="swipe_name">\n            <div>{{c.firstName}} {{c.lastName}}</div> \n          </ion-col>\n          <ion-col col-3 class="swipe_age">\n            <div>{{c.age}}</div>     \n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <!-- <div class="member_name">\n        <div class="swipe_name col-md-9">{{c.name.first}} {{c.name.last}}</div> \n        <div class="swipe_age col-md-3">{{c.age}}</div> \n      </div> -->\n      <div class="member_profile" *ngIf="showProfile">\n        <div class="location">\n          <ion-icon name="pin" class="title"><span> Current Location (~2.2 km away)</span></ion-icon> \n          <div class="description">New Delhi, Delhi</div>\n        </div>\n        <div class="about_me">\n          <ion-icon name="information-circle" class="title"><span> About Me</span></ion-icon>\n          <div class="description">Hello World! This is the development phase of Love Points App. Stay tuned for more updates!</div>\n        </div>\n        <div class="languages">\n          <ion-icon name="globe" class="title"><span> Languages</span></ion-icon>\n          <div class="description">English, German, French</div>\n        </div>\n      </div>\n      <ion-fab bottom center class="dislike_button" *ngIf="!showProfile">\n        <button ion-fab mini><ion-icon name="close" (click)="voteUp(false)"></ion-icon></button>\n      </ion-fab> \n      <ion-fab bottom center class="like_button" *ngIf="!showProfile">\n        <button ion-fab mini><ion-icon name="heart-outline" (click)="voteUp(true)"></ion-icon></button>\n      </ion-fab>\n    </ion-card>\n  </div>\n  <tab></tab>\n  <!-- <div class="tabbar">\n      <div class="tabs_section active">\n          <ion-icon name="person" (click)="openPage(\'HomePage\')" item-start></ion-icon>\n      </div>\n      <div class="tabs_section">\n          <ion-icon name="people" (click)="openPage(\'ProfilePage\')" item-start></ion-icon>\n      </div>\n      <div class="tabs_section">\n          <ion-icon name="chatboxes" (click)="openPage(\'MessagePage\')" item-start></ion-icon>\n      </div>\n      <div class="tabs_section">\n          <ion-icon name="ios-card-outline" (click)="openPage(\'HomePage\')" item-start></ion-icon>\n      </div>\n  </div>  -->\n  <!-- <ion-tabs>\n    <ion-tab tabTitle="" (click)="openPage(\'HomePage\')" class="active" tabIcon="person"></ion-tab>\n    <ion-tab tabTitle="" (click)="openPage(\'ProfilePage\')" tabIcon="people"></ion-tab>\n    <ion-tab tabTitle="" tabIcon="chatboxes"></ion-tab>\n	  <ion-tab tabTitle="" tabIcon="ios-card-outline"></ion-tab> \n  </ion-tabs> -->\n</ion-content>'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/git/lovepoints_taran/LovePoints/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__providers_restfull_restfull__["a" /* RestfullProvider */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NewsPage = (function () {
    function NewsPage(app, navCtrl, navParams) {
        this.app = app;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        localStorage.setItem('activeTab', 'News');
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    return NewsPage;
}());
NewsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-news',template:/*ion-inline-start:"/Applications/XAMPP/xamppfiles/htdocs/git/lovepoints_taran/LovePoints/src/pages/news/news.html"*/'<ion-content>\n  <ion-fab top left>\n    <button ion-fab mini menuToggle><ion-icon name="menu"></ion-icon></button>\n  </ion-fab>\n  <ion-card>\n    <img src="assets/images/profile2.jpg"/>\n    <ion-card-content>\n      <ion-card-title>\n        Nine Inch Nails Live\n        </ion-card-title>\n      <p>\n        The most popular industrial group ever, and largely\n        responsible for bringing the music to a mass audience.\n      </p>\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <img src="assets/images/profile2.jpg"/>\n    <ion-card-content>\n      <ion-card-title>\n        Nine Inch Nails Live\n        </ion-card-title>\n      <p>\n        The most popular industrial group ever, and largely\n        responsible for bringing the music to a mass audience.\n      </p>\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <img src="assets/images/profile2.jpg"/>\n    <ion-card-content>\n      <ion-card-title>\n        Nine Inch Nails Live\n        </ion-card-title>\n      <p>\n        The most popular industrial group ever, and largely\n        responsible for bringing the music to a mass audience.\n      </p>\n    </ion-card-content>\n  </ion-card>\n  <tab></tab>\n</ion-content>\n'/*ion-inline-end:"/Applications/XAMPP/xamppfiles/htdocs/git/lovepoints_taran/LovePoints/src/pages/news/news.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], NewsPage);

//# sourceMappingURL=news.js.map

/***/ })

},[273]);
//# sourceMappingURL=main.js.map