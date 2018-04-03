import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{
  cristinID: string;
  private sub: any;

  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.router.params.subscribe(params => {
      this.cristinID = params['id'];
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
