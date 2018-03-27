import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Researcher } from './Researcher';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.scss']
})
export class UserinfoComponent implements OnInit {
  public model: Researcher;

  constructor(private http: HttpClient) {
  
  }

  async ngOnInit() {
    this.model = new Researcher();
    this.model = await this.getUserData("63753");
  }
  public async getUserData(cristinID: string): Promise<any> {
    return await
      this.http.get<any[]>("api/apiuser?cristinID=" + cristinID).toPromise();
  } 
}
