import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  options: CloudOptions;
  showCloud: boolean;
  @Output() activeCloud = new EventEmitter<boolean>();

  count: number;
  apiURL = 'api/apiwordcloud?cristinID=';
  apiURL2 = 'api/apilegend?cristinID=';

  constructor(private http: HttpClient) {
    this.setupTagCloud();
  }

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
          this.activeCloud.emit(true);
          resolve();
        },
        response => {
          if (response.error === 'No data found for user') {
            this.showCloud = false;
            this.activeCloud.emit(false);
          } else {
            this.activeCloud.emit(false);
            reject();
          }
        });
    });
  }

  setupTagCloud() {
    this.options = {
      width: 600,
      height: 400,
      overflow: false
    };
  }

  getLegend(cristinID: string) {
    this.http.get<number>(this.apiURL2 + cristinID).subscribe(results =>
      this.count = results
    );
  }
}



