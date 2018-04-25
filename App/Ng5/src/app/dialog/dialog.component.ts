import { Component, Inject } from '@angular/core';
import { LoadingBarService } from '@ngx-loading-bar/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})

export class DialogComponent {
  subscribe; any;
  loadingText: string;

  match: false;
  relevance: false;

  changed = false;
  data = false;

  constructor(public loader: LoadingBarService) {
    if (typeof this.subscribe !== 'undefined') {
      if (this.subscribe) {
        this.loader.set(0);
        this.subscribe.unsubscribe();
      }
    }
    this.setupSubscriber();
  }

  ngOnDestroy() {
    this.subscribe.unsubscribe();
  }

  setupSubscriber() {
    this.loader.set(0);

    this.subscribe = this.loader.progress$.subscribe(progress => {
      if (this.data) {
        this.loader.set(99);
        this.loader.set(70);
        this.data = false;
        this.changed = true;
      } else if (!this.changed) {
        if (progress >= 0 && progress < 55) {
          this.loadingText = 'Dette kan ta litt tid, vi matcher nå forskningsmiljøet live..';
        } else if (progress >= 55 && progress < 80) {
          this.loadingText = 'Laster inn forskningsmiljø..';
        } else if (progress >= 80 && progress < 99) {
          this.loadingText = 'Laster inn visualisering..';
        }
      } else {
        if (progress >= 70 && progress < 99) {
          this.loadingText = 'Klargjør profil..';
        } else if (progress >= 100) {
          this.loader.set(0);
          this.subscribe.unsubscribe();
        }
      }

    });
  }
}
