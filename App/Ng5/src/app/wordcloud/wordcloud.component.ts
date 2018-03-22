import { Component, OnInit } from '@angular/core';
import { CloudData, CloudOptions } from 'angular-tag-cloud-module';
@Component({
  selector: 'app-wordcloud',
  templateUrl: './wordcloud.component.html',
  styleUrls: ['./wordcloud.component.scss']
})


export class WordcloudComponent implements OnInit {
  options: CloudOptions = {
    // if width is between 0 and 1 it will be set to the size of the upper element multiplied by the value 
    width: 700,
    height: 400,
    overflow: false,
  }

  data: CloudData[] = [
    { text: 'Weight-8-color', weight: 17, color: '#ffaaee' },
    { text: 'Weight-10-link', weight: 1 },
    { text: 'Weight-10-link', weight: 10 },
    { text: 'Weight-10-link', weight: 7 },
    { text: 'Weight-10-link', weight: 5 },
    { text: 'Weight-10-link', weight: 3 },
    { text: 'Weight-10-link', weight: 9 },
    { text: 'Weight-8-color', weight: 8, color: '#ffaaee' },
    { text: 'Weight-10-link', weight: 1 },
    { text: 'Weight-10-link', weight: 10 },
    { text: 'Weight-10-link', weight: 7 },
    { text: 'Weight-10-link', weight: 5 },
    { text: 'Weight-10-link', weight: 3 },
    { text: 'Weight-10-link', weight: 9 },
    { text: 'Weight-8-color', weight: 8, color: '#ffaaee' },
    { text: 'Weight-10-link', weight: 1 },
    { text: 'Weight-10-link', weight: 10 },
    { text: 'Weight-10-link', weight: 7 },
    { text: 'Weight-10-link', weight: 5 },
    { text: 'Weight-10-link', weight: 3 },
    { text: 'Weight-10-link', weight: 9 },
    { text: 'Weight-8-color', weight: 8, color: '#ffaaee' },
    { text: 'Weight-10-link', weight: 1 },
    { text: 'Weight-10-link', weight: 10 },
    { text: 'Weight-10-link', weight: 7 },
    { text: 'Weight-10-link', weight: 5 },
    { text: 'Weight-10-link', weight: 3 },
    { text: 'Weight-10-link', weight: 9 },
    { text: 'Weight-8-color', weight: 8, color: '#ffaaee' },
    { text: 'Weight-10-link', weight: 1 },
    { text: 'Weight-10-link', weight: 10 },
    { text: 'Weight-10-link', weight: 7 },
    { text: 'Weight-10-link', weight: 5 },
    { text: 'Weight-10-link', weight: 3 },
    { text: 'Weight-10-link', weight: 9 },
    // ...
  ]



  constructor() { }
  ngOnInit() {

  }


  }


