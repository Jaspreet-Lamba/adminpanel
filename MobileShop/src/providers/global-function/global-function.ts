import { Injectable, NgZone } from '@angular/core';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import { Subscriber } from 'rxjs/Subscriber';
import { Subscribable, Observable } from 'rxjs/Observable';

/*
  Generated class for the GlobalFunctionProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class GlobalFunctionProvider {

  public isUserloggedIn: boolean = false;
  public userName: string;
  
  constructor(public zone: NgZone) {}

  checkUserName(): Observable <any> {
    let userName = JSON.parse(localStorage.getItem('userDetails'));
    if(userName) {
      var name = userName.firstName + " " + userName.lastName;
      return Observable.of(name);
    }
    else
      return Observable.of('guest');
  }

  getUserName() {
    this.checkUserName().subscribe(res=>{
      if(res == 'guest') {
        this.isUserloggedIn = false;
      }else {
        this.isUserloggedIn = true;
        this.setUserName(res);
      }
    })
  }

  setUserName(data) {
    this.userName = data;
  }
}
