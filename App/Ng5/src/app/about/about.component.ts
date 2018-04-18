import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  imageUrls: Array<string> = [];

  constructor() {

  }
    
  ngOnInit() {
    this.imageUrls = ['img/linkedin/linkedin-anton.png', 'img/linkedin/linkedin-anders.jpg',
      'img/linkedin/linkedin-julian.jpg', 'img/linkedin/linkedin-robin.jpg', 'img/linkedin/linkedin-steffen.jpg'];
  }
}
