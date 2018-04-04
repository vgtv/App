import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ChartReadyEvent } from 'ng2-google-charts';
import { ChartErrorEvent } from 'ng2-google-charts';
import { ChartSelectEvent } from 'ng2-google-charts';
import { ChartMouseOverEvent, ChartMouseOutEvent } from 'ng2-google-charts';

import { LoadingBarService } from '@ngx-loading-bar/core';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';

@Component({
  selector: 'app-scatter',
  templateUrl: './scatter.component.html',
  styleUrls: ['./scatter.component.scss']
})
export class ScatterComponent {
  @Input() input: string;
  scatterChartData: any;
  apiURL = 'api/apiscatterplot?cristinID=';
  showScatter: boolean;
  showProgressBar: boolean;

  constructor(private http: HttpClient, public loader: LoadingBarService) { }

  async ngOnChanges() {
    console.log("Scatterplot changing");
    this.showScatter = false;
    this.showProgressBar = true; 
    await this.initializeScatter(this.input);
  }

  async initializeScatter(cristinID: string): Promise<any> {
    return await new Promise((resolve, reject) => {
      this.http.get<any[]>(this.apiURL + cristinID)
        .toPromise()
        .then(results => {
          this.scatterChartData = {
            dataTable: results,
            chartType: 'ScatterChart',
            options: {
              width: 1250, height: 850,
              backgroundColor: 'transparent',
              title: 'Publikasjoner vs. kvalitet',
              hAxis: {
                title: 'Kvalitet',
                ticks: [0, 1, 2, 3, 4, 5, 6, 7, 8]
              },
              vAxis: { title: 'Publikasjoner' },
              legend: 'none',
              animation: {
                startup: true,
                duration: 5000,
                easing: 'inAndOut'
              }               
            }
          };
          this.showScatter = true;
          this.showProgressBar = false;
          resolve();
        },
        response => {
          if (response.error === 'No data found for user') {
            this.showScatter = false;
          } else {
            reject();
          }
        });
    });
  }
}
