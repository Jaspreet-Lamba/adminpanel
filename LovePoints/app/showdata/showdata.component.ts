import { Component, OnInit } from '@angular/core';
import { DataexchangeService } from '../services/dataexchange.service';

@Component({
  selector: 'app-showdata',
  templateUrl: './showdata.component.html',
  styleUrls: ['./showdata.component.css']
})
export class ShowdataComponent implements OnInit {

  constructor(public dataexchange: DataexchangeService) { }
  item;
  ngOnInit() {
    this.item = this.dataexchange.GetData();
  }

  // abc(){
    
  //   console.log(this.item);
  // }

}
