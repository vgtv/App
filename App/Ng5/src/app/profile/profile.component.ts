import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { LoadingBarService } from '@ngx-loading-bar/core';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  cristinID: string;
  private navigation: any;
  private progressBar: any;
  progressText: string;

  showProgress: boolean;
  showPlot: boolean;
  showTable: boolean;
  showContent: boolean;

  constructor(private router: ActivatedRoute, public loader: LoadingBarService) {}

  setPlotState(state: boolean) {
    if (state === true) {
      this.showPlot = true;
    }
    this.readyToShow();
  } 

  setTableState(state: boolean) {
    if (state === true) {
      this.showTable = true;
    }
    this.readyToShow();
  }

  readyToShow() {
    if (this.showPlot && this.showTable) {
      this.showContent = true;
    }
  }

  ngOnInit() {
    this.setupSubscription();
  }

  setupSubscription() {
    this.navigation = this.router.params.subscribe(params => {

      this.cristinID = params['id'];
      this.showTable = false;
      this.showPlot = false;
      this.showContent = false;
      this.showProgress = true;


      if (this.progressBar) {
        this.loader.set(0);
        this.progressBar.unsubscribe();
      }

      this.progressBar = this.loader.progress$.subscribe(progress => {
        if (progress == 0) {
          this.progressText = "";
        }
        else if (progress > 0 && progress < 45) {
          this.progressText = "Vi matcher nå fagfeltet til denne profilen..";
        }
        else if (progress >= 45 && progress < 60) {
          this.progressText = "Oppretter relevans profil..";
        }
        else if (progress >= 60 && progress < 75) {
          this.progressText = "Oppretter habilitet profil..";
        }
        else if (progress >= 75 && progress < 90) {
          if (this.showPlot) {
            this.progressText = "Laster inn tabell data..";
          } else {
            this.progressText = "Laster inn visualiserings data..";
          }
        }
        else if (progress >= 90 && progress < 100) {
          if (this.showPlot) {
            this.progressText = "Laster inn tabell data..";
          } else {
            this.progressText = "Laster inn visualiserings data..";
          }
        }
        else if (progress >= 100) {
          this.showProgress = false;
          this.loader.set(0);
          this.progressBar.unsubscribe();
        }
      });
    });   
  }

  ngOnDestroy() {
    this.navigation.unsubscribe();
    this.progressBar.unsubscribe();
  }
}
