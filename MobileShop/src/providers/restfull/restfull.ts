import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
// import { Urls } from '../url'

@Injectable()
export class RestfullProvider {

  constructor(public http: Http) {}

  BaseUrl = "http://localhost:4000/api/v1/";
	
  public userApiUrl = {
      login : this.BaseUrl + "login",
      register: this.BaseUrl + "register",
  }
  public dataApiUrl = {
      getAllCategory : this.BaseUrl + "getAllCategory",
      getAllCategoryWithProducts : this.BaseUrl + "getAllCategoryWithProducts",
  }
  
  // Urls = {
  //   getAllProducts : this.BaseUrl + "getAllProducts",
	// 	addProduct : this.BaseUrl + "addProduct",
	// 	updateProduct: this.BaseUrl + "updateProduct",
	// 	deleteProduct: this.BaseUrl + "deleteProduct",
	// 	addCategory : this.BaseUrl + "addCategory",
	// 	updateCategory : this.BaseUrl + "updateCategory",
	// 	getAllCategory : this.BaseUrl + "getAllCategory"
  // }

  headers = new Headers({
    'Content-Type': 'application/json'
  });
  options = new RequestOptions({
    headers: this.headers
  });

  getAllCategoryWithProducts() :Observable<any>{
    return this.http.get(this.dataApiUrl.getAllCategoryWithProducts).map(data=>data = data.json());
  }
  
  getAllCategory() :Observable<any>{
    return this.http.get(this.dataApiUrl.getAllCategory).map(data=>data = data.json());
  }
  
  Login(userLoginObj): Observable < any > {
    var Form = {
      "email": userLoginObj.email,
      "password": userLoginObj.password
    };
    return this.http.post(this.userApiUrl.login, Form, this.options).map((res: Response) => res.json());
  }

  Register(userRegisterObj): Observable < any > {
    var Form = {
      "firstname": userRegisterObj.firstname,
      "lastname": userRegisterObj.lastname,
      "email": userRegisterObj.email,
      "password": userRegisterObj.password,
      "mobile": userRegisterObj.mobile,
    };
    return this.http.post(this.userApiUrl.register, Form, this.options).map((res: Response) => res.json());
  }

  // addUser(userObj): Observable < any > {
  //   let headers = new Headers({
  //     'Content-Type': 'application/json'
  //   });
  //   let options = new RequestOptions({
  //     headers: headers
  //   });
  //   console.log(userObj);
  //   return this.http.post(this.urlScheme.authApiUrl.register, userObj, options).map((res: Response) => res.json());
  // }

  // getUsers(): Observable < any > {
  //   let headers = new Headers({
  //     'Content-Type': 'application/json'
  //   });
  //   let options = new RequestOptions({
  //     headers: headers
  //   });
  //   return this.http.post(this.urlScheme.userApiUrl.getUsers, {}, options).map((res: Response) => res.json());
  // }

  // viewProfile(userId): Observable < any > {
  //   let viewProfileUrl = this.urlScheme.userApiUrl.viewProfile + userId;
  //   return this.http.get(viewProfileUrl).map((res: Response) => res.json());
  // }
  // updateProfile(userId, object): Observable < any >  {
  //   let updateProfileUrl = this.urlScheme.userApiUrl.updateProfile + userId;

  //   let headers = new Headers({
  //     'Content-Type': 'application/json'
  //   });
  //   let options = new RequestOptions({
  //     headers: headers
  //   });
  //   return this.http.post(updateProfileUrl, object, options).map((res: Response) => res.json());
  // }
}
