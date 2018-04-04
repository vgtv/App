import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss']
})
export class TopnavComponent {
  @Input() default: boolean;

  constructor(private router: Router) {

  }

  navigateHome() {
    this.router.navigate(['']);
  }

  navigateAbout() {
    this.router.navigate(['about']);
  }
}
