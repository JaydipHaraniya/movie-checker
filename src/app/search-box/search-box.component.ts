import { Component, OnInit, EventEmitter, Output, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchResult } from './search-box.model';
import { fromEvent } from 'rxjs';
import { map, filter, debounceTime, tap, switchAll } from 'rxjs/operators';
import { SearchBoxService } from '../search-box.service'

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {
  @Output() loading: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() results: EventEmitter<SearchResult[]> = new EventEmitter<SearchResult[]>();
  constructor(private el: ElementRef, private service: SearchBoxService) { }

  ngOnInit() {
    this.service.searchResult('avatar').subscribe((results) => {
      this.loading.emit(false);
      this.results.emit(results);
    },
      (err: any) => {
        console.log(err);
        this.loading.emit(false);
      },
      () => {
        this.loading.emit(false);
      }
    )
    fromEvent(this.el.nativeElement, 'keyup').pipe(
      map((e: any) => e.target.value),
      filter((text: string) => text.length > 1),
      debounceTime(250),
      tap(() => this.loading.emit(true)),
      map((query: string) => this.service.searchResult(query)),
      switchAll(),
    ).subscribe((results) => {
      this.loading.emit(false);
      this.results.emit(results);
    },
      (err: any) => {
        console.log(err);
        this.loading.emit(false);
      },
      () => {
        this.loading.emit(false);
      }
    )
  }

}
