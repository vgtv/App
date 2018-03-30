import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Results } from './results';

const URL = 'api/apisearchfulltext?';
const PARAMS = new HttpParams();

@Component({
  selector: 'app-searchresults',
  templateUrl: './searchresults.component.html',
  styleUrls: ['./searchresults.component.scss']
})
export class SearchresultsComponent implements OnInit {
  private query: string;
  private sub: any;
  private results: Array<Results>;
  private searchResults: boolean;

  constructor(private router: ActivatedRoute, private http: HttpClient) { }

  async ngOnInit() {
    this.sub = await this.router.params.subscribe(params => {
      this.query = params['query'];
      if (this.query === '') {
        return;
      }
      this.getSearchResults(this.query);
    });
  }

  async getSearchResults(query: string) {
    await new Promise((resolve, reject) => {
      this.http.get<Results[]>(URL, { params: PARAMS.set('searchQuery', query) }).toPromise()
        .then(results => {
          this.results = results;
          resolve();
        },
        response => {
          console.log(response);
          if (response.error === 'No data found for user') {
          } else {
            reject();
          }
        });
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
