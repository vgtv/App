import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { MatDialog } from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  cristinID: string;
  navigation: any; // sub

  activeProfile: boolean;
  showMessage: boolean;

  showPlot: boolean;
  showTable: boolean;
  showContent: boolean;

  constructor(private router: ActivatedRoute,
    public loader: LoadingBarService,
    public dialog: MatDialog) {
  }

  openLoader() {
    this.dialog.open(DialogComponent, {
      disableClose: true,
      width: '500px',
      closeOnNavigation: true
    });
  }

  ngOnInit() {
    this.setupSubscriptions();
  }

  ngOnDestroy() {
    this.dialog.closeAll();
    this.navigation.unsubscribe();
  }

  setActive(state: boolean) {
    this.activeProfile = state;
    if (this.activeProfile === true) {
      this.openLoader();
    }
    this.showMessage = !state;
  }

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
      this.dialog.closeAll();
    }
  }

  setupSubscriptions() {
    this.navigation = this.router.params.subscribe(params => {
      this.cristinID = params['id'];
      this.showTable = false;
      this.showPlot = false;
      this.showContent = false;

      this.activeProfile = false;
      this.showMessage = false;
      this.dialog.closeAll();
    });
  }
}
