import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SearchBoxService {
  private _loginUrl = 'https://api.themoviedb.org/3/search/movie?api_key=d8fa248e12a683818d392f8b67e5db48&language=en-US&page=1&include_adult=false&query=';
  private header = new Headers({ 'Content-Type': 'application/json' });

  constructor(private _http: Http) { }

  searchResult(user: any) {
    return this._http.get(this._loginUrl + user, { headers: this.header }).pipe(
        map(res => res.json()),
        map((res) => {
            return res;
        })
      )
}
}
