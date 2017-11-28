import {
  Injectable
} from '@angular/core';
import {
  Http,
  RequestOptions,
  Headers,
  Response
} from '@angular/http';
import {
  Observable
} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {
  Urls
} from '../url'


@Injectable()
export class RestfullProvider {


  constructor(public http: Http, public urlScheme: Urls) {}
  Login(userLoginObj): Observable < any > {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    let options = new RequestOptions({
      headers: headers
    });
    var Form = {
      "email": userLoginObj.email,
      "password": userLoginObj.password
    };
    return this.http.post(this.urlScheme.authApiUrl.login, Form, options).map((res: Response) => res.json());
  }

  addUser(userObj): Observable < any > {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    let options = new RequestOptions({
      headers: headers
    });
    console.log(userObj);
    return this.http.post(this.urlScheme.authApiUrl.register, userObj, options).map((res: Response) => res.json());
  }

  getUsers(): Observable < any > {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    let options = new RequestOptions({
      headers: headers
    });
    return this.http.post(this.urlScheme.userApiUrl.getUsers, {}, options).map((res: Response) => res.json());
  }

  viewProfile(userId): Observable < any > {
    let viewProfileUrl = this.urlScheme.userApiUrl.viewProfile + userId;
    return this.http.get(viewProfileUrl).map((res: Response) => res.json());
  }
  updateProfile(userId, object): Observable < any >  {
    let updateProfileUrl = this.urlScheme.userApiUrl.updateProfile + userId;

    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    let options = new RequestOptions({
      headers: headers
    });
    return this.http.post(updateProfileUrl, object, options).map((res: Response) => res.json());
  }
  uploadPhoto(photoObj, userId): Observable < any >  {
    let uploadPhotoUrl = this.urlScheme.userApiUrl.uploadPhoto + userId;
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    let options = new RequestOptions({
      headers: headers
    });
    return this.http.post(uploadPhotoUrl, photoObj, options).map((res: Response) => res.json());
  }
  updateGeolocation(longLatObject, userId): Observable < any >  {
    let updateGeolocationUrl = this.urlScheme.userApiUrl.updateGeolocation + userId;
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    let options = new RequestOptions({
      headers: headers
    });
    return this.http.post(updateGeolocationUrl, longLatObject, options).map((res: Response) => res.json());
  }
  sendLocation(locationObject): Observable < any >  {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    let options = new RequestOptions({
      headers: headers
    });
    return this.http.post(this.urlScheme.locationApiUrl.sendLocation, locationObject, options).map((res: Response) => res.json());
  }

  nearBy(longLatObject): Observable < any >  {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    let options = new RequestOptions({
      headers: headers
    });
    return this.http.post(this.urlScheme.locationApiUrl.nearBy, longLatObject, options).map((res: Response) => res.json());

  }
  newConversation(obj, recipientId): Observable < any >  {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    let options = new RequestOptions({
      headers: headers
    });
    let newConversationUrl = this.urlScheme.chatApiUrl.newConversation + recipientId;
    return this.http.post(newConversationUrl, obj, options).map((res: Response) => res.json());
  }
  sendReply(obj, conversationId) : Observable < any > {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    let options = new RequestOptions({
      headers: headers
    });
    let sendReplyUrl = this.urlScheme.chatApiUrl.newConversation + conversationId;
    return this.http.post(sendReplyUrl, obj, options).map((res: Response) => res.json());
  }
  getMessages(userId) : Observable < any > {
    let getMessagesUrl = this.urlScheme.chatApiUrl.getConversation + userId;
    return this.http.get(getMessagesUrl).map((res: Response) => res.json());
  }


}
