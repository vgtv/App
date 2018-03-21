import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CompleterService, CompleterData } from 'ng2-completer';

import { Persons } from './Persons';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public jsondata: Array<Persons>;

  constructor(private http: HttpClient) {
    
  }

  ngOnInit() {
    this.hentData(); 
  }

  hentData() {
    this.http.get("api/UsersApi/")
      .map(resultat => {
        let JsonData = resultat.json();
        return JsonData;
      })
      .subscribe(
      JsonData => {
        this.Data = [];

        if (JsonData) {
          for (let personer of JsonData) {
            this.Data.push(new Personer(personer.firstname, personer.lastname, personer.role, personer.institution));
          };
        };
      },
      error => alert(error + "1"),
      () => console.log("ferdig get-api/alleSporsmaal")
      );

  };
  }

this.http.get('/api/UsersApi').subscribe(data => {
this.jsondata.push(new Persons(scientist.firstname, scientist.lastname, scientist.CristinID))
console.log(scientist.firstname);
