import { Component, OnInit, Injectable } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Http, Response, HttpModule } from "@angular/http";
import { Headers } from "@angular/http";
import { CompleterService, CompleterData } from 'ng2-completer';
import "rxjs/add/operator/map";
import { Persons } from './persons.model';

//--------- Ng-Boostrap-AC-----------//
//imports
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/merge';

const API_URL = 'api/UsersApi/';
const PARAMS = new HttpParams({
  fromObject: {
    action: 'opensearch',
    format: 'json',
    origin: '*'
  }
});


@Injectable()
export class PersonService {
  constructor(private http: HttpClient) { }

  search(term: string) {
    if (term == '') {
      return of([]);
    }

    return this.http
      .get(API_URL, { params: PARAMS.set('search', term) })
      .map(response => response[1]);
  }
}


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  providers: [PersonService],
  styleUrls: ['./search.component.scss']
})

export class SearchComponent implements OnInit {
  model: any;
  searching = false;
  searchFailed = false;
  hideSearchingWhenUnsubsribed = new Observable(() => () => this.searching = false); 

  public Data: Array<Persons>;
  public DataDone = false;
  protected searchStr: string;
  protected dataService: CompleterData;
  protected testData = [


    { color: 'red', value: '#f00' }
  ];

  constructor(private _service: PersonService, private http: HttpClient, private completerService: CompleterService) {
    this.dataService = completerService.remote("api/UsersApi/", 'firstname', 'firstname');
  }

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
      .merge(this.hideSearchingWhenUnsubsribed);


  ngOnInit() {
    this.getData();

  }

  //Henter data fra API.
  getData() {
    this.http.get<Persons[]>("api/UsersApi/")
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
