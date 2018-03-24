import { Component, OnInit } from '@angular/core';
import { CloudData, CloudOptions } from 'angular-tag-cloud-module';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Http, Response } from "@angular/http";




@Component({
  selector: 'app-wordcloud',
  templateUrl: './wordcloud.component.html',
  styleUrls: ['./wordcloud.component.scss']
})


export class WordcloudComponent implements OnInit {
  data: Array<CloudData> = [];

  constructor(private http: HttpClient) {
  }

  options: CloudOptions = {
    // if width is between 0 and 1 it will
    // be set to the size of the upper element multiplied by the value 
    width: 700,
    height: 400,
    overflow: false,
  }

  async getWordCloud(cristinID: string): Promise<any> {
    return await this.
      http.get<any[]>("api/apiwordcloud?cristinID=" + cristinID).toPromise();

  }


  getData(cID) {
    this.http.get<any[]>("api/ApiWordCloud/?cristinID=" + cID).subscribe(
      JsonData => {
        if (JsonData) {
          this.data = JsonData;
          console.log(this.data);

        };
      },
      error => alert(error + "1"),
      () => console.log("ferdig get-api/alleSporsmaal")
    );
  };

  async ngOnInit() {
    this.data = await this.getWordCloud("63753");
  }
}


