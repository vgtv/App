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
  public user: Researcher;

  constructor(private http: HttpClient) {}

  async ngOnChanges() {
    this.user = new Researcher();
    this.user = await this.getUserData(this.input);
  }

  public async getUserData(cristinID: string): Promise<any> {
    return await
      this.http.get<any[]>('api/apiuser?cristinID=' + cristinID).toPromise();
  }
}
