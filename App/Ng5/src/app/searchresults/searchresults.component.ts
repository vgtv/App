import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-searchresults',
  templateUrl: './searchresults.component.html',
  styleUrls: ['./searchresults.component.scss']
})
export class SearchresultsComponent implements OnInit {
  query: string;
  private sub: any;

  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.router.params.subscribe(params => {
      this.query = params['query'];
      console.log(this.query);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
