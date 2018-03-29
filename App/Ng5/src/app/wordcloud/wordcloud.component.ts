import { Component, OnInit, Input } from '@angular/core';
import { CloudData, CloudOptions } from 'angular-tag-cloud-module';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-wordcloud',
  templateUrl: './wordcloud.component.html',
  styleUrls: ['./wordcloud.component.scss']
})

export class WordcloudComponent {
  @Input() input: string;
  data: Array<CloudData> = [];

  options: CloudOptions = {
    width: 600,
    height: 400,
    overflow: false
  };

  constructor(private http: HttpClient) {
  }

  async ngOnChanges() {
    this.data = await this.getWordCloud(this.input);
  }

  async getWordCloud(cristinID: string): Promise<any> {
    return await this.http.get<any[]>('api/apiwordcloud?cristinID=' + cristinID).toPromise();
  }
}



