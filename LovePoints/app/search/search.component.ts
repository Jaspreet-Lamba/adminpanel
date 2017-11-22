import { Component, OnInit } from '@angular/core';
import { KnowledgebasedataService } from '../services/knowledgebasedata.service';
import { Router } from '@angular/router';
import { DataexchangeService } from '../services/dataexchange.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  SearchItem;
  GetSearch;
  constructor(public search: KnowledgebasedataService, public router: Router, public searchdata: DataexchangeService) { }
  SearchDb() {
    this.search.GetSearch(this.SearchItem).subscribe(res => {
      this.GetSearch = res;
      console.log(this.GetSearch);
      this.searchdata.SendSearchResult(this.GetSearch);
      this.router.navigate(['/searchdisplay']);
    })

  }
  ngOnInit() {
  }

}
