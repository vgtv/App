import { Component, Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/merge';

const URL = 'api/apisearch?';
const PARAMS = new HttpParams();

@Injectable()
export class SearchService {
  constructor(private http: HttpClient) { }

  public search(term: string) {
    if (term === '') {
      return of([]);
    }
    return this.http.get(URL, { params: PARAMS.set('searchQuery', term) })
      .map(response => response);
  }
}

@Component({
  selector: 'ngbd-typeahead-http',
  styleUrls: ['./search.component.scss'],
  templateUrl: './search.component.html',
  providers: [SearchService]
})

export class NgbdTypeaheadHttp implements OnInit {
  model: any;
  searching = false;
  searchFailed = false;
  showSearchBar = true;

  hideSearchingWhenUnsubscribed = new Observable(() => () => this.searching = false);

  constructor(private _service: SearchService, private router: Router) {}

  ngOnInit(): void {}

  onSearch() {
    if (typeof this.model !== 'undefined') { // ikke skrevet noe inn
      if (typeof this.model.cristinID !== 'undefined') { // trykket ikke på en person
        this.showSearchBar = false;
        this.router.navigate(['/profile', this.model.cristinID]);
      } else {
        this.showSearchBar = false;
        this.router.navigate(['/search', this.model]);
      }
    }
  }

  formatMatches = (value: any) => value.firstName + ' ' + value.lastName;
  extra = (value: any) => "- Universitetet i Oslo";

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
      .merge(this.hideSearchingWhenUnsubscribed)
}
