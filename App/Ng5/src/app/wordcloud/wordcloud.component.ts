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
  data: Array<CloudData>;
  showCloud: boolean;
  count: string;
  apiURL = 'api/apiwordcloud?cristinID=';
  apiURL2 = 'api/apilegend?cristinID=';

  options: CloudOptions = {
    width: 600,
    height: 400,
    overflow: false
  };

  constructor(private http: HttpClient) { }

  async ngOnChanges() {
    this.showCloud = false;
    await this.initializeCloud(this.input);
  }

  async initializeCloud(cristinID: string): Promise<any> {
    return await new Promise((resolve, reject) => {
      this.http.get<any[]>(this.apiURL + cristinID)
        .toPromise()
        .then(results => {
          this.data = results;
          this.getLegend(cristinID);
          this.showCloud = true;
          resolve();
        },
        response => {
          if (response.error === 'No data found for user') {
            this.showCloud = false;
          } else {
            reject();
          }
        });
    });
  }

  getLegend(cristinID: string) {
    this.http.get<string>(this.apiURL2 + cristinID).subscribe(results =>
      this.count = results
    );
  }
}



