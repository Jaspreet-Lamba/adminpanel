import { Injectable } from '@angular/core';

@Injectable()
export class DataexchangeService {

  constructor() { }
  DataObj;
  Titles;
  id;
  Search;


  SendData(Obj) {
    console.log(Obj);
    this.DataObj = Obj;
    console.log(this.DataObj);
  }


  GetData() {
    console.log(this.DataObj);
    return this.DataObj;
  }


  SendTitles(Obj) {
    console.log(Obj);
    this.Titles = Obj;
    console.log(this.Titles);
  }


  GetTitles() {
    console.log(this.Titles);
    return this.Titles;
  }


  SendSearchResult(Obj) {
    console.log(Obj);
    this.Search = Obj;
    console.log(this.Search);
  }


  GetSearchResult() {
    console.log(this.Search);
    return this.Search;
  }

}
