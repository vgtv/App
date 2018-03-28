import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-relevance',
  templateUrl: './relevance.component.html',
  styleUrls: ['./relevance.component.scss']
})
export class RelevanceComponent {
  @Input() input: string;

  constructor() { }

  async ngOnChanges() {
    /*this.user = new Researcher();
    this.user = await this.getUserData(this.input);*/
  }
}
