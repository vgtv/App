import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ChartReadyEvent } from 'ng2-google-charts';
import { ChartErrorEvent } from 'ng2-google-charts';
import { ChartSelectEvent } from 'ng2-google-charts';
import { ChartMouseOverEvent, ChartMouseOutEvent } from 'ng2-google-charts';
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

  constructor(private http: HttpClient) { }

  async ngOnChanges() {
    console.log("Scatterplot changing");
    this.showScatter = false;
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
                title: 'Kvalitet'
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
