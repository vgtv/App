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
   
  }
}
