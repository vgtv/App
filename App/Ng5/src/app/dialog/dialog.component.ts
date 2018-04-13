import { Component, Inject } from '@angular/core';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  subscribe; any;
  loadingText: string;

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
    this.subscribe = this.loader.progress$.subscribe(progress => {
      if (progress === 0) {
        this.loadingText = '';
      }
      else if (progress > 0 && progress < 45) {
        this.loadingText = 'Vi matcher nå fagfeltet til denne profilen..';
      }
      else if (progress >= 45 && progress < 60) {
        this.loadingText = 'Laster inn relevansprofil..';
      }
      else if (progress >= 60 && progress < 70) {
        this.loadingText = 'Laster inn habilitetprofil..';
      }
      else if (progress >= 70 && progress < 92) {
        this.loadingText = 'Laster inn visualiseringsdata..';
      }
      else if (progress >= 92 && progress < 100) {
        this.loadingText = 'Laster inn tabelldata..';
      }
      else if (progress >= 100) {
        this.loader.set(0);
        this.subscribe.unsubscribe();
      }
    });
  }
}
