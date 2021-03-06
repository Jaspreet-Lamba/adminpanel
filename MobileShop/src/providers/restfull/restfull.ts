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
      updateUserProfile: this.BaseUrl + "updateUserProfile",
      addAddress: this.BaseUrl + "addAddress",
      getAddresses: this.BaseUrl + "getAddresses",
  }
  public dataApiUrl = {
      getAllCategory : this.BaseUrl + "getAllCategory",
      getAllCategoryWithProducts : this.BaseUrl + "getAllCategoryWithProducts",
      getProduct : this.BaseUrl + "getProduct",
      placeOrder : this.BaseUrl + "placeOrder",
  }

  public appName = "Mobile Shop";
  
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

  placeOrder(orderData): Observable < any > {
    return this.http.post(this.dataApiUrl.placeOrder, orderData, this.options).map((res: Response) => res.json());
  }

  getAllCategoryWithProducts() :Observable<any>{
    return this.http.get(this.dataApiUrl.getAllCategoryWithProducts).map(data=>data = data.json());
  }
  
  getAllCategory() :Observable<any>{
    return this.http.get(this.dataApiUrl.getAllCategory).map(data=>data = data.json());
  }

  getProduct(productData): Observable < any > {
    var product = {
      "productid": productData
    };
    return this.http.post(this.dataApiUrl.getProduct, product, this.options).map((res: Response) => res.json());
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

  updateUserProfile(userRegisterObj): Observable < any > {
    var Form = {
      "id": userRegisterObj.id,
      "firstname": userRegisterObj.firstname,
      "lastname": userRegisterObj.lastname,
      "email": userRegisterObj.email,
      "password": userRegisterObj.password,
      "mobile": userRegisterObj.mobile,
    };
    return this.http.post(this.userApiUrl.updateUserProfile, Form, this.options).map((res: Response) => res.json());
  }
  
  addAddress(userRegisterObj): Observable < any > {
    return this.http.post(this.userApiUrl.addAddress, userRegisterObj, this.options).map((res: Response) => res.json());
  }

  getAddresses(addressData): Observable < any > {
    return this.http.post(this.userApiUrl.getAddresses, addressData, this.options).map((res: Response) => res.json());
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
