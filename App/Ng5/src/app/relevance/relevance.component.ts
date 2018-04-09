import { Component, Input, Output, EventEmitter } from '@angular/core';
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
  @Input() ready: boolean;
  @Output() showTable = new EventEmitter<boolean>();

  dataTable: Array<Relevance>;
  apiURL = 'api/apirelevance?cristinID=';
  neutrality: boolean = true;
  enviroment: boolean = true;
  page: number = 1;
  pendingHttp: any;

  constructor(private http: HttpClient, config: NgbRatingConfig, private router: Router) {
    config.max = 5;
    config.readonly = true;
  }

  async ngOnChanges() {
    if (this.pendingHttp) {
      this.pendingHttp.unsubscribe();
    }

    if (!this.ready) {
      this.neutrality = true;
      this.enviroment = true;
      await this.initializeTable(this.input);
    }
  }

  navigateToProfile(cristinID: string) {
    this.router.navigate(['/profile', cristinID]);
  }

  ngOnDestroy() {
    this.pendingHttp.unsubscribe();
  }
  
  async initializeTable(cristinID: string) {    
      this.pendingHttp = this.http.get<Relevance[]>(this.apiURL + cristinID)
        .subscribe(results => {
          this.dataTable = results;
          this.showTable.emit(true);
        },
        msg => {
          if (msg.error === 'No data found for user') {
            this.showTable.emit(false);
             // vis at det ikke finnes data for bruker
          } else {
            this.showTable.emit(false);
            console.error(msg.status);           
          }
        });
    }  
}
