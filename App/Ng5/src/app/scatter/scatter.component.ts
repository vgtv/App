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
  showPlot: boolean;
  showProgress: boolean;
  pendingHttp: any;
  progressBar: any;
  progressText: string;

  constructor(private http: HttpClient, public loader: LoadingBarService) {
    this.setupChart();
  }

  ngOnDestroy() {
    this.pendingHttp.unsubscribe();
    this.progressBar.unsubscribe();
  }

  async ngOnChanges() {
    if (this.pendingHttp) {
      this.pendingHttp.unsubscribe();
    }

    if (this.progressBar) {
      this.progressBar.unsubscribe();
      this.loader.set(0);
    }

    this.showPlot = false;
    this.showProgress = true;

    await this.initializeScatter(this.input);
  }

  async initializeScatter(cristinID: string) {
    this.progressBar = this.loader.progress$.subscribe(res => {
      if (res == 0) {
        this.progressText = "";
      }
      else if (res > 0 && res < 45) {
        this.progressText = "Vi matcher nå fagfeltet til ditt søk..";
      }
      else if (res >= 45 && res < 60) {
        this.progressText = "Oppretter relevans profil..";
      }
      else if (res >= 60 && res < 75) {
        this.progressText = "Oppretter habilitet profil..";
      }
      else if (res >= 75 && res < 90) {
        this.progressText = "Oppretter visualisering..";
      }
      else if (res >= 90 && res < 100) {
        this.progressText = "Ferdigstiller visualisering";
      }
      else if (res >= 100) {
        this.showProgress = false;
        this.showPlot = true;
        this.progressBar.unsubscribe();
        this.loader.set(0);
      }
    });

    this.pendingHttp = await this.http.get<any[]>(this.apiURL + cristinID)
      .subscribe(results => {
        this.scatterChartData.dataTable = results;
      },
      msg => {
        if (msg.error === 'No data found for user') {
          this.showPlot = false;
          this.showProgress = false;
          this.progressBar.unsubscribe();
          // vis at det ikke finnes data for bruker
        } else {
          this.showPlot = false;
          this.showProgress = false;
          this.progressBar.unsubscribe();
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
  }
}
