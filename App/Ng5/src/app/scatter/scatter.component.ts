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
  public scatterChartData: any;

  constructor(private http: HttpClient) { }

  async ngOnChanges() {
    await this.loadScatterData(this.input);
  }

  public async getScatterData(cristinID: string): Promise<any> {
    return await
      this.http.get<any[]>('api/apiscatterplot?cristinID=' + cristinID).toPromise();
  }

  public async loadScatterData(cristinID: string) {
    this.scatterChartData = {
      dataTable: await this.getScatterData(cristinID),
      chartType: 'ScatterChart',
      options: {
        width: 1250, height: 850,
        backgroundColor: 'transparent',
        title: 'Publikasjoner vs kvalitet',
        hAxis: { title: 'Kvalitet' },
        vAxis: { title: 'Publikasjoner' },
        legend: 'none'
      }
    };
  }
}
