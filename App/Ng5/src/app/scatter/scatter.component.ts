import { Component, Input, Output, EventEmitter, ElementRef, HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as cloneDeep from 'lodash/cloneDeep';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-scatter',
  templateUrl: './scatter.component.html',
  styleUrls: ['./scatter.component.scss']
})
export class ScatterComponent {
  @Input() input: string;
  @Input() ready: boolean;
  @Output() showPlot = new EventEmitter<boolean>();
  @ViewChild('cchart') cchart;

  logData: any;
  chartData: any;

  checked = true;
  isCollapsed = true;

  person: string;

  apiURL = 'api/apiscatterplot?cristinID=';
  pendingHttp: any;

  actualWidth: any;
  actualHeight: any;

  constructor(private http: HttpClient) {
    this.actualWidth = window.innerWidth * 0.5;
    this.actualHeight = window.innerHeight * 0.6;

    this.setupChart();
  }
    
  logChange(event: any) {
    if (event.value === "on") {
      this.cchart.wrapper.setDataTable(this.logData);
    } else {
      this.cchart.wrapper.setDataTable(this.chartData.dataTable);
    }
    this.cchart.redraw();
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
        this.chartData.dataTable = results;
        this.showPlot.emit(true);

        this.logData = cloneDeep(this.chartData.dataTable);

        var counter = 0;
        var found = false;

        for (let row of this.logData.rows) {
          for (let cell of row.c) {
            var value = cell.v + "";
            if (!value.startsWith("#") && value.indexOf('.') == -1 && value !== '1') {
              cell.v = Math.log(Number(cell.v));
            }
            if (counter === (this.logData.rows.length - 1) && !found) {
              this.person = cell.f;
              found = true;
            }           
          }
          ++counter;            
        }
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

  @HostListener('window:resize', ['$event'])
  onWindowResize(event: any) {
    this.actualWidth = window.innerWidth * 0.5;
    this.actualHeight = window.innerHeight * 0.6;

    this.cchart.wrapper.setOption('height', this.actualHeight);
    this.cchart.wrapper.setOption('width', this.actualWidth);

    this.cchart.redraw();

    // you can remove two lines that preserve selection if you don't need them
  }

  setupChart() {
    this.chartData = {
      dataTable: [],
      chartType: 'ScatterChart',
      options: {
        width: this.actualWidth, height: this.actualHeight,
        chartArea: { top: '3%', left: '10%', bottom: '10%', right: '2%', width: '100%', height: '100%'},
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
          title: 'Kvantitet',
          titleTextStyle: {
            color: '#0077c2',
            fontSize: 18,
            bold: true
          },
        },
        animation: {
          startup: true,
          duration: 2000,
          easing: 'inAndOut'
        }
      }
    };
  }
}
