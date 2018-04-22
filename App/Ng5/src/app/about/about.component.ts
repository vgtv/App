import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  images: Array<string> =
  [
    'img/linkedin/anton.png', 'img/linkedin/anders.jpg', 'img/linkedin/julian.jpg',
    'img/linkedin/robin.jpg', 'img/linkedin/steffen.jpg', 'img/linkedin/frode.jpg'
  ];

  constructor() { }
}
