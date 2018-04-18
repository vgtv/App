import { Component, Input, Output, EventEmitter } from '@angular/core';
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
  @Input() ready: boolean;
  @Output() showPlot = new EventEmitter<boolean>();

  scatterChartData: any;
  apiURL = 'api/apiscatterplot?cristinID=';
  pendingHttp: any;

  constructor(private http: HttpClient) {
    this.setupChart();
  }

  ngOnDestroy() {
    this.pendingHttp.unsubscribe();
  }

  async ngOnChanges() {
    if (this.pendingHttp) {
      this.pendingHttp.unsubscribe();
    }

    if (!this.ready) {
      await this.initializeScatter(this.input);
    }
  }

  async initializeScatter(cristinID: string) {
    this.pendingHttp = await this.http.get<any[]>(this.apiURL + cristinID)
      .subscribe(results => {
        this.scatterChartData.dataTable = results;
        this.showPlot.emit(true);
      },
      msg => {
        if (msg.error === 'No data found for user') {
          this.showPlot.emit(false);
          // vis at det ikke finnes data for bruker
        } else {
          this.showPlot.emit(false);
          console.error(msg.status);
        }
      });
  }

  setupChart() {
    this.scatterChartData = {
      dataTable: [],
      chartType: 'ScatterChart',
      options: {
        width: 1250, height: 850,
        backgroundColor: 'transparent',
        hAxis: {
          title: 'Kvalitet',
          titleTextStyle: {
            color: '#0077c2',
            fontSize: 18,
            bold: true
          },
        },
        legend: 'none',
        vAxis: {
          title: 'Publikasjoner',
          titleTextStyle: {
            color: '#0077c2',
            fontSize: 18,
            bold: true
          },
        },
        animation: {
          startup: true,
          duration: 5000,
          easing: 'inAndOut'
        }
      }
    };
  }
}
