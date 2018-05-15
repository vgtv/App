import { Component, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Relevance } from './relevance';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-relevance',
  templateUrl: './relevance.component.html',
  styleUrls: ['./relevance.component.scss'],
  providers: [NgbRatingConfig]
})
export class RelevanceComponent {
  @Input() input: string;
  @Input() ready: boolean;
  @Input() meta: string;
  @Output() showTable = new EventEmitter<boolean>();

  dataTable: Array<Relevance>;
  dataList: any;
  apiURL: string;
  neutrality = true;
  enviroment = true;
  page = 1;
  pendingHttp: any;

  checked: boolean;
  showFilter: boolean;
  valueNeutrality: boolean;
  valueEnviroment: boolean;
  selectControl = new FormControl();
  selected: boolean;

  placeholder: string;
  temp: string;


  constructor(private http: HttpClient, config: NgbRatingConfig, private router: Router) {
    config.max = 5;
    config.readonly = true;
    this.apiURL = 'api/apirelevance?cristinID=';
    this.checked = true;
    this.showFilter = false;
    this.valueNeutrality = false;
    this.valueEnviroment = false;
    this.selected = true;
    this.temp = '';
    this.placeholder = '';

    this.dataList = [
      {
        name: 'Kollegaer',
        role: [
          { value: 'KMF', viewValue: 'Medforfattere' },
          { value: 'KIMF', viewValue: 'Ikke-medforfattere' }
        ]
      },
      {
        name: 'Eksterne',
        role: [
          { value: 'EMF', viewValue: 'Medforfattere' },
          { value: 'EIMF', viewValue: 'Ikke-medforfattere' }
        ]
      }
    ];
  }

  sortData(event: any) {
    if (event.value === this.temp) {
      this.showFilter = false;
      this.temp = '';
      this.placeholder = '';
    }

    else if (event.value === 'KMF') {
      this.showFilter = true;
      this.valueEnviroment = true;
      this.valueNeutrality = true;
      this.temp = event.value;
      this.placeholder = 'Kollegaer';
    }
    else if (event.value === 'KIMF') {
      this.showFilter = true;
      this.valueEnviroment = true;
      this.valueNeutrality = false;
      this.temp = event.value;
      this.placeholder = 'Kollegaer';
    }
    else if (event.value === 'EMF') {
      this.showFilter = true;
      this.valueEnviroment = false;
      this.valueNeutrality = true;
      this.temp = event.value;
      this.placeholder = 'Eksterne';
    }
    else if (event.value === 'EIMF') {
      this.showFilter = true;
      this.valueEnviroment = false;
      this.valueNeutrality = false;
      this.temp = event.value;
      this.placeholder = 'Eksterne';
    } else {
      this.showFilter = false;
    }
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

  navigate(cristinID: string) {
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
          console.error(msg.status); // videre arbeid logges i db f.eks
        }
      });
  }
}
