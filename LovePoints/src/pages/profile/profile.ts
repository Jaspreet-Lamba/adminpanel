import { Component, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { NavController, ActionSheetController } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
import { Http } from '@angular/http';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { RestfullProvider } from '../../providers/restfull/restfull';
import { RegisterPage } from '../register/register';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})

export class ProfilePage {
	loggedInUserData;
	loggedInUserName = "";
	srcValue;
	defaultProfilePic = [
		{ "pic":"assets/images/profile2.jpg" }
	];
	constructor(public rest : RestfullProvider, public nav : NavController, private camera: Camera, private sanitizer: DomSanitizer, public actionsheetCtrl: ActionSheetController){
		var data = localStorage.getItem('userDetails');
		if(data) {
			var data1 = JSON.parse(data)
			console.log(data1);
			this.loggedInUserName = data1.user.firstName + ' ' + data1.user.lastName;
			this.loggedInUserData = {
				"name" : data1.user.firstName + ' ' + data1.user.lastName,
				"profileStatus" : data1.user.role,
				"coinStatus" : "10",
				"hotVotes": "6",
				"userId" : data1.user._id,
				"email" : data1.user.email,
				"profilePicture" : data1.user.profilePicture
			};
			this.defaultProfilePic = [
				{ "pic":data1.user.profilePicture }
			];
			
			console.log(this.defaultProfilePic);
		}
	}

	doRegister(){
	  this.nav.push(RegisterPage); 
	}

	openCameraOptions() {
		let actionSheet = this.actionsheetCtrl.create({
      title: 'Picture Option',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Camera',
          icon: 'camera',
          handler: () => {
			this.openCamera('camera');
		  }
        },
        {
          text: 'Gallery',
          icon: 'images',
          handler: () => {
            this.openCamera('gallery');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel', 
          icon: 'close',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
	}

	openCamera(option) {
		var sourcePath = 0;
		if(option == 'camera') {
			sourcePath = this.camera.PictureSourceType.CAMERA;
		} else {
			sourcePath = this.camera.PictureSourceType.SAVEDPHOTOALBUM;
		}
		
		const options: CameraOptions = {
			quality: 100,
			destinationType: this.camera.DestinationType.FILE_URI,
			sourceType: sourcePath,
			encodingType: this.camera.EncodingType.JPEG,
			mediaType: this.camera.MediaType.PICTURE
		}

		this.camera.getPicture(options).then((imageData) => {
			this.srcValue = this.sanitizer.bypassSecurityTrustResourceUrl(imageData);
			this.defaultProfilePic.push({ "pic": this.srcValue });
		}, (err) => {
			// Handle error
		});
	}

updateProfile(){
	let object = {
		gender  : "male",
		city : "New Delhi",
		state : "Delhi",
		pincode: "110045"
	}
	this.rest.updateProfile(this.loggedInUserData.userId, object).subscribe(res=>console.log(res))
}

  
 logout(){
	 this.nav.push(LoginPage);
 } 
}
