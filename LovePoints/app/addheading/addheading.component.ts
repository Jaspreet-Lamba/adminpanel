import { Component, OnInit } from '@angular/core';
import { DataexchangeService } from '../services/dataexchange.service';
import { KnowledgebasedataService } from '../services/knowledgebasedata.service';

@Component({
  selector: 'app-addheading',
  templateUrl: './addheading.component.html',
  styleUrls: ['./addheading.component.css']
})
export class AddheadingComponent implements OnInit {
  Titles;
  AddNewHeading: {
    H_Name: String,
    H_Data: String,
    T_ID: Number
  } = {
    H_Name: '',
    H_Data: '',
    T_ID: 0
  };
  constructor(public DataExchange: DataexchangeService, public PostData: KnowledgebasedataService) { }
  AddHeading(id) {
    this.AddNewHeading.T_ID = id;
    this.PostData.PostHeadings(this.AddNewHeading).subscribe(data => { console.log(data); }
      , errorr => { console.log(errorr) }

    )
    console.log(this.AddNewHeading);

  }
  ngOnInit() {

    this.Titles = this.DataExchange.GetTitles();
    console.log(this.Titles);

  }

}
