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
  query: string;
  sub: any;
  page = 1;
  results: Array<Results>;
  searchResults: boolean;
  totalHits: number;
  loading: boolean;

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
    this.loading = true;
    await new Promise((resolve, reject) => {
      this.http.get<Results[]>(URL, { params: PARAMS.set('searchQuery', query) }).toPromise()
        .then(results => {
          this.loading = false;
          this.results = results;
          this.searchResults = true;
          this.totalHits = this.results.length > 0 ? this.results.length : 0;
          resolve();
        },
        response => {
          if (response.error === 'No user found') {
            this.totalHits = 0;
            this.loading = false;
            this.searchResults = false;
          } else {
            this.totalHits = 0;
            this.loading = false;
            this.searchResults = false;
            reject();
          }
        });
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
