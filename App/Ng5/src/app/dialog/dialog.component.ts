import { Component, Inject } from '@angular/core';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material'

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
  updated = false;
  showLoading: boolean;
  url: string = 'img/zip/im.png';

  constructor(public dialogRef: MatDialogRef<DialogComponent>,public loader: LoadingBarService, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.showLoading = data;

    if (typeof this.subscribe !== 'undefined') {
      if (this.subscribe) {
        this.loader.set(0);
        this.subscribe.unsubscribe();
      }
    }

    if (this.showLoading) {
      this.setupSubscriber();
    }
  }

  ngOnDestroy() {
    if (typeof this.subscribe !== 'undefined') {
      this.subscribe.unsubscribe();
    }
  }

  setupSubscriber() {
    this.loader.set(0);

    this.subscribe = this.loader.progress$.subscribe(progress => {
      if (this.updated) {
        this.loader.set(99);
        this.loader.set(70);
        this.updated = false;
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

  closeDialog() {
    this.dialogRef.close();
  }
}
