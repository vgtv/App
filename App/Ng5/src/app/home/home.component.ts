import { Component, OnInit } from '@angular/core';
import { Personer } from './Personer';
import { Http, Response } from "@angular/http";
import { Headers } from "@angular/http";




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public Data: Array<Personer>;

  constructor(private _http: Http) { }

  ngOnInit() {
    this.hentData();
  }


  hentData() {
    this._http.get("api/UsersApi/")
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
