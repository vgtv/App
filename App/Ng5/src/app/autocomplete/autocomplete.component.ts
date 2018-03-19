import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { SearchResults } from './SearchResults';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

  @Injectable()
  export class AutoComplete {
    
  }

  getSearchResults(){
    this._http.get("api/UsersApi/")
      .map(resultat => {
        let JsonData = resultat.json();
        return JsonData;
      })
      .subscribe(
      JsonData => {
        this.alleSporsmaal = [];
        this.laster = false;

        if (JsonData) {
          for (let kategori of JsonData) {
            this.alleSporsmaal.push(new Kategori(kategori.kid, kategori.kategorinavn, kategori.faqListe));
          };
        };
      },
      error => alert(error + "1"),
      () => console.log("ferdig get-api/alleSporsmaal")
      );
  }

