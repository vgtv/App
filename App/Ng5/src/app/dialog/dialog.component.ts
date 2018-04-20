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

  changed: boolean = false;
  data: boolean = false;

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
        this.loader.set(30);
        this.data = false;
        this.changed = true;
      }
      else if (!this.changed) {
        if (progress >= 0 && progress < 50) {
          this.loadingText = "Dette kan ta litt tid, vi matcher nå forskningsmiljøet live..";
        }
        else if (progress >= 50 && progress < 80) {
          this.loadingText = "Laster inn forskningsmiljø..";
        }        
        else if (progress >= 80 && progress < 99) {
          this.loadingText = "Laster inn visualisering..";
        }
      }
      else {
        if (progress >= 30 && progress < 50) {
          this.loadingText = "Laster inn relevansprofil..";
        }
        else if (progress >= 50 && progress < 75) {
          this.loadingText = "Laster inn habiltetsprofil..";
        }
        else if (progress >= 75 && progress < 98) {
          this.loadingText = "Klargjør profil..";
        }
        else if (progress >= 100) {
          this.loader.set(0);
          this.subscribe.unsubscribe();
        }
      }

    });
  }
}
