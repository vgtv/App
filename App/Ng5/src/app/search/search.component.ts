import { Component, Injectable, Input } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { NgbTypeaheadConfig } from '@ng-bootstrap/ng-bootstrap';

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
  constructor(private http: HttpClient, config: NgbTypeaheadConfig) {
    config.focusFirst = false;
  }

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

export class NgbdTypeaheadHttp {
  model: any;
  searching = false;
  searchFailed = false;
  @Input() showTopNav: boolean;

  hide = new Observable(() => () => this.searching = false);

  constructor(private _service: SearchService, private router: Router) { }

  onSearch(event: any) {
      this.router.navigate(['/profile', event.item.cristinID]);
  }

  onSearchButton() {
    if (typeof this.model !== 'undefined') { // ikke skrevet noe inn
      if (typeof this.model.cristinID !== 'undefined') { // trykket ikke paa en person
        this.router.navigate(['/profile', this.model.cristinID]);
      } else {
        this.router.navigate(['/search', this.model]);
      }
    }
  }

  formatMatches = (value: any) =>
    value.firstName + ' ' + value.lastName + ' | ' + value.position + ' | ' + value.institution

  resultMatches = (value: any) => value.firstName + ' ' + value.lastName;

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
      .merge(this.hide)
}
