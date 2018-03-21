import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Http, Response } from "@angular/http";
import { Headers } from "@angular/http";
import { CompleterService, CompleterData } from 'ng2-completer';
import "rxjs/add/operator/map";
import { Persons } from './Persons';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public Data: Array<Persons>;
  public DataDone = false;
  protected searchStr: string;

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.getData();
  }

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
