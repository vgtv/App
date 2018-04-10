import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Researcher } from './Researcher';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.scss']
})
export class UserinfoComponent {
  @Input() input: string;
  user: Researcher;
  showInfo: boolean;
  apiURL = 'api/apiuser?cristinID=';

  constructor(private http: HttpClient) {}

  async ngOnChanges() {
    this.showInfo = false;
    await this.initializeUserInfo(this.input);
  }

  async initializeUserInfo(cristinID: string): Promise<any> {
    return await new Promise((resolve, reject) => {
      this.http.get<Researcher>(this.apiURL + cristinID)
        .toPromise()
        .then(results => {
          this.user = new Researcher();
          this.user = results;
          this.showInfo = true;
          resolve();
        },
        response => {
          if (response.error === 'No data found for user') {
            this.showInfo = false;
          } else {
            this.showInfo = false;
            reject();
          }
        });
    });
  }
}
