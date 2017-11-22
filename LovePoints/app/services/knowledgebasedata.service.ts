import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Configuration } from '../config';
import { AuthenticationService,CanActivateViaAuthGuard } from './authentication.service';
import { CanActivate, Router } from '@angular/router';
import { AddheadingComponent } from '../addheading/addheading.component';
@Injectable()
export class KnowledgebasedataService {
  public data;
  public check;
  a;
  constructor(private httpService: Http, public UrlObject: Configuration) {
    
  }

  GetTitles(): Observable<any> {
    return this.httpService.get(this.UrlObject.UrlObj.TitlesUrl).map(
      data => data.json()
    );
  }

  GetHeadings(): Observable<any> {
    return this.httpService.get(this.UrlObject.UrlObj.HeadingUrl).map(
      data => data.json()
    );
  }


  GetUsers(): Observable<any> {
    return this.httpService.get(this.UrlObject.UrlObj.UsersUr).map(
      data => data.json()
    );
  }


  GetSearch(SearchParam): Observable<any> {
    console.log(SearchParam);
    return this.httpService.get(this.UrlObject.UrlObj.SearchUrl + SearchParam).map(
      data => data.json()
    );
  }


  // Postlogin(UserLogin): Observable<any> {
  //   let headers = new Headers({ 'Content-Type': 'application/json' });
  //   let options = new RequestOptions({ headers: headers });
  //   this.a = this.httpService.post(this.UrlObject.UrlObj.CheckUrl, UserLogin, headers)
  //     .map((response => {
  //       this.check = response
  //       console.log(this.check._body);
        
  //     }
  //     ));
  //   console.log(this.check);
  //   return this.a;
  // }


  PostHeadings(Form) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    console.log(Form);

    return this.httpService.post(this.UrlObject.UrlObj.HeadingUrl, Form, headers).map((res: Response) => res.json());
  }



  test(): any {
    console.log(this.check);
    return this.check;
  }
}

