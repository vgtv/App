import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.scss']
})

export class AnimationComponent {

  public lottieConfig: Object;
  public lottieConfig2: Object;
  public lottieConfig3: Object;
  a: any;


  constructor() {
    this.lottieConfig = {
      path: 'json/animation-school.json',
      autoplay: true,
      loop: true,
    };
    this.lottieConfig2 = {
      path: 'json/animation-w800-h600.json',
      autoplay: true,
      prerender: true,
      loop: true
    };
    this.lottieConfig3 = {
      path: 'json/animation-lab.json',
      autoplay: true,
      loop: true
    };  
  }

  setSpeed(event: any) {
    this.a = event;
    this.a.setSpeed(0.5);
  }
}
