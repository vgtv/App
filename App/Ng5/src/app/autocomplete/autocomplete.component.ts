import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { SearchResults } from './SearchResults';
import { FormControl } from '@angular/forms';
import { AppService } from './app.service';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent {
  searchTerm: FormControl = new FormControl();

  searchResult = [];

  constructor(private service: AppService) {
    this.searchTerm.valueChanges
      .debounceTime(400)
      .subscribe(data => {
        this.service.search_word(data).subscribe(response => {
          this.searchResult = response
        })
      })
}
  }

