import { Component, OnInit,Input } from '@angular/core';
import {SearchResult} from '../search-box/search-box.model';
@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  @Input() result: any; 
  constructor() { }

  ngOnInit() {


  }

}
