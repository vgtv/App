import { Component, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { FormsModule } from '@angular/forms';
import { Persons } from './user';
import { Http, Response } from "@angular/http";
import { MatAutocompleteModule } from '@angular/material/autocomplete';


import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/merge';

const WIKI_URL = 'api/ApiSearch';
const PARAMS = new HttpParams({
  fromObject: {
    action: 'query',
    format: 'xml',
    origin: 'firstname',
    titles: 'firstname'
  }
});

@Injectable()
export class SearchComponent {
  constructor(private http: HttpClient) { }

  search(term: string) {
    if (term === '') {
      return of([]);
    }
      
    return this.http
      .get(WIKI_URL, { params: PARAMS.set('searchQuery', term) })
      .map(response => response[0]);
  }
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  providers: [SearchComponent],
  styles: [`.form-control { width: 300px; display: inline; }`]
})
export class NgbdTypeaheadHttp {
  public Data: Array<Persons>;
  public DataDone = false;
  model: any;
  searching = false;
  searchFailed = false;
  hideSearchingWhenUnsubscribed = new Observable(() => () => this.searching = false);

  constructor(private _service: SearchComponent, private http: HttpClient) { }

  search = (text$: Observable<string>) =>
    text$
      .debounceTime(3000)
      .distinctUntilChanged()
      .do(() => this.searching = true)
      .switchMap(term =>
        this._service.search(term)
          .do(() => this.searchFailed = false)
          .catch(() => {
            this.searchFailed = true;
            return of([]);
          }))
      .do(() => this.searching = false)
      .merge(this.hideSearchingWhenUnsubscribed);

  getData() {
    this.http.get<Persons[]>("api/ApiSearch/")
      .subscribe(
      JsonData => {
        this.Data = [];
        if (JsonData) {
          this.Data = JsonData;
          console.log(this.Data);
          this.DataDone = true;
        };
      },
      error => alert(error + "1"),
      () => console.log("ferdig get-api/alleSporsmaal")
      );
  };
}
