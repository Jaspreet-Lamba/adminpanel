import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { KnowledgebasedataService } from './knowledgebasedata.service';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Configuration } from '../config';
import { Observable } from 'rxjs/Observable';
// class FlowGuard implements CanActivate {
//   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){

//     return false;
//   }
// }

@Injectable()
export class AuthenticationService {
  UserLogin: {
    username: string,
    password: string
  }
   a;
  public data;
  public check;
  static value;
  constructor(public router1: Router, public auth: KnowledgebasedataService,public httpService: Http, public UrlObject: Configuration) { }
  set(UserObj) {
    this.UserLogin = UserObj;
    console.log(this.UserLogin);
    this.router1.navigate(['./addheading']);
  }
    Postlogin(UserLogin): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    this.a = this.httpService.post(this.UrlObject.UrlObj.CheckUrl, UserLogin, headers)
      .map((response => {
        this.check = response
        console.log(this.check._body);
        AuthenticationService.value=this.check._body
      }
      ));
    console.log(this.check);
    return this.a;
  }

  // login(){
  // // this.auth.Postlogin(this.UserLogin);

  // }
}

@Injectable()
export class CanActivateViaAuthGuard implements CanActivate {
  UserLogin: {
    username: string,
    password: string
  }
  constructor( public SendData: KnowledgebasedataService,public router1: Router) { }
  canActivate() {
    if (AuthenticationService.value) {
      
      return true;
    }

  
    else {
      alert("Wrong Credentials !!");
      return false;
    }

  }
} 