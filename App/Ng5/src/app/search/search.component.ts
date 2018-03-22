import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {



  constructor(private http: HttpClient) {
    
  }

  ngOnInit(): void {
    this.http.get('/api/UsersApi').subscribe(data => {
      console.log(data);
    });
  }
}
