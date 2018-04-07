import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Relevance } from './relevance';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

import { LoadingBarService } from '@ngx-loading-bar/core';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { Router } from '@angular/router';

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
  page: number = 1;
  sub: any;

  constructor(private http: HttpClient, config: NgbRatingConfig, private router: Router) {
    config.max = 5;
    config.readonly = true;
  }

  async ngOnChanges() {
    if (this.sub) {
      this.sub.unsubscribe();
    }

    console.log('Relevance changing..');
    this.neutrality = true;
    this.enviroment = true;
    this.showTable = false;
    await this.initializeTable(this.input);
  }

  navigateToProfile(cristinID: string) {
    this.router.navigate(['/profile', cristinID]);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  
  async initializeTable(cristinID: string) {    
      this.sub = this.http.get<Relevance[]>(this.apiURL + cristinID)
        .subscribe(results => {
          this.dataTable = results;
          this.showTable = true;
        },
        msg => {
          if (msg.error === 'No data found for user') {
            this.showTable = false;
             // vis at det ikke finnes data for bruker
          } else {
            this.showTable = false;
            console.error(msg.status);           
          }
        });
    }  
}
