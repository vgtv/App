import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss']
})
export class TopnavComponent {
  @Input() default: boolean;
  logo: string;

  constructor(private router: Router) {
    this.logo = 'img/logo-nav.png';
  }

  navigateHome() {
    this.router.navigate(['']);
  }

  navigateAbout() {
    this.router.navigate(['about']);
  }
}
