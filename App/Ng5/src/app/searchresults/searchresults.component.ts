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
    this.sub = this.router.params.subscribe(params => {
      this.query = params['query'];
      if (this.query === '') {
        return;
      }
    });
    this.results = await this.getSearchResults(this.query);
  }

  async getSearchResults(query: string): Promise<any> {
    return await this.http.get<Results[]>(URL, { params: PARAMS.set('searchQuery', query) }).toPromise();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
