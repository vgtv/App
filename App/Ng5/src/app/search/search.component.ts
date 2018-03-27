import { Component, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { FormsModule } from '@angular/forms';

import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/merge';

const WIKI_URL = 'api/apisearch?';
const PARAMS = new HttpParams({
});

@Injectable()
export class SearchComponent {
  constructor(private http: HttpClient) { }

  public search(term: string) {
    if (term === '') {
      return of([]);
    }
    return this.http.get(WIKI_URL, { params: PARAMS.set('searchQuery', term) })
      .map(response => response);
    // response endret fra response[0] til repsonse. Wikipedia gir opprinnelig egentlig et array, men
    // vi får et array med objekter som repsons
  }
}

@Component({
  selector: 'ngbd-typeahead-http',
  templateUrl: './search.component.html',
  providers: [SearchComponent],
  styles: [`.form-control { width: 300px; display: inline; }`]
})
export class NgbdTypeaheadHttp {
  model: any;
  searching = false;
  searchFailed = false;
  hideSearchingWhenUnsubscribed = new Observable(() => () => this.searching = false);

  constructor(private _service: SearchComponent) { }
  formatMatches = (value: any) => value.firstName + ' ' + value.lastName;
  // add formatches her

  search = (text$: Observable<string>) =>
    text$
      .debounceTime(300)
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
}
