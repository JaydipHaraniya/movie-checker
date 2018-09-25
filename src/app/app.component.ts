import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  result = [];
  title = 'assignment';
  selectedMovieData: any;
  loading: boolean;
  constructor() { }
  ngOnInit() {

  }
  updateResults(results: any): void {
    this.result = results.results;
  }
  selectedMovie(movie: any): void {
    this.selectedMovieData = movie;
  }
}
