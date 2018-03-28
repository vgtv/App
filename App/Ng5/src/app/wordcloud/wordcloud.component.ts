import { Component, OnInit } from '@angular/core';
import { CloudData, CloudOptions } from 'angular-tag-cloud-module';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-wordcloud',
  templateUrl: './wordcloud.component.html',
  styleUrls: ['./wordcloud.component.scss']
})


export class WordcloudComponent implements OnInit {
  data: Array<CloudData> = [];
  options: CloudOptions = {
    width: 600,
    height: 400,
    overflow: false
  };

  constructor(private http: HttpClient) {
  }

  async ngOnInit() {
    this.data = await this.getWordCloud('63753');
  }

  async getWordCloud(cristinID: string): Promise<any> {
    return await this.
      http.get<any[]>('api/apiwordcloud?cristinID=' + cristinID).toPromise();
  }
}



