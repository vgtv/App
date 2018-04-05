import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Relevance } from './relevance';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

import { LoadingBarService } from '@ngx-loading-bar/core';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';

@Component({
  selector: 'app-relevance',
  templateUrl: './relevance.component.html',
  styleUrls: ['./relevance.component.scss'],
  providers: [NgbRatingConfig]
})
export class RelevanceComponent {
  @Input() input: string;
  dataTable: Array<Relevance>;
  apiURL = 'api/apirelevance?cristinID=';
  showTable: boolean;
  neutrality: boolean = true;
  enviroment: boolean = true;

  constructor(private http: HttpClient, config: NgbRatingConfig) {
    config.max = 5;
    config.readonly = true;
  }

  async ngOnChanges() {
    console.log('Relevance changing..');
    this.neutrality = true;
    this.enviroment = true;
    this.showTable = false;
    await this.initializeTable(this.input);
  }

  async initializeTable(cristinID: string): Promise<any> {
    return await new Promise((resolve, reject) => {
      this.http.get<Relevance[]>(this.apiURL + cristinID)
        .toPromise()
        .then(results => {
          this.dataTable = results;
          this.showTable = true;
          resolve();
        },
        response => {
          if (response.error === 'No data found for user') {
            this.showTable = false;
          } else {
            reject();
          }
        });
    });
  }
}
