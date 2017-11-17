import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class RestfullService {

	constructor(public http : Http) { }
	BaseUrl = "http://localhost:4000/api/v1/";
	
	Urls = {
		getAllProducts : this.BaseUrl + "getAllProducts",
		addProduct : this.BaseUrl + "addProduct",
		addCategory : this.BaseUrl + "addCategory",
		getAllCategory : this.BaseUrl + "getAllCategory"
	}
	
	getAllProducts() :Observable<any>{
		return this.http.get(this.Urls.getAllProducts).map(data=>data = data.json());
	}

	addProduct(obj) :Observable<any>{
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });
		return this.http.post(this.Urls.addProduct, obj, options).map(data=>data = data.json());
	}
	addCategory(obj) :Observable<any>{
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });
		return this.http.post(this.Urls.addCategory, obj, options).map(data=>data = data.json());
	}

	getAllCategory() :Observable<any>{
		return this.http.get(this.Urls.getAllCategory).map(data=>data = data.json());
	}

}
